import PropTypes from "prop-types";

export default function ApplicantsTab(props) {
  const { title, count = null, setFilterStatus } = props;
  const background = {
    "Belum Diproses": "bg-primaryBlue-border",
    Diproses: "bg-warning-border",
    Diterima: "bg-success-border",
    Ditolak: "bg-danger-border",
    Disimpan: "bg-neutral-300",
  };

  const handleClick = () => {
    if (title === "Belum diproses") {
      setFilterStatus("Belum diproses");
    } else if (title === "Diproses") {
      setFilterStatus("Diproses");
    } else if (title === "Diterima") {
      setFilterStatus("Diterima");
    } else if (title === "Ditolak") {
      setFilterStatus("Ditolak");
    } else {
      setFilterStatus("Disimpan");
    }
  };
  return (
    <button
      className={`flex items-center gap-3 py-[5px] border-b-2 border-transparent`}
      onClick={handleClick}
    >
      <h1 className="heading-s-medium ">{title}</h1>
      {count !== null && (
        <p
          className={`font-inter text-4 text-black font-semibold rounded-xl p-[10px] text-center ${background[title]}`}
        >
          {count}
        </p>
      )}
    </button>
  );
}
