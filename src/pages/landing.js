import Category from "components/category";
import LowonganTerpilih from "components/lowongan terpilih";

function Landing(props) {
    return(
        <div className=" mt-10 flex w-screen flex-col gap-5">
            <section className="  mx-auto">
            <LowonganTerpilih/>
                
            </section>
            <section className=" my-20 mx-auto">
            <Category/>

            </section>
        </div>
    )
}

export default Landing;