import { categories } from "../../data/category";
import CategoryCard from "./CategoryCard";
export default function Category() {
    return (
        categories.map((category, index) => {
            return <CategoryCard key={index} Category={category.Category} icon={category.icon} jumlah={category.Jumlah} />
        })

    )
}