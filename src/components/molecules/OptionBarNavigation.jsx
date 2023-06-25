import { useState } from "react";
import Item from "../atoms/OptionBarNavItem";

export default function OptionBarNavigation() {
  const [isActive, setActive] = useState(1);
  const itemData = [
    { id: 1, title: "Tentang" },
    { id: 2, title: "Pengalaman Kerja" },
    { id: 3, title: "Pendidikan" },
    { id: 4, title: "Organisasi" },
    { id: 5, title: "Skills" },
    { id: 6, title: "Penghargaan" },
    { id: 7, title: "Portofolio" },
    { id: 9, title: "Resume" },
  ];
  return (
    <div className="flex md:flex-col lg:gap-0  md:w-[175px] lg:max-w-[397px] md:scrollbar-hide  w-full overflow-x-auto">
      {itemData.map((item) => {
        return (
          <Item
            key={item.id}
            index={item.id}
            setIsActive={setActive}
            isActive={isActive === item.id}
            href={item.href}
            title={item.title}
          />
        );
      })}
    </div>
  );
}
