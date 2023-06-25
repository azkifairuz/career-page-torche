import PropTypes from "prop-types";

export default function CategoryCard(props) {
  const { icon, Category, jumlah } = props;
  return (
    <div className="w-[242px] lg:w-[292px] box-border py-8 px-4 shadow-card flex-shrink-0 flex flex-col items-center gap-4 rounded-[10px] border md:h-[228px] ">
      <img src={icon} alt="icon"></img>
      <div className="heading-s-bold text-center font-bold font-rajdhani">
        {Category}
      </div>
      <div className="text-m-bold text-primaryBlue-main font-cairo">
        {jumlah} Vacancies
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  icon: PropTypes.element.isRequired,
  Category: PropTypes.string.isRequired,
  jumlah: PropTypes.number.isRequired,
};
