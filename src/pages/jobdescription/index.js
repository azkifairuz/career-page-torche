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
        <h1 className="mt-4 mb-2 heading-s-bold font-rajdhani">Deskripsi</h1>
        <p className="text-l-regular font-cairo">Internship with TORCHE adalah program magang, jarak jauh (remote internship) untuk mahasiswa dan lulusan baru. Internship ini berjalan selama 4 bulan dan bersifat unpaid, namun mendapatkan insentif. Jam kerja yang diharapkan untuk program magang adalah 14 jam/minggu atau 2 jam/hari (termasuk)</p>
      </section>
    </div>
  );
}
