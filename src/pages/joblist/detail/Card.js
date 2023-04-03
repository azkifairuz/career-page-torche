import bg from "assets/images/jobapplication/bg.png";

export default function Card(props) {
  const { title } = props;

  return (
    <div className="relative h-[157px] box-border text-white rounded-lg overflow-hidden">
      <img src={bg} alt="bg" className="w-full" />
      <h1 className="text-l-regular absolute bottom-[16px] left-[16px] right-[20%] lg:right-[16px]">{title}</h1>
    </div>
  );
}
