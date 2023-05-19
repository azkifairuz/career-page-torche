import HeaderSection from "components/User/Complete Profile/header";
import OptionBar from "components/User/Complete Profile/option bar";
import Preview from "components/User/Complete Profile/preview";
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
      <div className="md:flex w-full md:px-[32px]  lg:px-[100px]">
        <div className="mt-6 py-4 ">
          <OptionBar />
        </div>
       
        
        <div className="">
          <Preview click={handleCardOpen} isCardOpen={isCardOpen} />
        </div>
      </div>
    </div>
  );
}