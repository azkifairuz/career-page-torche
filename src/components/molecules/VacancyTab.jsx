import PropTypes from "prop-types";

export default function VacancyTab(props) {
  const { title, filter, count, active, setFilterStatus } = props;
  const bgColor =
    filter === "all"
      ? "bg-primaryBlue-border"
      : filter === "aktif"
      ? "bg-success-border"
      : "bg-danger-border";
  const handleClick = () => {
    if (title === "Semua lowongan") {
      setFilterStatus("all");
    } else if (title === "Lowongan aktif") {
      setFilterStatus("aktif");
    } else if (title === "Lowongan tutup") {
      setFilterStatus("tutup");
    }
  };
  return (
    <button
      className={`flex items-center gap-2 pb-2 border-b-2 border-transparent shrink-0 ${
        active && "border-b-orange-500"
      }`}
      onClick={handleClick}
    >
      <h1 className="heading-s-medium ">{title}</h1>
      {count !== null && (
        <p
          className={`font-inter text-4 text-black font-semibold rounded-xl p-[10px] text-center ${bgColor}`}
        >
          {count}
        </p>
      )}
    </button>
  );
}

VacancyTab.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
  filter: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setFilterStatus: PropTypes.func.isRequired,
};
