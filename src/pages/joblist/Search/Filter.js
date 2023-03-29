import CategoryIcon from 'assets/icons/category.svg'
import Chevron from 'assets/icons/chevron-down.svg'

export default function Filter(props) {
  const { type } = props
  return (
    <div className="border-primaryNavy-border border-[1px] px-[12px] py-[10px] rounded-[8px] flex gap-[12px] w-1/5 items-center ">
      <img src={CategoryIcon} alt="search" />
      <button className="border-none flex-1 justify-between focus:outline-none flex gap-[8px] items-center">
        <p>Pilih kategori</p>
        <img src={Chevron} alt="chevron"  />
      </button>
    </div>
  )
}
