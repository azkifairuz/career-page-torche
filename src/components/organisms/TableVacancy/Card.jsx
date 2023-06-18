import { Link } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";

import DataByStatus from "./DataByStatus";

import Pin from "assets/icons/pin.svg";
import StatusSelect from "components/atoms/StatusSelect";

export default function Card(props) {
  const {
    id,
    name,
    address,
    type,
    index,
    applicantsCount,
    status,
    active,
    setActiveIndex,
  } = props;

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.id !== "edit") {
        setActiveIndex(null);
      }
    });
  }, [setActiveIndex]);

  return (
    <tr className="border-spacing-0">
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
      <td className={index === 0 && "pt-12 "}>
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

      <td
        align="center"
        className={`${index === 0 && "pt-12"} rounded-r-xl border-0 px-6 py-4`}
      >
        <StatusSelect
          title="Status"
          data={["Aktif", "Tutup"]}
          status={status}
        />
      </td>
      <td
        align="center"
        className={`${index === 0 && "pt-6"} rounded-r-xl border-0 pr-8 `}
      >
        <div className="relative">
          <button
            id="edit"
            type="button"
            className="w-full text-center text-l-regular text-primaryBlue-main hover:underline"
            onClick={() => setActiveIndex(active ? null : index)}
          >
            Edit Lowongan
          </button>

          <div
            className={` ${
              active ? "block" : "hidden"
            } absolute origin-top-right z-50 right-0 left-0 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            <Link
              to={`/admin/vacancy/${id}/edit`}
              className="block text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Edit
            </Link>
            <Link
              to="#"
              className="block text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Delete
            </Link>
          </div>
        </div>
      </td>
    </tr>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  applicantsCount: PropTypes.shape({
    belumDiproses: PropTypes.number.isRequired,
    diproses: PropTypes.number.isRequired,
    diterima: PropTypes.number.isRequired,
    ditolak: PropTypes.number.isRequired,
  }).isRequired,
  status: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
};
