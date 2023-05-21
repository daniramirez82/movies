function ButtonSmall({label, children}) {
  return (
    <div className=" w-fit h-8 rounded-xl px-3 flex items-center bg-main">
      <div className="flex justify-start items-center">
        <div className="pr-4">{children}</div>
        <div className="text-white">{label}</div>
      </div>
    </div>
  );
}

export default ButtonSmall;
