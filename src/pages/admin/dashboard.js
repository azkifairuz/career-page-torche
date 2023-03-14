import LowonganCard from "../../components/admin/LowonganCard";

function Dashboard() {
  return (
    <div className="box-border flex-1 p-8 bg-[#fcfdfd] font-cairo flex flex-col gap-4">
      <section className="flex gap-4">
        <div className="rounded-xl bg-[#e6f2fc] p-6 w-1/4">
          <h1 className="text-2xl mb-4 font-bold">
            Selamat <br />
            datang!
          </h1>
          <p className="text-center text-sm">
            Yuk, kelola lowongan & proses lamaran yang masuk.
          </p>
        </div>
        <div className="rounded-xl bg-white shadow py-6 px-8 flex-1 flex items-center">
          <span>
            <h1 className="text-6xl mb-2 font-bold">0</h1>
            <p className="font-semibold text-sm text-gray-500">
              Lamaran baru
            </p>
          </span>
        </div>
        <div className="rounded-xl bg-white shadow py-6 px-8 flex-1 flex items-center">
          <span>
            <h1 className="text-6xl mb-2 font-bold">0</h1>
            <p className="font-semibold text-sm text-gray-500">
              Lamaran belum <br/> diproses
            </p>
          </span>
        </div>
      </section>
      <section className="flex gap-4">
        <div className="bg-white shadow rounded-xl p-4 w-1/2">
          <h1 className="px-4 font-rajdhani font-semibold">
            Lowongan belum diproses terbanyak
          </h1>
          <table className="w-full border-separate border-spacing-y-4">
            <tr className="bg-yellow-100 rounded-xl font-rajdhani ">
              <th
                align="left"
                className="p-4 px-6 rounded-l-xl border-0 font-semibold"
              >
                Lowongan
              </th>
              <th className=" border-0 font-semibold">Jumlah</th>
              <th className="rounded-r-xl border-0 font-semibold">{""}</th>
            </tr>
            <LowonganCard />
            <LowonganCard />
            <LowonganCard />
          </table>
        </div>
        <div className="bg-white shadow rounded-xl p-4 w-1/2">
          <h1 className="px-4 font-rajdhani font-semibold">
            Lowongan belum diproses terbanyak
          </h1>
          <table className="w-full border-separate border-spacing-y-4">
            <tr className="bg-green-200 rounded-xl font-rajdhani ">
              <th
                align="left"
                className="p-4 px-6 rounded-l-xl border-0 font-semibold"
              >
                Lowongan
              </th>
              <th className=" border-0 font-semibold">Jumlah</th>
              <th className="rounded-r-xl border-0 font-semibold">{""}</th>
            </tr>
            <LowonganCard />
            <LowonganCard />
            <LowonganCard />
          </table>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
