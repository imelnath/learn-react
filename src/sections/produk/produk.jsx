import ButtonProduk from "./components/buttonProduk";

export default function Produk() {
  return (
    <section className="bg-white max-w-6xl w-full h-28 rounded-3xl flex items-center gap-2 p-2 absolute top-[22rem] left-1/2 -translate-x-1/2">
      <ButtonProduk text="Persiapan UTBK-SNBT" />
      <ButtonProduk text="Bimbel Online Interaktif" />
      <ButtonProduk text="Bimbel Tatap Muka" />
      <ButtonProduk text="Video Belajar dan Soal" />
      <ButtonProduk text="English Academy" />
      <ButtonProduk text="Semua Produk" />
    </section>
  );
}
