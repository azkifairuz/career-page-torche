import { categories } from "../../data/category";
import CategoryCard from "./CategoryCard";
export default function Category() {
    return(
        
        <div className=" flex py-4 overflow-x-scroll w-full gap-4 md:flex-wrap  md:items-center md:justify-center  ">
            {
                categories.map((category,index)=>{
                    return <CategoryCard  key={index} Category={category.Category} icon={category.icon} jumlah={category.Jumlah} />
                })
            }

        </div>
    )
}