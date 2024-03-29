import PropTypes from "prop-types";

export default function EditContainer(props) {
  const { children, title = "" } = props;
  return (
    <section className="flex flex-col gap-7 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] bg-white rounded-xl p-10 w-full">
      {title && <h1 className="mb-3 heading-m-bold">{title}</h1>}
      {children}
    </section>
  );
}

EditContainer.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};
