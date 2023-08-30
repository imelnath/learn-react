export default function Paket() {
  return (
    <section className="w-full h-screen flex justify-center py-24 bg-slate-200">
      <div className="max-w-6xl w-full flex-col">
        <div className="w-full h-12 flex items-center gap-3">
          <h1 className="font-semibold text-black text-2xl">
            Paket populer untuk
          </h1>
          <button
            type="button"
            className="bg-slate-100 w-36 h-12 border-2 border-slate-300 rounded-xl"
          >
            <span className="text-slate-700 font-bold text-left">
              SMA - Kelas 12
            </span>
          </button>
        </div>
        <div className="w-full h-fit flex items-center gap-3 py-5">
          <div className="w-1/5 h-full bg-red-200 flex flex-col rounded-xl">
            <div className="m-3 space-y-2">
              <div className="bg-blue-600 rounded-full w-fit h-fit flex items-center justify-center">
                <div className="m-2 flex gap-2">
                  <div
                    title="Icon"
                    className="bg-slate-600 animate-pulse w-4 h-4"
                  ></div>
                  <p className="text-xs font-semibold text-white">Terpopuler</p>
                </div>
              </div>
              <p className="text-xs font-medium">ruangbelajar</p>
              <h1 className="font-semibold text-lg">
                Puluhan ribu video belajar adaptif dan latihan soal
              </h1>
            </div>
            <div
              title="Image"
              className="bg-slate-300 animate-pulse w-full h-28 justify-end"
            ></div>
            <div className="bg-white rounded-xl">
              <div className="mx-3">
                <p className="text-slate-700 text-sm">
                  ruangbelajar SMA/SMK (2 tahun){" "}
                  <span className="line-through">Rp 3.200.000</span>
                </p>
                <p>
                  <span className="bg-red-100 text-red-700 text-sm">72%</span>
                  <span className="text-black font-medium"> Rp 899.000</span>
                </p>
                <button
                  type="submit"
                  className="bg-orange-500 text-white rounded-full w-full h-10 active:scale-95 active:bg-orange-600"
                >
                  <span className="text-white font-semibold">Beli Paket</span>
                </button>
                <p className="text-black text-sm">
                  <span className="font-semibold">96%</span> pengguna mengalami
                  kenaikan nilai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
