import Category from "components/category";
import LowonganTerpilih from "components/lowongan terpilih";
import SearchBar from "components/searchBar";

function Landing(props) {
    return(
        <div className=" mt-10 flex w-screen flex-col gap-5">
            <h1 className="text-6xl font-rajdhani font-bold text-center text-primary">Career Page Torche</h1>
            <section className="  mx-auto">
            <SearchBar/>
            <LowonganTerpilih/>
                
            </section>
            <section className=" my-20 mx-auto">
            <Category/>

            </section>
        </div>
    )
}

export default Landing;