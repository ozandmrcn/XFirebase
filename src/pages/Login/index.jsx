import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

import LoginForm from "../../components/LoginForm";
import GoogleButton from "../../components/LoginForm/GoogleButton";
import LoadingModal from "../../components/Modal/LoadingModal";
import Loader from "../../components/Loader";

const Login = () => {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/feed");
      } else {
        setCheckingAuth(false); // kullanıcı yoksa loader'ı kaldır
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {/* Login arkaplanı her zaman göster */}
      <div className="h-screen bg-[#242424] text-white grid place-items-center px-4 loginmenu">
        <div className="fixed bg-black py-16 px-28 rounded-lg flex flex-col gap-10 sm:w-[80%] max-w-[550px]">
          <div className="flex justify-center">
            <img src="/x-logo.webp" alt="x-logo" className="h-[60px]" />
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-center">
            Login to X
          </h1>

          <GoogleButton />
          <LoginForm />
        </div>
      </div>

      {/* Kullanıcı login olmuşsa, loader aç → feed'e atılana kadar */}
      <LoadingModal isOpen={checkingAuth}>
        <Loader designs={["size-20"]} />
      </LoadingModal>
    </>
  );
};

export default Login;
