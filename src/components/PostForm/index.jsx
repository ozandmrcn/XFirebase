import { toast } from "react-toastify";
import FormActions from "./FormActions";
import TextArea from "./TextArea";
import UserAvatar from "./UserAvatar";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useRef, useState } from "react";
import Preview from "./Preview";
import { uploadPhotoToS3 } from "./../../utils/uploadPhotoToS3";

const PostForm = ({ user }) => {
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const clearImage = () => {
    setPreview(null);
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target.text.value;
    const file = fileRef.current?.files[0];

    if (!text.trim()) {
      return toast.warning("Please enter a valid post text");
    }
    try {
      // If image exists, validate size
      if (file) {
        if (file.size > 2000000) {
          return toast.error("Image size exceeds the 2MB limit.");
        }
      }

      let imageUrl = null;

      if (preview && file && file.type.startsWith("image")) {
        try {
          imageUrl = await uploadPhotoToS3(file);
          console.log(imageUrl);
        } catch (err) {
          console.error(err);
          toast.error("Image upload failed");
          return;
        }
      }

      setIsLoading(true);

      const collectionRef = collection(db, "tweets");
      await addDoc(collectionRef, {
        content: { text, image: imageUrl },
        isEdited: false,
        likes: [],
        createdAt: serverTimestamp(),
        user: {
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        },
      });

      // Reset form
      e.target.reset();
      setPreview(null);
      if (fileRef.current) fileRef.current.value = "";
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      toast.success("Tweet posted successfully");
      setIsLoading(false);
    }
  };

  return (
    <div className="border-b border-tw-gray p-4 flex gap-3">
      <UserAvatar photo={user.photoURL} name={user.displayName} />

      <form onSubmit={handleSubmit} className="w-full pt-1">
        <TextArea />

        <Preview isLoading={isLoading} url={preview} clearImage={clearImage} />

        <FormActions
          isLoading={isLoading}
          fileRef={fileRef}
          onImageChange={onImageChange}
        />
      </form>
    </div>
  );
};

export default PostForm;
