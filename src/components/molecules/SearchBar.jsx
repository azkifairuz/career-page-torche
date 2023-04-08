export default function SearchBar(props) {
  const { placeholder, icon, width="full" } = props;
  return (
    <div
      className={`${width && "w-"+width} border-primaryNavy-border border-[1px] px-3 py-[10px] rounded-[8px] flex gap-[12px] items-center flex-1 `}
    >
      {icon}
      <input
        placeholder={placeholder}
        className="border-none focus:outline-none w-full"
      />
    </div>
  );
}
