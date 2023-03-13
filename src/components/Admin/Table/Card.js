import { ThreeDots, ThreeDotsVertical } from "react-bootstrap-icons";

export default function Card() {
  return (
    <tr className="hover:bg-slate-100">
      <td className="p-4 pl-6 rounded-l-xl border-0">
        <h1 className="font-rajdhani font-semibold text-md">
          Account Executive
        </h1>
        <span className="flex gap-1 items-center">
          <p className=" text-xs">PT. Torche Education</p>
        </span>
        <span className="flex gap-1 items-center">
          <p className=" text-xs">Dibuat pada 10 Maret 2023</p>
        </span>
      </td>

      <td>
        <h1 className="font-semibold font-rajdhani text-xl text-center">88</h1>
        <p className="text-xs text-center">Pelamar</p>
      </td>

      <td align="center" className="rounded-r-xl border-0 px-6">
        <button className="text-blue-500 font-semibold text-sm">Lihat</button>
      </td>

      <td align="center">
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
