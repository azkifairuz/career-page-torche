import sample from "assets/index.png";
import Header from "components/organisms/userSidebar/header";
import Item from "./item";
import ProgressCard from "./progress/card";
export default function HeaderSection() {
  const information = [
    { id : 1 ,Title: "Phone", Desc: "+62 1234 5721 63" },
    { id : 2 ,Title: "Email", Desc: "loremipsum@gmail.com" },
    { id : 3,Title: "Lokasi", Desc: "Jakarta, Indonesia" },
    { id : 4 ,Title: "Usia,jenis-kelamin", Desc: "25,Lak-Laki" },
    { id : 5 ,Title: "Status", Desc: "Open to Work" },
    { id : 6 ,Title: "Nationality", Desc: "indonesia" },
  ];
  return (
    <div className={`px-6 pt-2 lg:h-fit   md:p-8 md:pb-16 box-border lg:justify-between h-[650px] md:h-fit lg:px-24 lg:py-10 lg:flex bg-[url('assets/images/hero.png')] bg-no-repeat bg-cover text-white`}>
      <div className="flex flex-col md:flex-row md:gap-6">
      <div className="">
        {
          <Header
            classname="flex flex-col justify-center items-center  w-full "
            image={sample}
          />
        }
         
      </div>
      <div className="lg:w-[417px] md:w-full">
        <div>
            <h1 className="font-rajdhani text-center  capitalize heading-l-bold text-white md:text-start">John Kebab</h1>
            <p className="font-rajdhani heading-s-medium   text-center capitalize text-white md:text-start">Web Developer</p>
        </div>
          <div className="grid grid-cols-2 lg:grid-cols-2 items-center gap-2  md:grid-cols-3   md:items-start ">
          {information.map((info) => {
            return <Item key={info.id} title={info.Title} desc={info.Desc} />;
          })}
        </div>
      </div>
      </div>
    
      <div className="lg:w-[397px] relative md:static w-full">{<ProgressCard percent="50" />}</div>

    </div>
  );
}
