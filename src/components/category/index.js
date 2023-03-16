import { categories } from "../../data/category";
import CategoryCard from "./CategoryCard";
export default function Category() {
    return(
        <div className="m-5 p-2">
            <h1 className="font-rajdhani font-bold text-2xl">Cari Berdasarkan Kategori</h1>
            <div className=" grid grid-cols-4 w-fit gap-4 mx-auto h-fit p-4 ">
                {
                    categories.map((category,index)=>{
                        return <CategoryCard ker={index} Category={category.Category} icon={category.icon} jumlah={category.Jumlah} />
                    })
                }
            </div>
    </div>
    )
}