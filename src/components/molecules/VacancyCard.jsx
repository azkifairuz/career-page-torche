import Pin from "assets/icons/pin.svg";

export default function VacancyCard(props) {
  const {
    name,
    endDate,
    address,
    type,
    index,
    applicantsCount: { total },
  } = props;
  return (
    <tr className=" text-black">
      <td
        className={`flex flex-col gap-3 pl-[27px] ${
          index === 0 ? "pt-12" : "pt-7"
        } rounded-l-xl border-0 font-inter`}
      >
        <h1 className="text-m-regular md:text-l-regular">{name}</h1>
        <span className="flex gap-1 items-center">
          <img src={Pin} alt="pin" />
          <p className="text-s-regular">{address}</p>
        </span>
        <p className="text-s-regular opacity-50">{type}</p>
      </td>

      <td className={index === 0 && "pt-12"}>
        <h1 className="text-m-regular md:text-l-regular text-center">{total}</h1>
        <p className="text-s-regular text-black text-opacity-50 text-center mt-[8px]">
          Pelamar
        </p>
      </td>

      <td className={` hidden md:table-cell ${index === 0 && "pt-12"}`}>
        <h1 className="text-l-regular text-center">{endDate}</h1>
      </td>

      <td
        align="center"
        className={`${index === 0 && "pt-12"} rounded-r-xl border-0 pr-8 `}
      >
        <button className="text-blue-500 font-semibold text-m-regular cursor-pointer  ">
          Lihat Detail
        </button>
      </td>
    </tr>
  );
}
