import Google from "assets/icons/Google.svg";

export default function GoogleButton(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      name="loginbutton"
      className="flex gap-[15px] px-[15px] py-[17px] text-[14px] text-[rgba(0,0,0,0.54)] font-medium font-roboto justify-center w-full shadow-[0_2px_3px_0.5px_rgba(0,0,0,0.168)] rounded-[10px] focus:outline-none"
    >
      <img src={Google} alt="Google" />
      <p>Continue with Google</p>
    </button>
  );
}
