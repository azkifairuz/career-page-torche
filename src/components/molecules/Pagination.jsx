import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

export default function Pagination(props) {
  const { maxData } = props;
  const [maxRow, setMaxRow] = useState(10);
  const [maxPage, setMaxPage] = useState(Math.ceil(maxData / maxRow));
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelect = (e) => {
    e.preventDefault();
    setMaxRow(e.target.value);
    setMaxPage(Math.ceil(maxData / e.target.value));
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  return (
    <section className="border-t-2 border-t-slate-200 text-black p-4 gap-10 flex justify-end items-center text-l-bold">
      <div className="flex items-center">
        <p>Tampilkan per Halaman: </p>
        <select className="p-2" value={maxRow} onChange={handleSelect}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>
      </div>
      <div className="flex gap-5">
        <p>
          {maxRow * (currentPage - 1) + 1} -{" "}
          {currentPage * maxRow > maxData ? maxData : currentPage * maxRow} of{" "}
          {maxData}
        </p>
        <button disabled={currentPage === 1} onClick={handlePrevPage}>
          <ChevronLeft color={currentPage === 1 ? "#D8D8D8" : "#151515"} />
        </button>
        <button disabled={currentPage === maxPage} onClick={handleNextPage}>
          <ChevronRight
            color={currentPage === maxPage ? "#D8D8D8" : "#151515"}
          />
        </button>
      </div>
    </section>
  );
}
