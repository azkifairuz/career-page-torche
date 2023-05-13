import CardRequirement from "./card";

export default function Description(params) {
    return(
        <div className="bg-white p-5 h-fitt w-full flex flex-col gap-5">
                <p>Pekerjaan Ini Membutuhkan</p>
            <div className=" flex gap-4 ">
                <CardRequirement title="Java Script"/>
                <CardRequirement title="HTML"/>
            </div>
            <div className="font-rajdhani flex flex-col gap-5 text-md">
                <p>Deskripsii Pekerjaan</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsa cum! Culpa quas tenetur vero incidunt eaque, sit accusamus id hic, voluptatum consequuntur reiciendis quo quam ipsa deserunt suscipit. Ipsam fugiat totam molestiae, itaque dolores magni repellat veniam dolor? Iusto, culpa fugit. Incidunt explicabo odit ea beatae, in nemo nostrum?
            </div>
            <div className="flex w-full justify-between">
                <div>
                    <p>Hari Kerja</p>
                    <h1>Diinfokan Lebih Lanjut</h1>
                </div>
                <div>
                    <p>jam Kerja</p>
                    <h1>Diinfokan Lebih Lanjut</h1>
                </div>
            </div>
        </div>
    )
}