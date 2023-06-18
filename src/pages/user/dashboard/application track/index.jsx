import Card from "./Card";

import { applications } from "data/application";

import Pagination from "components/User/Pagination";

function Tracking() {
  return (
    <div className="flex  min-w-[313px] md:min-w-[472px] flex-col gap-[24px]">
      <div className="capitalize flex flex-col lg:shadow-none shadow-[0px_0px_10px_0px_#0000001A] min-w-[313px] md:min-w-[472px] gap-4  p-[8px_8px_16px_8px] md:p-[32px_42px_32px_42px] ">
        <div className="flex justify-between items-center border-b pb-2 border-primaryBlue-border w-full">
          <h1 className="heading-s-bold md:heading-l-bold">status lamaran</h1>
          <select
            className={`appearance-none bg-no-repeat bg-right bg-[url(assets/icons/chevron-down.svg)]  border-2  text-xl-regular text-neutral-900 md:w-[160px] w-[108px] flex flex-row items-center gap-11 text-xl-regular bg-white border-primaryBlue-border rounded-[4px] p-[4px_8px_4px_8px] md:p-[8px_16px_8px_16px]`}
          >
            <option>Terbaru</option>
          </select>
        </div>
        <div className="flex flex-col gap-6 w-full">
          {applications.slice(0, 5).map((data, index) => {
            return (
              <Card
                key={index}
                posisi={data.posisi}
                status={data.status}
                isClosed={data.isClosed}
                tanggal={data.tglDikirim}
                perusahaan={data.perusahaan}
                salary={data.salary}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center  px-[8px] md:px-[42px] ">
        <Pagination />
      </div>
    </div>
  );
}
export default Tracking;
