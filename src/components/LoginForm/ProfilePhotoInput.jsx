const ProfilePhotoInput = ({ show }) => {
  return (
    show && (
      <>
        <label htmlFor="profilePhoto">Profile Photo:</label>

        <input
          type="file"
          name="profilePhoto"
          className="bg-white text-black p-2 rounded-md cursor-pointer"
          required
        />
      </>
    )
  );
};

export default ProfilePhotoInput;
