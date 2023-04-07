export default function DataByStatus(props) {
  const { count, status } = props;
  return (
    <span className="justify-self-center text-black">
      <h1 className="text-l-bold text-center">{count}</h1>
      <p className="text-s-regular opacity-50">{status}</p>
    </span>
  );
}
