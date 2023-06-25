import { useNavigate } from "react-router-dom";

import Benefit from "components/molecules/Benefit";
import Feedback from "components/feedback";
import Empati from "assets/icons/love.svg";
import Kesopanan from "assets/icons/kesopanan.svg";
import Kepo from "assets/icons/rasa-ingin-tahu.svg";
import girl from "assets/images/girl.png";
import { categories } from "data/category";
import CategoryCard from "components/molecules/CategoryCard";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="flex w-screen flex-col overflow-hidden pb-16 h-fit gap-20">
      <header className="h-[500px] overflow-hidden  bg-[url('assets/images/LandingBanner.png')] lg:bg-top bg-no-repeat lg:justify-around bg-cover bg-center py-20 md:py-0 md:flex md:justify-center text-white px-4 ">
        <div className="flex flex-col gap-8 md:w-[416px] md:self-center">
          <h1 className="heading-l-bold font-rajdhani md:display-bold ">
            Career at TORCHE Education
          </h1>
          <p className="text-l-regular md:-mt-4 ">
            Torche Education terbuka untuk berbagai posisi magang bagi mahasiswa
            dan freshgraduates untuk merasakan lingkungan kerja di perusahaan
            startup.
          </p>
          <button
            onClick={() => {
              navigate("/joblist");
            }}
            className="py-[14px] w-fit font-semibold text-l-regular  px-8 bg-primaryBlue-main hover:bg-primaryBlue-hover border border-primaryBlue-main rounded-lg text-l-regular text-white"
          >
            Cari Kerja Disini
          </button>
        </div>
        <div className="hidden md:block md:-mr-10 md:self-end ">
          <img alt="img" src={girl} className="md:w-[300px] -z-40 "></img>
        </div>
      </header>
      <section className="px-4 md:text-center">
        <h1 className=" heading-m-bold w-[170px] md:text-[34px] md:leading-[42px] md:w-full md:text-center ">
          Posisi yang sedang dibuka
        </h1>
        <div className=" flex py-4 overflow-x-scroll w-full gap-4 md:flex-wrap  md:items-center md:justify-center lg:mx-auto lg:grid lg:grid-cols-4 lg:content-center lg:snap-center lg:w-fit lg:px-5 ">
          {categories.map((category, index) => {
            return (
              <CategoryCard
                key={index}
                Category={category.Category}
                icon={category.icon}
                jumlah={category.Jumlah}
              />
            );
          })}
        </div>
      </section>
      <section className="px-4 lg:flex lg:gap-10 lg:mx-auto ">
        <div className="w-full  bg-cover bg-center h-[240px] lg:h-[360px] lg:w-[608px] flex-shrink-0 bg-no-repeat bg-[url('assets/images/LandingImage.png')] md:h-[360px]  "></div>
        <div className="md:px-0 mt-4 flex flex-col gap-4  lg:px-4">
          <h1 className="heading-m-bold text-primaryBlue-main md:text-[34px]  lg:w-[512px] md:leading-[42px]">
            Kickstart your career in the most renowned Ed-Tech in Indonesia!
          </h1>
          <p className="text-l-regular text-neutral-1000 lg:w-[514px] lg:mt-8">
            Di dalam Torche Education, kami membantu kamu untuk mengembangkan
            kemampuan dan belajar dari pengalaman nyata. Berikut adalah beberapa
            keuntungan yang dapat kamu nikmati apabila mengikuti kerja magang
            dari Torche:
          </p>
          <ul className="lg:text-m-bold">{<Benefit />}</ul>
        </div>
      </section>
      <section className="px-4 w-full mt-24 md:mx-auto md:text-center">
        <h1 className="heading-m-bold">Nilai-Nilai Yang Kami Pegang</h1>
        <div className="flex py-6  md:justify-center gap-6 overflow-x-scroll">
          <div className="w-[242px] lg:w-[397px] md:w-[214px]  p-8 border border-primaryBlue-border flex-shrink-0 flex flex-col items-center gap-1 rounded-[20px] bg-primaryBlue-surface ">
            <img src={Empati} alt="icon"></img>
            <div className="heading-s-medium text-center font-bold heading-s-bold font-rajdhani mt-4">
              Empati
            </div>
            <div className="text-m-regular text-center text-neutral-900 font-cairo">
              Memahami dan berbagi rasa dengan sesama
            </div>
          </div>
          <div className="w-[242px] lg:w-[397px]  md:w-[214px]  border border-primaryBlue-border p-8  flex-shrink-0 flex flex-col items-center gap-1 rounded-[20px] bg-primaryBlue-surface ">
            <img src={Kesopanan} alt="icon"></img>
            <div className="heading-s-medium text-center font-bold heading-s-bold font-rajdhani mt-4">
              Kesopanan
            </div>
            <div className="text-m-regular text-center text-neutral-900 font-cairo">
              Memiliki moral baik dan saling menghargai
            </div>
          </div>
          <div className="w-[242px] lg:w-[397px] md:w-[214px]  p-8 border border-primaryBlue-border flex-shrink-0 flex flex-col items-center gap-1 rounded-[20px] bg-primaryBlue-surface ">
            <img src={Kepo} alt="icon"></img>
            <div className="heading-s-medium text-center font-bold heading-s-bold font-rajdhani mt-4">
              Memiliki Rasa Ingin Tahu
            </div>
            <div className="text-m-regular text-center text-neutral-900 font-cairo">
              Memiliki rasa ingin tahu, dan semangat belajar yang tinggi
            </div>
          </div>
        </div>
      </section>
      <section className="px-4  md:mx-auto">
        <h1 className="heading-m-bold md:text-center">Apa Kata mereka</h1>
        <div className="flex px-1 w-full py-5 gap-6 overflow-x-auto">
          <Feedback />
        </div>
      </section>
    </div>
  );
}

export default Landing;
