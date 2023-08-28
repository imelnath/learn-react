export default function InputNumber() {
  return (
    <div className="max-w-fit border flex p-2 rounded-full bg-white">
      <form className="flex items-center gap-2">
        <input type="number" className="text-black" placeholder="+62" />
        <button
          type="submit"
          className="bg-orange-500 text-white rounded-full py-2 px-8 active:scale-95 active:bg-orange-600"
        >
          Dapatkan Diskon
        </button>
      </form>
    </div>
  );
}
