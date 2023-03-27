import * as Icon from "react-bootstrap-icons";

export default function VacancyCard(props) {
  const {
    vacancy: {
      name,
      company,
      endDate,
      applicantsCount: { total },
    },
  } = props;
  return (
    <tr className="hover:bg-slate-100 ">
      <td className="pl-[27px] py-4 rounded-l-xl border-0">
        <h1 className="font-rajdhani font-semibold text-md">{name}</h1>
        <span className="mt-[12px] flex gap-1 items-center">
          <Icon.PinFill size={10} />
          <p className=" text-xs">{company}</p>
        </span>
        <p className="mt-[12px] text-xs">Internship</p>
      </td>

      <td>
        <h1 className="text-l-regular text-center">
          {total}
        </h1>
        <p className="text-s-regular text-black text-opacity-50 text-center mt-[8px]">Pelamar</p>
      </td>

      <td>
        <h1 className="text-m-regular text-center">
          {endDate}
        </h1>
      </td>

      <td align="right" className="rounded-r-xl border-0 pr-[98px]">
        <button className="text-blue-500 font-semibold text-sm cursor-pointer">
          Lihat Detail
        </button>
      </td>
    </tr>
  );
}
