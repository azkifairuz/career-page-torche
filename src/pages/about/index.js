import Card from "./Card";

import profileCEO from "../../assets/images/CEO.webp";
import Book from "assets/icons/Book.webp";
import Wifi from "assets/icons/Wifi.webp";
import Check from "assets/icons/Check.webp";
import TutorBg from "assets/images/TutorBg.webp";

function About() {
  return (
    <main className="flex flex-col items-center px-[100px] py-[100px] gap-[96px]">
      <section className="flex gap-[200px] items-center ">
        <h1 className="heading-l-bold shrink-0">
          About Torche <br /> Education
        </h1>
        <p className="text-xl-regular">
          Torche Education adalah Start-Up Teknologi Pendidikan pertama yang
          membantu Anda belajar dalam bidang teknik khususnya di bidang Teknik
          Kimia
        </p>
      </section>
      <section className="flex gap-[100px] items-center">
        <img src={profileCEO} alt="CEO" className="w-[280px]" />
        <article className="flex flex-col gap-[40px]">
          <h1 className="heading-l-bold">Tujuan Kami</h1>
          <p className="text-xl-regular">
            Torche memiliki lebih dari 30 mata pelajaran teknik kimia, dengan
            800 siswa unik yang tersebar di lebih dari 8 universitas. Kami
            berkomitmen untuk menyediakan pendidikan tinggi yang cepat,
            komprehensif, dan berstandar internasional di bidang teknik kimia,
            teknik biopress, dan pada akhirnya semua siswa engineering di
            seluruh dunia
          </p>
        </article>
      </section>
      <section className="flex w-full flex-wrap gap-[24px]">
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
      <section className="flex flex-col gap-[20px] mx-auto items-center">
        <h1 className="heading-l-bold">Background Tutor</h1>
        <p className="text-xl-regular">
          Tutor ahli di bidang teknik kimia dengan berbagai pengalaman di
          perusahaan dalam negeri maupun luar negeri
        </p>
        <img src={TutorBg} alt="Tutor" className="w-2/3" />
      </section>
    </main>
  );
}
export default About;
