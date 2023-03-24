import { ChevronDown } from "react-bootstrap-icons";
import Item from "./item";

export default function ProgressCard(props) {
  const { percent } = props;
  const itemData = [
    { href: "/tentang", title: "Tentang" },
    { href: "/pengelaman", title: "Pengalaman Kerja" },
    { href: "/pendidikan", title: "Pendidikan" },
    { href: "/organisasi", title: "Organisasi" },
  ];
  return (
    <div className="shadow-card rounded-2xl p-9 text-start"> 
      <div className="flex gap-2 mb-3">
        <h1 className="font-cairo text-l-regular">Profile</h1>
        <span className="font-cairo text-l-bold">{percent}%</span>
      </div>
      <div>
        <div className="flex justify-between items-center relative">
          <div className="absolute w-1/2  bg-primaryBlue-main top-1/2 left-0 h-1  -translate-y-1/2 -z-10 rounded-md"></div>
          <div className="absolute  bg-neutral-300 top-1/2 left-0 h-1 -translate-y-1/2 -z-20 rounded-md w-full  "></div>
        </div>
      </div>
      <div className="text-start mt-3 -ml-5">
        {itemData.map((item)=>{
          return <Item href={item.href} title={item.title} />
        })}
      </div>
      <div className="flex gap-2 cursor-pointer items-center">
        {<ChevronDown size={15} className="text-neutral-600" />}
        <p className="text-neutral-600 font-cairo text-m-regular">Tampilkan Semua</p>
      </div>
    </div>
  );
}
