const ButtonProduk = ({ text }) => {
  return (
    <button
      type="button"
      className="bg-slate-100 w-1/5 h-4/5 rounded-3xl border-2 border-slate-400 flex gap-2 items-center"
    >
      <svg className="h-4/5 w-2/5 bg-slate-400 animate-pulse ml-2"></svg>
      <span className="text-slate-700 font-bold text-left">{text}</span>
    </button>
  );
};

export default ButtonProduk;
