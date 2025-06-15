import { CiImageOn as Image } from "react-icons/ci";
import { MdOutlineGifBox as Gif } from "react-icons/md";
import { FaRegSmile as Smile } from "react-icons/fa";
import Loader from "../Loader";

const FormActions = ({ isLoading, onImageChange, fileRef }) => {
  return (
    <div className="flex justify-between">
      <div className="text-tw-blue text-xl flex gap-4">
        <label htmlFor="image" type="button" className="form-icon">
          <input
            ref={fileRef}
            id="image"
            type="file"
            className="hidden"
            onChange={onImageChange}
          />
          <Image />
        </label>
        <label type="button" className="form-icon">
          <Gif />
        </label>
        <label type="button" className="form-icon">
          <Smile />
        </label>
      </div>

      <button
        disabled={isLoading}
        className="bg-secondary font-bold px-5 py-[6px] rounded-full text-primary tracking-wide hover:brightness-75 min-w-[100px] transition cursor-pointer flex justify-center"
      >
        {isLoading ? <Loader /> : "Send"}
      </button>
    </div>
  );
};

export default FormActions;
