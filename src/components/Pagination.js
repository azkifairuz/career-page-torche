import { useState } from "react";

export default function Pagination(props) {
  const [maxRow, setMaxRow] = useState(10);
  const { maxData } = props;
  const handleSelect = (e) => {
    e.preventDefault();
    setMaxRow(e.target.value);
  };
  return (
    <section className="border-t-2 border-t-slate-200 text-black p-4 gap-4 flex justify-end items-center">
      <div className="flex items-center">
        <p>Rows per page: </p>
        <select className="p-2" value={maxRow} onChange={handleSelect}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>
      </div>
      <p>
        {1} - {maxRow} of {maxData}
      </p>
      <div>
        <button className="p-2 px-4 rounded-lg bg-blue-800 text-white">
          Prev
        </button>
        <button className="p-2 px-4 rounded-lg bg-blue-800 text-white">
          Next
        </button>
      </div>
    </section>
  );
}
