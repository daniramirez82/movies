/* eslint-disable react/prop-types */
function Button({ label, showMenu, children }) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${
        showMenu ? "w-full" : "w-14"
      } h-14 rounded-3xl px-4 flex items-center mb-4 hover:bg-main transition-all ease-in-out duration-150`}
    >
      <div className="flex justify-start items-center">
        <div className="pr-6">{children}</div>
        <div
          className={`${
            showMenu ? "opacity-100" : "opacity-0"
          } transition-all ease-in-out delay-300 duration-500 font-bold`}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export default Button;
