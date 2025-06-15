import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { auth, db } from "../../firebase";

const Buttons = ({ tweet }) => {
  const isLiked = tweet.likes.includes(auth.currentUser.uid); // check if the current user has liked the tweet

  const toggleLike = async () => {
    // Ref of doc
    const docRef = doc(db, "tweets", tweet.id);

    await updateDoc(docRef, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid)
        : arrayUnion(auth.currentUser.uid),
    });
  };

  return (
    <div className="flex justify-between items-center text-zinc-500">
      <button className="post-icon hover:text-blue-400 hover:bg-blue-400/20">
        <FaRegComment />
      </button>

      <button className="post-icon hover:text-green-400 hover:bg-green-400/20">
        <FaRetweet />
      </button>

      <button
        onClick={toggleLike}
        className="post-icon hover:text-pink-400 hover:bg-pink-400/2 flex items-center gap-2 transition relative"
      >
        {isLiked ? (
          <FaHeart className="text-pink-500 transition" />
        ) : (
          <FaRegHeart />
        )}
        {tweet.likes.length > 0 && (
          <span className="text-pink-500 transition absolute -end-1">
            {tweet.likes.length}
          </span>
        )}
      </button>

      <button className="post-icon hover:text-blue-400 hover:bg-blue-400/20 transition">
        <FaShareNodes />
      </button>
    </div>
  );
};

export default Buttons;
