const AuthToggle = ({ isSignUp, setIsSignUp }) => {
  return (
    <p className="mt-5 select-none">
      <span className="text-gray-500">
        {isSignUp ? "You already have account ?" : "Don't have account ?"}
      </span>
      <span
        onClick={() => setIsSignUp(!isSignUp)}
        className="cursor-pointer ms-2 text-blue-500 hover:underline"
      >
        {isSignUp ? "Login" : "Signup"}
      </span>
    </p>
  );
};

export default AuthToggle;
