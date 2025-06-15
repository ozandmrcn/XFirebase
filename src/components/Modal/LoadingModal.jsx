const LoadingModal = ({ children, isOpen }) => {
  return (
    isOpen && (
      <div className="fixed bg-zinc-800/50 inset-0 backdrop-blur-md z-[999999999999] grid place-items-center">
        <div className="flex flex-col items-center justify-center">
          <div>
            <div className="flex justify-end"></div>
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default LoadingModal;
