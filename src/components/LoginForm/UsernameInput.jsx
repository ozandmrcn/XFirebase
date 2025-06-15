const UsernameInput = ({ show }) => {
  return (
    show && (
      <div>
        <label htmlFor="username">Username: </label>

        <input type="text" name="username" className="input" required />
      </div>
    )
  );
};

export default UsernameInput;
