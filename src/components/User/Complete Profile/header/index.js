import sample from "assets/index.png";

import * as Icon from "react-bootstrap-icons";
import Header from "../sidebar/header";
import Item from "./item";
export default function HeaderSection() {
    const information=[
        {Title:"Phone", Desc:"+62 1234 5721 63"},
        {Title:"Email", Desc:"loremipsum@gmail.com"},
        {Title:"Lokasi", Desc:"Jakarta, Indonesia"},
        {Title:"Usia,jenis-kelamin", Desc:"25,Lak-Laki"},
        {Title:"Status", Desc:"Open to Work"},
        {Title:"Nationality", Desc:"indonesia"},
    ]
    return(
        <div>
            <div>
                {<Header image={sample} name="John Doe" profesi="web developer" />}
            </div>
            <div className="gird grid-cols-2 gap-2">
                {information.map((info)=>{
                    return(
                        <Item title={info.Title} desc={info.Desc} />
                    )
                })}
            </div>
        </div>
    )
}