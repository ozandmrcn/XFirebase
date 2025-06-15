import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import EditModal from "./../Modal/EditModal";
const Dropdown = ({ tweet }) => {
  const checkboxRef = useRef();

  const isOwn = tweet.user.id === auth.currentUser.uid;

  const [isOpen, setIsOpen] = useState();

  const handleDelete = () => {
    // Confirmation from user
    if (!confirm("Are you sure?")) return;

    // Ref of doc that'll delete
    const docRef = doc(db, "tweets", tweet.id);

    deleteDoc(docRef).then(() => toast.info("Tweet deleted successfully"));
  };

  return (
    isOwn && (
      <>
        <label className="popup">
          <input ref={checkboxRef} type="checkbox" />
          <div className="burger" tabIndex="0">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="popup-window">
            <legend>Actions</legend>
            <ul>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(true);

                    checkboxRef.current.checked = false;
                  }}
                >
                  <MdEdit className="text-blue-500 text-base" />
                  <span>Edit</span>
                </button>
              </li>
              <hr />
              <li>
                <button onClick={handleDelete}>
                  <MdDelete className="text-red-500 text-base" />
                  <span>Delete</span>
                </button>
              </li>
            </ul>
          </nav>
        </label>

        <EditModal
          isOpen={isOpen}
          tweet={tweet}
          close={() => setIsOpen(false)}
        />
      </>
    )
  );
};

export default Dropdown;
