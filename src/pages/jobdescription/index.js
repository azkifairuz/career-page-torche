import TimerIcon from "assets/icons/timer.svg";
import bg from "assets/images/jobapplication/bg.png";
import banner from "assets/images/jobapplication/banner.png"
import Card from "./card";
export default function JobApplication() {
  return (
    <div>
      <header className="  md:relative md:-mt-20 ">
        <img className="w-screen bg-cover md:h-screen bg-no-repeat bg-center" src={bg} alt="bg"></img>
        <div className=" bg-neutral-100 w-full md:w-[396px] md:m-8 md:absolute md:bottom-0 md:rounded-lg">
          <div className="flex flex-col gap-[8px] p-4 md:p-6">
            <h1 className="heading-s-medium md:heading-m-medium">
              ui designer
            </h1>
            <div className="text-neutral-1000  flex gap-1 md:gap-2 text-s-regular md:text-m-regular">
              <span className="px-[8px] py-[4px] bg-secondary-yellow rounded-[8px]">
                magang
              </span>
              <span className="px-[8px] py-[4px] bg-secondary-tosca rounded-[8px]">
                uiux
              </span>
            </div>
            <div className="text-neutral-1000 flex md:flex-col   md:items-start justify-between items-center text-m-regular md:text-l-regular md:gap-2">
              <p>Remote(online) indonesia</p>
              <span className="flex items-center gap-1 ">
                <img src={TimerIcon} alt="timer" />
                <p>3d left</p>
              </span>
            </div>
          </div>
        </div>
        <span className="text-l-regular hidden md:block md:m-8 absolute bottom-0 right-0  text-white">
          Scroll kebawah untuk info lebih lanjut
        </span>
      </header>
      <section className="p-4 md:p-8 lg:mx-[100px] lg:w-fit  md:mb-20 mt-4 md:flex gap-8 items-center ">
        <div className=" md:w-[369px] lg:w-[608px] overflow-hidden bg-center bg-cover flex-shrink-0">
        <img src={banner} alt="" className=" md:h-auto md:w-auto md:min-h-[300px] bg-center"></img>
        </div>
       <div className="lg:w-1/2">
          <h1 className="mt-4  heading-s-bold md:heading-m-bold font-rajdhani">Deskripsi</h1>
          <p className="text-l-regular font-cairo">Internship with TORCHE adalah program magang, jarak jauh (remote internship) untuk mahasiswa dan lulusan baru. Internship ini berjalan selama 4 bulan dan bersifat unpaid, namun mendapatkan insentif. Jam kerja yang diharapkan untuk program magang adalah 14 jam/minggu atau 2 jam/hari (termasuk)</p>
       </div>
      </section>
    <div className="lg:grid lg:grid-cols-2 lg:mx-[100px] lg:gap-6 lg:snap-center lg:w-fit">
    <section className="p-4 mt-8 md:p-6 md:m-8  md:shadow-[0px_1px_16px_0px_#0000002E]">
        <h1 className="heading-s-bold md:heading-m-bold">Kualifikasi</h1>
        <ul className="list-disc py-2 px-5 text-l-regular flex flex-col  gap-2 ">
            <li>Any major are welcome to apply</li>
            <li>Having knowledge and experience with UI Design</li>
            <li>Highly initiative, good communication, and problem solving</li>
            <li>Creative and detail oriented</li>
            <li>Having experience UI Design Software is an advantage (Figma, Adobe)</li>
            <li>Having experience UI Design Software is an advantage (Figma, Adobe)</li>
            <li>Ability to work both independently or collaborate on team project</li>
        </ul>
      </section>
      <section className="p-4 mt-8 md:p-6 md:m-8 lg:-ml-5  md:shadow-[0px_1px_16px_0px_#0000002E]" >
        <h1 className="heading-s-bold md:heading-m-bold">Job Summary</h1>
        <ul className="list-disc text-l-regular px-5 py-2 flex flex-col gap-2">
            <li>Published On: 27th January 2023</li>
            <li>Job Nature: Internship</li>
            <li>Benefits: Trainings, Certificates</li>
            <li>Location: Remote (Online), Indonesia</li>
            <li>Deadline Submission: 31th January 2023</li>
        </ul>
        <p className="text-danger-main text-l-regular">Torche Education tidak pernah memungut biaya apapun selama proses rekrutmen, dan semua proses rekrutmen dilakukan secara daring (online)</p>
      </section>

    </div>
    <section className="p-4 md:p-8 md:mx-auto">
        <h1 className="heading-s-bold md:heading-m-bold md:text-center ">Apa yang akan kamu lakukan</h1>
        <div className="flex gap-4 md:mx-auto w-fit flex-col md:grid md:grid-cols-2 md:mt-5 md:gap-6">
            <Card title="Conducting research in for TORCHE’s Apps" />
            <Card title="Developing UI design for TORCHE’s Apps and softwares" />
            <Card title="Developing UI design for TORCHE’s Apps and softwares" />
            <Card title="Developing UI design for TORCHE’s Apps and softwares" />
        </div>
      </section>
      <section className="p-4 flex  justify-between items-center shadow-[0px_-1px_16px_0_#00000029]">
        <div className="flex flex-col  gap-3">
            <h1 className="heading-s-medium">UI Designer</h1>
            <span className="px-[8px] py-[4px] bg-secondary-yellow text-center text-m-regular rounded-lg">
                magang
            </span>
        </div>
        <button className="py-[14px]  px-4 bg-primaryBlue-main text-white rounded-lg">Apply Now</button>
      </section>
    </div>
  );
}
