import Item from "./item";

export default function OptionBar(params) {
    const itemData = [
        { href: "/tentang", title: "Tentang" },
        { href: "/pengelaman", title: "Pengalaman Kerja" },
        { href: "/pendidikan", title: "Pendidikan" },
        { href: "/organisasi", title: "Organisasi" },
        { href: "/skills", title: "Skills" },
        { href: "/penghargaan", title: "Penghargaan" },
        { href: "/portofolio", title: "Portofolio" },
        { href: "/resume", title: "Resume" },
      ];
    return(
        <div className="flex md:flex-col lg:gap-0  md:w-[175px] lg:w-[397px] md:scrollbar-hide gap-8 w-full overflow-x-auto">
            {
                itemData.map((item)=>{
                    return <Item href={item.href} title={item.title}/>
                })
            }
        </div>
    )
}