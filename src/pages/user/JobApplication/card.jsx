
export default function Card(props) {
  const { posisi, salary, place, tanggal, time, category } = props;
    const categories = []
    category.forEach(element => {
        categories.push({element})
    });
  return (
    <div className="p-4 w-[284px] md:w-[422px] flex shadow-[0px_0px_10px_0px_#0000001A] bg-neutral-100 gap-3 flex-col justify-between md:flex-row  ">
        <div className="flex flex-col justify-between">
          <h1 className="uppercase font-bold font-rajdhani text-[24px] leading-7">
            {posisi}
          </h1>
          <div />
          <div className="flex flex-col mt-4">
            <p className="text-m-bold text-primaryBlue-main">Torche App</p>
            <p className="text-m-regular">{place}</p>
          </div>
          <h1 className="uppercase text-l-bold mt-2 text-primaryBlue-main">
            {salary}
          </h1>
          <div className="flex gap-[5px] mt-4">
            {
                categories.map((categori)=>{
                    return(
                        <div className="block bg-primaryBlue-surface text-s-regular text-center capitalize text-primaryBlue-main py-2 px-3 rounded-lg">
                            {categori.element}
                        </div>
                    )
                })
            }
          </div>
          <div className="flex flex-col mt-1 ">
            <div className="text-m-regular  w-fit py-1 px-2 capitalize text-primaryBlue-main bg-primaryBlue-surface border-black">
              {time}
            </div>
            <h1 className="text-s-regular self-end">Diikirim : {tanggal}</h1>
          </div>
        </div>
         <div>
            <button className="py-2 rounded-lg px-6 w-full bg-primaryBlue-main font-cairo text-white capitalize active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover">
            details
            </button>
        </div>
    </div>
  );
}
