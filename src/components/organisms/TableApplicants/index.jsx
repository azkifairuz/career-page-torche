import Card from "./Card";

export default function Table(props) {
  const { data } = props;
  return (
    <table className="flex-1 w-full">
      <thead className="bg-primaryBlue-main text-neutral-100 rounded-l-[32px] heading-s-bold w-full">
        <th align="left" className="rounded-l-[32px] ">
          <div className="pl-4 py-3 flex items-center">
            <input type="checkbox" className="w-6 h-6 bg-black " />
          </div>
        </th>
        <th className="">Profil</th>
        <th className="">Pengalaman</th>
        <th className="">Tanggal Melamar</th>
        <th className="rounded-r-[32px] border-0 pr-4">Status</th>
      </thead>
      <tbody className="w-full flex-1">
        {data.map((item, index) => (
          <Card key={index} {...item} index={index} />
        ))}
      </tbody>
    </table>
  );
}
