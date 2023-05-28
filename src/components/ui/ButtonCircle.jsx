const ButtonCircle = ({ direction, children }) => {
  return <div className={`flex w-8 h-8 rounded-full justify-center items-center bg-main ${direction ? "rotate-90" : "-rotate-90"} transition-all duration-200 ease-in-out`}>{children} </div>;
};

export default ButtonCircle;