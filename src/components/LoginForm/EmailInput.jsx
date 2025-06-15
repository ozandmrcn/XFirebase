const EmailInput = () => {
  return (
    <div>
      <label htmlFor="email">Email: </label>

      <input type="email" name="email" className="input" required />
    </div>
  );
};

export default EmailInput;
