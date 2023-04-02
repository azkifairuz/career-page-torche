import HeaderSection from "components/User/Complete Profile/header";
import OptionBar from "components/User/Complete Profile/option bar";
import Preview from "components/User/Complete Profile/preview";


export default function CompleteProfil() {
  return (
    <div className="flex flex-col mb-[72px]">
      {<HeaderSection />}
      <div className="md:flex w-full  lg:px-[100px]">
        <div className="mt-6 p-6">
          <OptionBar />
        </div>
        <div className="lg:w-[819px]">
          <Preview />
        </div>
      </div>
    </div>
  );
}