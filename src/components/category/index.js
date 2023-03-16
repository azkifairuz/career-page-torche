import { categories } from "../../data/category";
import CategoryCard from "./CategoryCard";
export default function Category() {
    return(
        <div>
            {categories.map((category,index)=>{
                return <CategoryCard key={index} icon={category.icon} category={category.Category} jumlah={category.Jumlah} />
            })}
        </div>
    )
}