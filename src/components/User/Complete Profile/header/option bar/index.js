import Item from "./item";

export default function OptionBar(params) {
    const itemData = [
        { href: "/tentang", title: "Tentang" },
        { href: "/pengelaman", title: "Pengalaman Kerja" },
        { href: "/pendidikan", title: "Pendidikan" },
        { href: "/organisasi", title: "Organisasi" },
      ];
    return(
        <div className="flex md:scrollbar-hide gap-8 w-full overflow-x-auto">
            {
                itemData.map((item)=>{
                    return <Item href={item.href} title={item.title}/>
                })
            }
        </div>
    )
}