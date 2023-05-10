import HeaderSection from "components/User/Complete Profile/header";
import OptionBar from "components/User/Complete Profile/option bar";
import Preview from "components/User/Complete Profile/preview";
import AboutPopUp from "components/User/Complete Profile/popup/aboutPopup";
import WorkPopup from "components/User/Complete Profile/popup/workExperiencePopup";
import { useState } from "react";
export default function CompleteProfil() {
  const [isCardOpen,setIsCardOpen] = useState(false)
  const handleCardOpen = ()=>{
    setIsCardOpen(!isCardOpen)
    console.log(isCardOpen);
  }
  return (
    <div className="flex flex-col mb-[72px]">
      {<HeaderSection />}
      <div className="md:flex w-full  lg:px-[100px]">
        <div className="mt-6 p-6">
          <OptionBar />
        </div>
        <div className={` ${isCardOpen && "hidden"}  fixed flex justify-center items-center  h-screen z-50 bg-opacity-50 w-full  right-0 left-0 bottom-0 top-0 bg-black`}>
          <div className="rounded-lg w-fit">
            <AboutPopUp onclick={handleCardOpen}/>
          </div>
        </div>
        <div className="lg:w-[819px]">
          <Preview click={handleCardOpen} />
        </div>
      </div>
    </div>
  );
}