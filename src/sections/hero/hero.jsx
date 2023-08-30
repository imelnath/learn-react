import InputNumber from "./components/inputNumber";

export default function Hero() {
  return (
    <section className="w-full h-[25rem] flex justify-center items-center bg-gradient-to-r from-blue-700 to-teal-400">
      <div className="max-w-7xl flex">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-white text-3xl">
              Bimbel Online & Offline Terbesar, Terlengkap, dan Terbukti di
              Indonesia
            </h1>
            <p className="text-white">
              Diskon spesial untukmu dengan isi nomor HP sekarang
            </p>
          </div>
          <InputNumber />
        </div>
        <div title="Hero Image" className="w-1/2">
          <div className="bg-white animate-pulse w-full h-48"></div>
        </div>
      </div>
    </section>
  );
}
