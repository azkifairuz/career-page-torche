
export default function Card(props) {
    const { posisi, salary, status, tanggal } = props;

    return (
      <div className="p-4 md:min-w-[422px]  flex shadow-[0px_0px_10px_0px_#0000001A] bg-neutral-100 gap-3 flex-col justify-between md:flex-row  ">
          <div className="flex flex-col w-full ">
            <div className="flex justify-between ">
              <h1 className="uppercase font-bold font-rajdhani text-[24px] leading-7">
                  {posisi}
              </h1>
              <button className="py-2 hidden md:block h-fit rounded-lg px-6  bg-primaryBlue-main font-cairo text-white capitalize active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover">
              details
              </button>
          </div>
            <div className="flex flex-col mt-4">
              <p className="text-m-bold text-primaryBlue-main">Torche App</p>
              <p className="text-m-regular">Jakarta,Indonesia</p>
            </div>
            <h1 className="uppercase text-l-bold mt-2 text-primaryBlue-main">
              {salary}
            </h1>
            <div className="grid grid-cols-2 lg:flex w-fit gap-[5px] mt-4">
              <div className="text-s-regular justify-self-start w-fit text-center py-2 px-3 capitalize text-primaryBlue-main rounded-lg bg-primaryBlue-surface border-black">
                  {status}
              </div>
            </div>
            <div className="flex flex-col mt-1  ">
              <h1 className="text-s-regular self-end lg:self-start text-neutral-700">Diikirim : {tanggal}</h1>
            </div>
          </div>
          <div className="md:hidden">
              <button className="py-2 h-fit  rounded-lg px-6 w-full bg-primaryBlue-main font-cairo text-white capitalize active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover">
              details
              </button>
          </div>
      </div>
    );
  }
  