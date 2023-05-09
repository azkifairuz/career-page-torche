import React from "react";
import PillButton from "./PillButton";

export default function FilterTab(props) {
  const [active, setActive] = React.useState("Semua");
  const { data } = props;
  return (
    <div className="py-[10px] flex gap-[7px] transition-all duration-500 ease-in-out">
      <PillButton
        isActive={active === "Semua"}
        name="Semua"
        onClick={() => setActive("Semua")}
      />
      {data.map((item, index) => (
        <PillButton
          key={item+index}
          isActive={active === item}
          name={item}
          onClick={() => setActive(item)}
        />
      ))}
    </div>
  );
}
