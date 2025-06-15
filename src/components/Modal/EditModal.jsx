import { toast } from "react-toastify";
import Modal from ".";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import LoadingModal from "./LoadingModal";
import { useState } from "react";
import Loader from "../Loader";

const EditModal = ({ isOpen, close, tweet }) => {
  const [editModalLoading, setEditModalLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target[0].value.trim();

    if (!text) {
      return toast.info("Please enter some text");
    }

    try {
      const docRef = doc(db, "tweets", tweet.id);

      let updateData = {
        "content.text": text,
        isEdited: true,
      };

      setEditModalLoading(true);

      await updateDoc(docRef, updateData);

      close();
    } catch (error) {
      console.error(error);
    } finally {
      setEditModalLoading(false);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} close={close}>
        <h1 className="text-2xl">Edit Tweet</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-10 min-w-[90%]"
        >
          <label className="text-sm mb-3">Edit Text</label>
          <textarea
            defaultValue={tweet?.content?.text}
            className="resize-y min-h-20 max-h-[250px] bg-black text-secondary border border-zinc-700 rounded-md p-3 outline-none"
          ></textarea>

          <div className="flex justify-end gap-5 mt-10">
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => close()}
              disabled={editModalLoading}
            >
              Cancel
            </button>
            <button
              disabled={editModalLoading}
              className="bg-secondary text-black px-3 py-1 rounded-md cursor-pointer hover:bg-secondary/70 transition min-w-[80px]"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>

      {/* Loading Modal */}
      <LoadingModal isOpen={editModalLoading}>
        <Loader designs={["size-20"]} />
      </LoadingModal>
    </>
  );
};

export default EditModal;
