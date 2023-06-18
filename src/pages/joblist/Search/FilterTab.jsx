import { useState } from "react";
import PropTypes from "prop-types";

import PillButton from "./PillButton";

export default function FilterTab(props) {
  const { data } = props;
  const [active, setActive] = useState("Semua");

  return (
    <div className="py-[10px] flex gap-[7px] transition-all duration-500 ease-in-out overflow-x-scroll">
      <PillButton
        isActive={active === "Semua"}
        name="Semua"
        onClick={() => setActive("Semua")}
      />
      {data.map((item, index) => (
        <PillButton
          key={item + index}
          isActive={active === item}
          name={item}
          onClick={() => setActive(item)}
        />
      ))}
    </div>
  );
}

FilterTab.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};
