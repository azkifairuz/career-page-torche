import Card from "./Card";

import profileCEO from "../../assets/images/CEO.webp";
import Book from "assets/icons/Book.webp";
import Wifi from "assets/icons/Wifi.webp";
import Check from "assets/icons/Check.webp";
import TutorBg from "assets/images/TutorBg.webp";

function About() {
  return (
    <main className="flex flex-col items-center px-4 md:px-8 lg:px-[100px] py-[63px] md:py-[75px] lg:py-[100px] gap-10 md:gap-[96px]">
      <section className="flex flex-col md:flex-row gap-[17px] md:gap-[29px] lg:gap-[200px] lg:items-center ">
        <h1 className="heading-m-bold md:heading-l-bold shrink-0">
          About Torche <br className="hidden lg:block" /> Education
        </h1>
        <p className="text-l-regular md:text-xl-regular">
          Torche Education adalah Start-Up Teknologi Pendidikan pertama yang
          membantu Anda belajar dalam bidang teknik khususnya di bidang Teknik
          Kimia
        </p>
      </section>
      <section className="flex flex-col md:flex-row gap-[37px] md:gap-[56px] lg:gap-[100px] items-center">
        <img src={profileCEO} alt="CEO" className="w-[200px] md:w-[280px]" />
        <article className="flex flex-col gap-[40px]">
          <h1 className="text-xl-bold text-center md:text-left md:heading-l-bold">
            Tujuan Kami
          </h1>
          <p className="text-l-regular md:text-xl-regular">
            Torche memiliki lebih dari 30 mata pelajaran teknik kimia, dengan
            800 siswa unik yang tersebar di lebih dari 8 universitas. Kami
            berkomitmen untuk menyediakan pendidikan tinggi yang cepat,
            komprehensif, dan berstandar internasional di bidang teknik kimia,
            teknik biopress, dan pada akhirnya semua siswa engineering di
            seluruh dunia
          </p>
        </article>
      </section>
      <section className="flex w-full flex-wrap gap-7 lg:gap-6">
        <Card
          title="Internationally Standardized Curriculum"
          description="Torche menyediakan kurikulum teknik kimia terbaik terbaik dari 5 universitas terbaik di Indonesia yang digabungkan dengan 5 Universitas terbaik di Dunia"
          icon={Book}
        />
        <Card
          title="Full Online"
          description="Torche mengadakan kelas sesuai permintaan dengan platform rapat premium (Google Meet dan Zoom Meetings) dan materi-materi yang terintegrasi ke akun Google Workspace Anda"
          icon={Wifi}
        />
        <Card
          title="Trusted Tutor"
          description="Semua tutor dari Torche merupakan praktisi yang berkualitas dan terlatih secara khusus di bidang teknik kimia dalam menyampaikan materi yang sesuai dengan kebutuhan siswa kami dari seluruh Indonesia"
          icon={Check}
        />
      </section>
      <section>
        <div className="flex flex-col px-[39px] md:px-0 gap-[20px] grow mx-auto items-center">
          <h1 className="heading-l-bold">Background Tutor</h1>
          <p className="text-xl-regular">
            Tutor ahli di bidang teknik kimia dengan berbagai pengalaman di
            perusahaan dalam negeri maupun luar negeri
          </p>
        </div>
        <img src={TutorBg} alt="Tutor" className="flex-1 lg:w-[830px]" />
      </section>
    </main>
  );
}
export default About;
