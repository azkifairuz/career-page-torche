export default function AuthButton(props) {
  const { onClick, name, type = "button", title } = props;
  return (
    <button
      onClick={onClick}
      name={name}
      type={type}
      className="w-full bg-primaryBlue-main hover:bg-primaryBlue-hover active:bg-primaryBlue-pressed  text-white focus:outline-none px-[14px] py-[16px] rounded-[8px] "
    >
      {title}
    </button>
  );
}
