const Button = ({ children, type, onClick, classes, ...props }) => {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`relative before:absolute before:content-[''] before:w-full before:h-full before:min-w-[48px] before:min-h-[48px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg bg-black text-white dark:bg-white dark:text-black transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 link ${classes}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  return (
    <button
      onClick={onClick}
      type="button"
      className={`relative before:absolute before:content-[''] before:w-full before:h-full before:min-w-[48px] before:min-h-[48px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center gap-2 transition-all ease-out duration-300 text-black dark:text-white hover:opacity-70 active:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 tablet:first:ml-0 ${classes} link`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
