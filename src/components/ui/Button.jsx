/* eslint-disable react/prop-types */
function Button({ label, children }) {
  return (
    <div className=" w-full h-14 rounded-3xl px-4 flex items-center mb-4 hover:bg-main transition ease-in-out delay-150">
      <div className="flex justify-start items-center">
        <div className="pr-6">{children}</div>
        <div>{label}</div>
      </div>
    </div>
  )
}

export default Button;
