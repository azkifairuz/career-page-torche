import { useEffect, useState } from "react";
import Biodata from "./Biodata/Form";
import Education from "./Education/Form";
import Experience from "./work expereience/Form";
import Custom404 from "../../Custom404";
import * as Icon from "react-bootstrap-icons";
// import ProgressBar from "./ProgressBar";
import Circle from "./Circle";
function CompleteProfil() {
  const [page, setPage] = useState(1);
  const [active, setActive] = useState(0);
  const [circle] = useState(3);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth((100 / (circle - 1)) * active);
  }, [circle, active]);

  function nextPage() {
    return active >= circle
      ? setActive(circle)
      : setActive(active + 1) & setPage(page + 1);
  }
  function backPage() {
    return active <= 0
      ? setActive(0)
      : setActive(active - 1) & setPage(page - 1);
  }
  console.log(active);

  function ProgressBar() {
    const progress = [];
    for (let i = 0; i < circle; i++) {
      progress.push(
        <Circle
          classname={
            i <= active
              ? "border-blue-500 border-[3px] bg-white  text-md bg-whitetext-[#999]  rounded-full  h-8 w-8 flex items-center justify-center "
              : "border-[3px]  text-md bg-white border-[#e0e0e0] text-[#999]  rounded-full ease-linear delay-[0.4s] h-8 w-8 flex items-center justify-center "
          }
          done={active <= i ? " " : <Icon.Check />}
        />
      );
      console.log(`ini active ${active}`);
      console.log(`ini i ${i}`);
    }
    return (
      <div className="box-border mb-20 -mt-10 flex justify-center items-center w-[100vw]">
        <div className="items-center w-1/2 ">
          <div className="flex justify-between items-center relative">
            <div
              className="absolute  bg-blue-500 top-1/2 left-0 h-1  -translate-y-1/2 -z-10 rounded-md"
              style={{ width: width + "%" }}
            ></div>
            <div className="absolute  bg-slate-200 top-1/2 left-0 h-1 -translate-y-1/2 -z-20 rounded-md w-full  "></div>
            {progress}
          </div>
        </div>
      </div>
    );
  }

  function viewPager() {
    if (page === 1) {
      return <Biodata next={nextPage} />;
    }
    if (page === 2) {
      return <Education back={backPage} next={nextPage} />;
    }
    if (page >= 3) {
      return <Experience back={backPage} />;
    }
    return <Custom404 />;
  }

  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold text-center mt-5 -mb-10" >Complete Profil</h1>
      {viewPager()}
      {ProgressBar()}
    </>
  );
}

export default CompleteProfil;
