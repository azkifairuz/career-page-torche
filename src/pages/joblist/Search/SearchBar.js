import SearchIcon from "assets/icons/search.svg"

export default function SearchBar() {
  return (
    <div className="border-primaryNavy-border border-[1px] px-3 py-[10px] rounded-[8px] flex gap-[12px] items-center flex-1">
      <img src={SearchIcon} alt="search" />
      <input placeholder="Cari disini" className="border-none focus:outline-none w-full" />
    </div>
  )
}
