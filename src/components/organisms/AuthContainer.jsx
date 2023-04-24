import logoBlack from "assets/logos/Torche_Logo_Black.png";

export default function AuthContainer(props) {
  const { children } = props;
  return (
    <div className="flex flex-col items-center gap-8 p-4 pb-12 md:p-12 bg-white font-cairo w-full md:w-[503px] min-h-screen md:h-fit">
      <img
        src={logoBlack}
        alt="Logo"
        className="block md:hidden w-[128px] mt-[36px] mb-[24px]"
      />
      {children}
    </div>
  );
}
