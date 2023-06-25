import PropTypes from "prop-types";

export default function FeedbackCard(props) {
  const { profil, name, kampus, feed } = props;
  return (
    <div className="w-[285px] md:w-[380px] shadow-card flex-shrink-0 rounded-lg p-4 flex flex-col gap-4">
      <div className="flex items-center  gap-4">
        <img src={profil} alt="avatar" className="w-12 h-12 rounded-full"></img>
        <div>
          <h1 className="text-l-bold text-primaryBlue-main">{name}</h1>
          <p className="text-s-regular text-neutral-900">{kampus}</p>
        </div>
      </div>
      <div className="text-m-regular text-neutral-900">&quot;{feed}&quot;</div>
    </div>
  );
}

FeedbackCard.propTypes = {
  profil: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  kampus: PropTypes.string.isRequired,
  feed: PropTypes.string.isRequired,
};
