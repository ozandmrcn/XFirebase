const SubmitButton = ({ show }) => {
  return (
    <button className="mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300 cursor-pointer">
      {show ? "Signup" : "Login"}
    </button>
  );
};

export default SubmitButton;
