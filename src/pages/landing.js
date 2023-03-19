import Category from "components/category";
import LowonganTerpilih from "components/lowongan terpilih";
import SearchBar from "components/searchBar";

function Landing(props) {
    return(
        <div className=" mt-10 flex w-screen flex-col gap-5">
            <h1 className="text-6xl font-rajdhani font-bold text-center text-primary">Career </h1>
            <section className=" text-center  mx-auto">
                <p>Torche Education terbuka untuk berbagai posisi magang bagi mahasiswa dan freshgraduates </p>
                <p>untuk merasakan lingkungan kerja di perusahaan startup. </p>
            </section>
            <section className=" my-10 mx-auto">
            <Category/>

            </section>
        </div>
    )
}

export default Landing;