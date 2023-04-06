import { vacancies } from "data/vacancy";
import { useParams } from "react-router-dom";

import Card from "./Card";

import TimerIcon from "assets/icons/timer.svg";
import bg from "assets/images/jobapplication/bg.png";
import banner from "assets/images/jobapplication/banner.png";
import Navbar from "components/organisms/Layout/Navbar";

export default function JobDetail() {
  const { id } = useParams();
  const vacancy = vacancies.find((loker) => loker.id === id);

  return (
    <>
      <header className="md:h-screen md:overflow-hidden">
        <Navbar />
        <img
          className="w-screen bg-cover md:h-screen bg-center"
          src={bg}
          alt="bg"
        />
        <section className="md:absolute flex w-full items-end justify-between bottom-8 md:px-8 lg:px-[100px]">
          <div className=" bg-neutral-100 w-full md:w-[396px] rounded-lg">
            <div className="flex flex-col gap-2 p-4 md:p-6 text-neutral-1000 ">
              <h1 className="heading-s-medium md:heading-m-medium">
                {vacancy.name}
              </h1>
              <p className="w-fit rounded-lg text-s-regular md:text-m-regular px-2 py-1 bg-secondary-yellow rounded-2">
                {vacancy.type}
              </p>
              <div className="flex md:flex-col md:items-start justify-between items-center text-m-regular md:text-l-regular md:gap-2">
                <p>{vacancy.place}</p>
                <span className="flex items-center gap-1 ">
                  <img src={TimerIcon} alt="timer" />
                  <p>3d left</p>
                </span>
              </div>
            </div>
          </div>
          <p className="text-l-regular hidden lg:block text-white">
            Scroll kebawah untuk info lebih lanjut
          </p>
        </section>
      </header>
      <main className="flex flex-col gap-8 md:gap-20 md:px-8 lg:px-[100px] py-8 md:py-20">
        <section className="flex flex-col md:flex-row items-center gap-4 px-4 md:gap-6">
          <img
            src={banner}
            alt="banner"
            className="w-full md:w-1/2 md:h-[300px] object-cover"
          />
          <div className="flex-1 md:p-2 w-full">
            <h1 className="heading-s-bold md:heading-m-bold">Deskripsi</h1>
            <p className="text-l-regular mt-2 lg:w-5/6">
              Internship with TORCHE adalah program magang, jarak jauh (remote
              internship) untuk mahasiswa dan lulusan baru. Internship ini
              berjalan selama 4 bulan dan bersifat unpaid, namun mendapatkan
              insentif. Jam kerja yang diharapkan untuk program magang adalah 14
              jam / minggu atau 2 jam / hari (termasuk)
            </p>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row gap-4 md:gap-6">
          <div className="bg-neutral-200 md:bg-inherit flex-1 px-4 md:px-6 py-6 md:shadow-[0_1px_16px_rgba(0,0,0,0.18)]">
            <h1 className="heading-s-bold md:heading-m-bold">Kualifikasi</h1>
            <ul className="list-disc list-inside text-l-regular mt-[20px] flex flex-col gap-[4px] ">
              <li>Any major are welcome to apply</li>
              <li>Having knowledge and experience with UI Design</li>
              <li>
                Highly initiative, good communication, and problem solving
              </li>
              <li>Creative and detail oriented</li>
              <li>
                Having experience UI Design Software is an advantage (Figma,
                Adobe)
              </li>
              <li>
                Having experience UI Design Software is an advantage (Figma,
                Adobe)
              </li>
              <li>
                Ability to work both independently or collaborate on team
                project
              </li>
            </ul>
          </div>
          <div className="flex-1 px-4 md:px-6 py-6 md:shadow-[0_1px_16px_rgba(0,0,0,0.18)]">
            <h1 className="heading-s-bold md:heading-m-bold">Job Summary</h1>
            <ul className="list-disc list-inside text-l-regular mt-[20px] flex flex-col gap-[4px] ">
              <li>Published On: 27th January 2023</li>
              <li>Job Nature: Internship</li>
              <li>Benefits: Trainings, Certificates</li>
              <li>Location: Remote (Online), Indonesia</li>
              <li>Deadline Submission: 31th January 2023</li>
            </ul>
            <p className="text-danger-main text-l-regular mt-[34px]">
              Torche Education tidak pernah memungut biaya apapun selama proses
              rekrutmen, dan semua proses rekrutmen dilakukan secara daring
              (online)
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-[20px] px-4 md:p-0">
          <h1 className="heading-s-bold md:heading-m-bold md:text-center">
            Apa yang akan kamu lakukan
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="Conducting research in for TORCHE’s Apps" />
            <Card title="Developing UI design for TORCHE’s Apps and softwares" />
            <Card title="Developing UI design for TORCHE’s Apps and softwares" />
            <Card title="Developing UI design for TORCHE’s Apps and softwares" />
          </div>
        </section>
      </main>
      <section className="p-[16px] md:px-8 lg:px-[100px] flex justify-between items-center shadow-[0px_-1px_16px_0_#00000029]">
        <div className="flex flex-col gap-2">
          <h1 className="heading-s-medium">{vacancy.name}</h1>
          <p className="px-2 py-[4px] bg-secondary-yellow text-m-regular rounded-lg w-fit">
            {vacancy.type}
          </p>
        </div>
        <button className="py-[14px] px-4 bg-primaryBlue-main text-white rounded-lg">
          Apply Now
        </button>
      </section>
    </>
  );
}
