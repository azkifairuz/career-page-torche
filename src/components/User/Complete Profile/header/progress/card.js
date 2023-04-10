import { ChevronDown } from "react-bootstrap-icons";
import Item from "./item";
import { useState } from "react";

export default function ProgressCard(props) {
  const { percent } = props;
  const itemData = [
    { href: "/tentang", title: "Tentang" },
    { href: "/pengelaman", title: "Pengalaman Kerja" },
    { href: "/pendidikan", title: "Pendidikan" },
    { href: "/organisasi", title: "Organisasi" },
    { href: "/skill", title: "Skill" },
    { href: "/pernghargaan", title: "Pernghargaan" },
    { href: "/portofolio", title: "Portofolio" },
    { href: "/resume", title: "Resume" },
  ];
  const [IsOpen, setIsOpen] = useState(false)
  const [indexAkhir, setIndexAkhir] = useState(4)
  const handleOpen = ()=>{
    if (IsOpen) {
      setIndexAkhir(8)
      setIsOpen(!IsOpen)
    }else{
      setIsOpen(!IsOpen)
      setIndexAkhir(4)
    }
  }
  return (
    <div className="shadow-card rounded-2xl z-50 md:py-2 md:mt-8 md:px-8 bg-white lg:w-[397px] p-9 text-start"> 
      <div className="flex gap-2 mb-3 text-black ">
        <h1 className="font-cairo text-l-regular">Profile</h1>
        <span className="font-cairo text-l-bold">{percent}%</span>
      </div>
      <div>
        <div className="flex justify-between z-20 items-center relative text-black">
          <div className="absolute w-1/2  bg-primaryBlue-main top-1/2 left-0 h-1  -translate-y-1/2 -z-10 rounded-md"></div>
          <div className="absolute  bg-neutral-300 top-1/2 left-0 h-1 -translate-y-1/2 -z-20 rounded-md w-full  "></div>
        </div>
      </div>
      <div className="text-start md:hidden lg:block lg:pl-2 mt-3 gap-2 z-20 -ml-5">
        {itemData.slice(0,indexAkhir).map((item)=>{
          return <Item href={item.href} title={item.title} />
        })}
      </div>
      <div className="flex gap-2 cursor-pointer mt-3 items-center">
        {<ChevronDown onClick={handleOpen} size={15} className="text-neutral-600" />}
        <p className="text-neutral-600 font-cairo text-m-regular">Tampilkan Semua</p>
      </div>
    </div>
  );
}
