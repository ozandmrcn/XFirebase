import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Protected = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    // Check if user is logged in
    const unsub = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );

    return () => unsub();
  }, []);

  // Return to home page if user is not logged in
  if (user === null || user?.emailVerified === false) {
    // Return to home page if user is not verified
    if (user?.emailVerified === false) toast.info("Verify your email first");

    return <Navigate to="/" replace />;
  }

  return <Outlet context={user} />;
};

export default Protected;
