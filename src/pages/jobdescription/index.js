import TimerIcon from "assets/icons/timer.svg";
import bg from "assets/images/jobapplication/bg.png";
import banner from "assets/images/jobapplication/banner.png"
export default function JobApplication() {
  return (
    <div>
      <header>
        <img className="w-screen" src={bg} alt="bg"></img>
        <div className=" bg-neutral-100 w-full hover:bg-neutral-1000 hover:bg-opacity-5">
          <div className="flex flex-col gap-[8px] p-[16px]">
            <h1 className="heading-s-medium md:heading-m-medium">
              ui designer
            </h1>
            <div className="text-neutral-1000 flex gap-[4px] text-s-regular md:text-m-regular">
              <span className="px-[8px] py-[4px] bg-secondary-yellow rounded-[8px]">
                magang
              </span>
              <span className="px-[8px] py-[4px] bg-secondary-tosca rounded-[8px]">
                uiux
              </span>
            </div>
            <div className="text-neutral-1000 flex justify-between items-center text-m-regular md:text-l-regular">
              <p>place</p>
              <span className="flex items-center gap-[4px]">
                <img src={TimerIcon} alt="timer" />
                <p>3d left</p>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="p-4 mt-4 ">
        <img src={banner} alt=""></img>
        <h1 className="mt-4  heading-s-bold font-rajdhani">Deskripsi</h1>
        <p className="text-l-regular font-cairo">Internship with TORCHE adalah program magang, jarak jauh (remote internship) untuk mahasiswa dan lulusan baru. Internship ini berjalan selama 4 bulan dan bersifat unpaid, namun mendapatkan insentif. Jam kerja yang diharapkan untuk program magang adalah 14 jam/minggu atau 2 jam/hari (termasuk)</p>
      </section>
      <section className="p-4 mt-8">
        <h1 className="heading-s-bold">Qualifications</h1>
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
      <section className="p-4 mt-8">
        <h1 className="heading-s-bold">Job Summary</h1>
        <ul className="list-disc text-l-regular px-5 py-2 flex flex-col gap-2">
            <li>Published On: 27th January 2023</li>
            <li>Job Nature: Internship</li>
            <li>Benefits: Trainings, Certificates</li>
            <li>Location: Remote (Online), Indonesia</li>
            <li>Deadline Submission: 31th January 2023</li>
        </ul>
        <p className="text-danger-main text-l-regular">Torche Education tidak pernah memungut biaya apapun selama proses rekrutmen, dan semua proses rekrutmen dilakukan secara daring (online)</p>
      </section>
      <section className="p-4">
        <h1 className="heading-s-bold ">Apa yang akan kamu lakukan</h1>
        
      </section>
    </div>
  );
}
