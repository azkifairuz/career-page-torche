import bg from "assets/images/jobapplication/bg.png"
export default function Card(props) {
    const { title } = props;

    return (
        <div className=" md:w-[340px] relative h-[157px] box-border text-white rounded-lg">
            <img src={bg} alt="bg" className="w-full absolute -z-10 h-full rounded-lg"></img>
            <h1 className="text-l-regular m-4 absolute bottom-0">{title}</h1>
        </div>
    );
  }
  