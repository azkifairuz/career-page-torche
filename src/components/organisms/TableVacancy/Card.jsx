import { Link } from "react-router-dom";

import { ThreeDotsVertical } from "react-bootstrap-icons";
import DataByStatus from "./DataByStatus";

import Pin from "assets/icons/pin.svg";

export default function Card(props) {
  const { name, address, type, index, applicantsCount, status } = props;

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <tr className="border-spacing-0 ">
      <td
        className={`flex flex-col gap-3 pl-[27px] ${
          index === 0 ? "pt-12" : "pt-7"
        } rounded-l-xl border-0 font-inter`}
      >
        <h1 className="heading-xs-medium">{name}</h1>
        <span className="flex gap-1 items-center">
          <img src={Pin} alt="pin" />
          <p className="text-s-regular">{address}</p>
        </span>
        <p className="text-s-regular opacity-50">{type}</p>
      </td>

      <td className={index === 0 && "pt-12"}>
        <div className="flex gap-3 items-center justify-center">
          <DataByStatus
            count={applicantsCount.belumDiproses}
            status="Belum diproses"
          />
          <DataByStatus count={applicantsCount.diproses} status="Diproses" />
          <DataByStatus count={applicantsCount.diterima} status="Diterima" />
          <DataByStatus count={applicantsCount.ditolak} status="Ditolak" />
        </div>
      </td>

      <td align="center" className={`${index === 0 && "pt-12"} rounded-r-xl border-0 px-6`}>
        <select
          value={status}
          className="text-l-bold py-2 px-4 rounded-xl cursor-pointer text-success-main bg-success-border"
          onChange={handleChange}
        >
          <option value="Aktif">Aktif</option>
          <option value="Tutup">Tutup</option>
        </select>
      </td>

      <td align="center" className={`${index === 0 && "pt-12"} pr-4`}>
        <div className="relative inline-block text-left">
          <button
            type="button"
            className="inline-flex justify-center text-l-regular text-primaryBlue-main hover:underline"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Edit Lowongan
          </button>

          <div className="origin-top-right hidden absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Edit
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Delete
              </Link>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
