import PropTypes from "prop-types";

export default function Card(props) {
  const { title, description, icon } = props;
  return (
    <div className="flex shrink-0 w-[219px] h-fit overflow-y-hidden md:w-auto flex-col gap-[40px] items-center md:shrink md:basis-1/4 md:grow">
      <img src={icon} alt="icon" className="w-[80px] mx-auto" />
      <section className="flex flex-col gap-[16px] items-center">
        <h3 className="heading-s-bold text-center">{title}</h3>
        <p className="text-xl-regular text-justify">{description}</p>
      </section>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
