import Category from "components/category";
import LowonganTerpilih from "components/lowongan terpilih";
import SearchBar from "components/searchBar";
function Landing(props) {
    return(
        <div className="flex w-screen flex-col h-fit gap-20">
            <header className="h-[500px] bg-black py-20 text-white px-4 flex flex-col gap-8">
                <h1 className="heading-l-bold font-rajdhani ">Career at TORCHE Education</h1>
                <p className="text-l-regular ">Torche Education terbuka untuk berbagai posisi magang bagi mahasiswa dan freshgraduates untuk merasakan lingkungan kerja di perusahaan startup.</p>
                <button className="py-[14px] w-fit font-semibold px-8 bg-primaryBlue-main hover:bg-primaryBlue-hover border border-primaryBlue-main rounded-lg text-l-regular text-white">Cari Kerja Disini</button>
            </header>
            <section className=" px-4">
            <h1 className="heading-m-bold w-[170px]">Posisi yang sedang dibuka</h1>
            <Category/>

            </section>
            <section>
                <div className="w-full  bg-cover bg-center h-[240px] bg-no-repeat bg-[url('assets/images/LandingHero.png')]"></div>
                <div>
                    <h1 className="heading-m-bold text-primaryBlue-main">Kickstart your career in the most renowned Ed-Tech in Indonesia!</h1>
                    <p className="text-l-regular text-neutral-1000">Di dalam Torche Education, kami membantu kamu untuk mengembangkan kemampuan dan belajar dari pengalaman nyata. Berikut adalah beberapa keuntungan yang dapat kamu nikmati apabila mengikuti kerja magang dari Torche:</p>
                </div>
            </section>
        </div>
    )
}

export default Landing;