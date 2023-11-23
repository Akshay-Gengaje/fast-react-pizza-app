const Button = ({ children, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="focus: inline-block rounded-md bg-yellow-400 px-4 py-3 font-semibold
  uppercase tracking-wider text-stone-800 outline-none transition-colors 
  duration-300 hover:bg-yellow-300
  focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"
    >
      {children}
    </button>
  );
};

export default Button;