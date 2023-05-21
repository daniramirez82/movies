function ButtonBig({ label }) {
  return (
    <div className="w-fit rounded-2xl px-12 py-4 flex items-center bg-main">
      <div className="text-white font-semibold text-xl">{label}</div>
    </div>
  );
}

export default ButtonBig;
