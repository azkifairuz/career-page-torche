import Card from "./card";
import { applications } from "data/application";
import Pagination from "components/organisms/UserPagination";
function JobApplication() {
  return (
    <div className="flex flex-col justify-center gap-[24px]">
      <div className="capitalize lg:shadow-none flex flex-col shadow-[0px_0px_10px_0px_#0000001A]  gap-4 md:gap-[32px]  p-[8px_8px_16px_8px] md:p-[32px_42px_32px_42px] ">
        <div className="flex justify-between border-b pb-2 border-primaryBlue-border w-full">
          <h1 className="heading-m-bold md:heading-l-bold">Lamaran</h1>
          <div>
            <select
              className={`appearance-none bg-no-repeat bg-right bg-[url(assets/icons/chevron-down.svg)]  border-2  text-xl-regular text-neutral-900 md:w-[160px] w-[108px] flex flex-row items-center gap-11 text-xl-regular bg-white border-primaryBlue-border rounded-[4px] p-[4px_8px_4px_8px] md:p-[8px_16px_8px_16px]`}
            >
              <option>Terbaru</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          {applications.slice(0, 5).map((data, index) => {
            return (
              <Card
                key={index}
                posisi={data.posisi}
                place={data.place}
                isClosed={data.isClosed}
                tanggal={data.tglDikirim}
                perusahaan={data.perusahaan}
                salary={data.salary}
                category={data.category}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-center self-center">
        <Pagination />
      </div>
    </div>
  );
}
export default JobApplication;
