export default function DataByStatus(props) {
  const { count, status } = props;
  return (
    <span className="hover:bg-slate-200 p-2 rounded-lg justify-self-center">
      <h1 className="font-semibold font-rajdhani text-lg text-center">{count}</h1>
      <p className="text-xs text-center">{status}</p>
    </span>
  );
}
