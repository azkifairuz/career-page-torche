export default function SearchBar(props) {
  const { placeholder, icon, width } = props;
  return (
    <div className={`border-primaryNavy-border border-[1px] px-3 py-[10px] rounded-[8px] flex gap-[12px] items-center ${width}`}>
      {icon}
      <input
        placeholder={placeholder}
        className="border-none focus:outline-none w-full"
      />
    </div>
  );
}
