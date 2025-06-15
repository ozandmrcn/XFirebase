import ForgotPassword from "./ForgotPassword";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import AuthToggle from "./AuthToggle";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UsernameInput from "./UsernameInput";
import ProfilePhotoInput from "./ProfilePhotoInput";
import { uploadProfilePhotoToS3 } from "../../utils/uploadProfilePhotoToS3";
import LoadingModal from "./../Modal/LoadingModal";
import Loader from "../Loader";

const LoginForm = () => {
  const navigate = useNavigate(); // for page navigation
  const [isSignUp, setIsSignUp] = useState(false); // toggle between sign in and sign up
  const [isLoginLoading, setIsLoginLoading] = useState(false); // loading state for sign in

  // called when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    const formData = new FormData(e.target); // get all form data
    const { email, password } = Object.fromEntries(formData.entries()); // extract email & password

    try {
      setIsLoginLoading(true); // show loading state
      if (isSignUp) {
        // sign up flow

        // get profile photo file from form
        const file = formData.get("profilePhoto");

        // check file size, limit 2MB
        if (file && file.size > 2 * 1024 * 1024) {
          return toast.error("Profile photo must be smaller than 2MB");
        }

        // create new user with email and password
        const res = await createUserWithEmailAndPassword(auth, email, password);

        // send email verification
        await sendEmailVerification(res.user);

        // upload photo to S3 and get URL
        const photoURL = await uploadProfilePhotoToS3(file, res.user.uid);

        // update user profile with username and photo
        await updateProfile(res.user, {
          displayName: formData.get("username"),
          photoURL,
        });

        // switch back to sign in form
        setIsSignUp(false);

        // inform user to check email for verification
        toast.info(
          "We've sent you a verification mail (check spam too). Please verify your account to continue."
        );
      } else {
        // sign in flow

        // sign in user
        const res = await signInWithEmailAndPassword(auth, email, password);

        // check if email is verified
        if (!res.user.emailVerified) {
          return toast.error("Please verify your email to continue");
        }

        // success message
        toast.info("Logged in");

        // navigate to feed page
        navigate("/feed");
      }

      // clear the form
      e.target.reset();
    } catch (error) {
      // show error message
      toast.error("Error: " + error.code);
    } finally {
      setIsLoginLoading(false); // hide loading state
    }
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          {/* show username input only on sign up */}
          <UsernameInput show={isSignUp} />

          {/* email input */}
          <EmailInput />

          {/* password input */}
          <PasswordInput />

          {/* profile photo input only on sign up */}
          <ProfilePhotoInput show={isSignUp} />
        </div>

        {/* forgot password link only on sign in */}
        <ForgotPassword show={!isSignUp} />

        {/* submit button, text changes based on mode */}
        <SubmitButton show={isSignUp} />

        {/* toggle between sign up and sign in */}
        <AuthToggle isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
      </form>

      <LoadingModal isOpen={isLoginLoading}>
        <Loader designs={["size-20"]} />
      </LoadingModal>
    </>
  );
};

export default LoginForm;
