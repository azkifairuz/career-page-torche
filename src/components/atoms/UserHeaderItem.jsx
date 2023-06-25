import PropTypes from "prop-types";

export default function UserHeaderItem(props) {
  const { title, desc } = props;

  return (
    <div className="flex flex-col md:items-start items-center justify-center py-4 capitalize">
      <h1 className="font-cairo text-l-bold">{title}</h1>
      <p className="font cairo text-m-regular">{desc}</p>
    </div>
  );
}

UserHeaderItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
