import { useState } from "react";
import {
  AiOutlineEye as Open,
  AiOutlineEyeInvisible as Close,
} from "react-icons/ai";

const PasswordInput = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <label htmlFor="password">Password: </label>

      <div className="relative w-full">
        <input
          type={isShow ? "text" : "password"}
          name="password"
          className="input"
          required
        />

        <button
          className="absolute end-3 top-[50%] text-zinc-700 text-xl cursor-pointer translate-y-[-40%]"
          onClick={(e) => {
            e.preventDefault();

            setIsShow(!isShow);
          }}
        >
          {isShow ? <Open /> : <Close />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
