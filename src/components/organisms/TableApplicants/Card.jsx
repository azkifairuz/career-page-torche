import ProfileIcon from "assets/images/person.png";
import Select from "components/atom/Select";

export default function Card(props) {
  const { name, age, appliedAt, experience, major, status, index } = props;
  const statuses = [
    "Belum diproses",
    "Diproses",
    "Diterima",
    "Ditolak",
    "Disimpan",
    "Undur diri",
  ];
  return (
    <tr className={`py-5 ${index === 0 && "pt-[31px]"}`}>
      <td>
        <div className="pl-4 flex items-center">
          <input type="checkbox" className="w-6 h-6 bg-black " />
        </div>
      </td>

      <td align="center" className={`py-5 ${index === 0 && "pt-[31px]"}`}>
        <div className="flex items-center text-left w-fit gap-2 text-black">
          <img src={ProfileIcon} alt="profile" className="w-[60px] h-[60px]" />
          <section>
            <h1 className="text-l-regular">{name}</h1>
            <p className="text-s-regular opacity-50">{age}</p>
            <p className="text-s-regular opacity-50">{major}</p>
          </section>
        </div>
      </td>

      <td align="center" className={`py-5 ${index === 0 && "pt-[31px]"}`}>
        {experience}
      </td>

      <td align="center" className={`py-5 ${index === 0 && "pt-[31px]"}`}>
        {appliedAt}
      </td>

      <td align="center" className={`py-5 ${index === 0 && "pt-[31px]"} `}>
        <Select title={"status"} active={status} data={statuses} />
      </td>
    </tr>
  );
}
