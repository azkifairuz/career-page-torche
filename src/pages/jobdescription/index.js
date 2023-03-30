import TimerIcon from "assets/icons/timer.svg";
import bg from "assets/images/jobapplication/bg.png";
export default function JobApplication () {
        return(
            <div>
                <header>
                    <img className="w-screen" src={bg} alt="bg">

                    </img>
                    <div className="rounded-[8px] bg-neutral-100 shadow-[0_1px_16px_rgba(0,0,0,0.2)] cursor-pointer hover:bg-neutral-1000 hover:bg-opacity-5">
        <main className="flex flex-col gap-[8px] p-[16px]">
          <h1 className="heading-s-medium md:heading-m-medium">ui designer</h1>
          <section className="text-neutral-1000 flex gap-[4px] text-s-regular md:text-m-regular">
            <span className="px-[8px] py-[4px] bg-secondary-yellow rounded-[8px]">magang</span>
            <span className="px-[8px] py-[4px] bg-secondary-tosca rounded-[8px]">uiux</span>
          </section>
          <section className="text-neutral-1000 flex justify-between items-center text-m-regular md:text-l-regular">
            <p>
              place
            </p>
            <span className="flex items-center gap-[4px]">
              <img src={TimerIcon} alt="timer" />
              <p>3d left</p>
            </span>
          </section>
        </main>
      </div>
                </header>
            </div>
        )
}