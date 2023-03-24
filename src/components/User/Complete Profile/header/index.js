import sample from "assets/index.png";
import Header from "components/User/sidebar/header";

import * as Icon from "react-bootstrap-icons";

import Item from "./item";
import OptionBar from "./option bar";
import ProgressCard from "./progress/card";
export default function HeaderSection() {
  const information = [
    { Title: "Phone", Desc: "+62 1234 5721 63" },
    { Title: "Email", Desc: "loremipsum@gmail.com" },
    { Title: "Lokasi", Desc: "Jakarta, Indonesia" },
    { Title: "Usia,jenis-kelamin", Desc: "25,Lak-Laki" },
    { Title: "Status", Desc: "Open to Work" },
    { Title: "Nationality", Desc: "indonesia" },
  ];
  return (
    <div className="p-6">
      <div>
        {
          <Header
            classname="flex flex-col justify-center items-center gap-2 p-10 w-full "
            image={sample}
            name="John Doe"
            profesi="web developer"
          />
        }
      </div>
      <div className="grid grid-cols-2 items-center gap-2">
        {information.map((info) => {
          return <Item title={info.Title} desc={info.Desc} />;
        })}
      </div>
      <div>{<ProgressCard percent="50" />}</div>
      <div className="mt-6">
            <OptionBar/>
      </div>
    </div>
  );
}
