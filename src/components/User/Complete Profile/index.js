import HeaderSection from "./header";
import OptionBar from "./option bar";
import Preview from "./preview";

export default function CompleteProfil() {
  return (
    <div className="flex flex-col">
      {<HeaderSection />}
      <div className="lg:flex w-full  lg:px-[100px]">
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
