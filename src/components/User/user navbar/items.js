import { Link} from "react-router-dom";

export default function Item(props) {
  const { icon, title, href,isActive, setIsActive,index } = props;
  const activeLink = "border-primaryBlue-main border-l-2 border-primaryBlue-main text-primaryBlue-main"
  const normal = ""
  
  return (
    <Link
      onClick={
        ()=>{
          setIsActive(index)
        }
      }
      to={href}
      className={
        `flex items-center w-[200px] h-[56px] rounded-lg gap-5 font-cairo hover:font-bold text-m-regular hover:border-l-2 hover:border-primaryBlue-main hover:text-primaryBlue-main hover:bg-primaryBlue-surface active:text-primaryBlue-main active:bg-primaryBlue-surface text-[#494949] p-[24px_16px_24px_16px]
        ${isActive ? activeLink : normal  } `
      }
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}