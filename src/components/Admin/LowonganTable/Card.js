import { ThreeDotsVertical } from "react-bootstrap-icons";
import DataByStatus from "./DataByStatus";

export default function Card(props) {
  const { nama, perusahaan, createdAt, jumlahPelamar, status } = props;
  return (
    <tr className="hover:bg-slate-100 border-spacing-0 ">
      <td className="p-4 pl-6 rounded-l-xl border-0 ">
        <h1 className="font-rajdhani font-semibold text-md">
          {nama}
        </h1>
        <span className="flex gap-1 items-center">
          <p className=" text-xs">{perusahaan}</p>
        </span>
        <span className="flex gap-1 items-center">
          <p className=" text-xs">{createdAt}</p>
        </span>
      </td>

      <td className="w-fit">
        <div className="flex gap-1 items-center justify-center">
          <DataByStatus count={0} status="Belum diproses" />
          <DataByStatus count={0} status="Diproses" />
          <DataByStatus count={0} status="Diterima" />
          <DataByStatus count={0} status="Ditolak" />
        </div>
      </td>

      <td align="center" className="rounded-r-xl border-0 px-6">
        <select className="text-blue-500 font-semibold text-sm cursor-pointer">
          <option value="Aktif">Aktif</option>
          <option value="Tidak Aktif" selected>Tidak Aktif</option>
        </select>
      </td>

      <td align="center" className="pr-4">
        <div className="relative inline-block text-left">
          <button
            type="button"
            className="inline-flex justify-center"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <ThreeDotsVertical size={16} />
          </button>

          <div className="origin-top-right hidden absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Edit
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
