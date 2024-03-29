import HeaderSection from "components/organisms/UserHeader";
import OptionBar from "components/molecules/OptionBarNavigation";
import Preview from "components/organisms/Preview";
export default function CompleteProfil() {
  return (
    <div className="flex flex-col mb-[72px]">
      {<HeaderSection />}
      <div className="md:flex w-full md:px-[32px]  lg:px-[100px] transition-all duration-500 ease-in-out   ">
        <div className=" mt-[120px] md:mt-6 py-4 lg:w-[397px] ">
          <OptionBar />
        </div>

        <div className="">
          <Preview />
        </div>
      </div>
    </div>
  );
}
