import bg from "assets/images/jobapplication/banner.png"
export default function Card(props) {
    const { title } = props;

    return (
        <div className="w-[328px] h-[157px] box-border rounded-lg">
            <img src={bg} alt="bg" className="w-full absolute h-full"></img>
            <h1>{title}</h1>
        </div>
    );
  }
  