import { IoMdClose } from "react-icons/io";

const Preview = ({ url, clearImage, isLoading }) => {
  return (
    url && (
      <div className="relative mb-5">
        <button
          disabled={isLoading}
          onClick={clearImage}
          type="button"
          className="absolute top-3 end-3 p-3 bg-primary/90 rounded-full transition hover:bg-zinc-800 cursor-pointer text-xl disabled:bg-gray-600"
        >
          <IoMdClose />
        </button>

        <img
          src={url}
          alt="preview-image"
          className="rounded-md max-w-60 max-h-60"
        />
      </div>
    )
  );
};

export default Preview;
