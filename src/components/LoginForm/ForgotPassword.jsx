import { useRef, useState } from "react";
import Modal from "../Modal";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase";
const ForgotPassword = ({ show }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef();

  const handleClick = () => {
    const email = inputRef.current.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info("Reset link sent to your email");
        setIsOpen(false);
      })
      .catch((err) => {
        toast.error("Mail could not be sent :");
      });
  };

  return show ? (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-end text-sm text-gray-500 hover:text-gray-400 mt-2 cursor-pointer"
        type="button"
      >
        <span>Forgot password?</span>
      </button>

      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl">Forgot password?</h1>

          <p>
            Enter your email address and we'll send you instructions to reset
            your password.
          </p>

          <input
            type="email"
            className="input mt-10"
            placeholder="Enter your email"
            ref={inputRef}
          />

          <button
            className="bg-white hover:bg-gray-300 transition text-black rounded-full mt-8 py-1 cursor-pointer"
            onClick={handleClick}
            type="button"
          >
            Send reset link to email
          </button>

          <button
            className="bg-zinc-400 hover:bg-zinc-500 transition text-black rounded-full mt-3 py-1 cursor-pointer"
            onClick={close}
            type="button"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  ) : (
    <div className="h-[28px] w-1"></div>
  );
};

export default ForgotPassword;
