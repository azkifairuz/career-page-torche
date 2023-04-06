export default function Card(props) {
  const { name, age, city, appliedAt, experience, major, status } = props;
  return (
    <tr className="hover:bg-slate-100 border-spacing-0 ">
      <td>
        <input type="checkbox" className="ml-6" />
      </td>

      <td className="p-4 pl-6 rounded-l-xl border-0 ">
        <h1 className="font-rajdhani font-semibold text-md">{name}</h1>
        <p className=" text-xs">{age}</p>
        <p className=" text-xs">{city}</p>
      </td>

      <td className="text-sm">{major}</td>

      <td className="text-sm">{experience}</td>

      <td className="text-sm">{appliedAt}</td>

      <td align="center" className="rounded-r-xl border-0 px-6">
        <select className="text-blue-500 font-semibold text-sm cursor-pointer" value={status} onChange={() => (console.log("test  "))}>
          <option value={"Belum diproses"}>
            Belum diproses
          </option>
          <option value={"Diproses"}>Diproses</option>
          <option value={"Diterima"}>Diterima</option>
          <option value={"Ditolak"}>Ditolak</option>
          <option value={"Disimpan"}>Disimpan</option>
          <option value={"Diproses"}>Undur diri</option>
        </select>
      </td>
    </tr>
  );
}
