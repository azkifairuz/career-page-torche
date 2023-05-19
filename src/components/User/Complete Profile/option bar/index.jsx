import Item from "./item";

export default function OptionBar(params) {
    const itemData = [
        { id:1, href: "/tentang", title: "Tentang" },
        { id:2, href: "/pengelaman", title: "Pengalaman Kerja" },
        { id:3, href: "/pendidikan", title: "Pendidikan" },
        { id:4, href: "/organisasi", title: "Organisasi" },
        { id:5, href: "/skills", title: "Skills" },
        { id:6, href: "/penghargaan", title: "Penghargaan" },
        { id:7, href: "/portofolio", title: "Portofolio" },
        { id:9, href: "/resume", title: "Resume" },
      ];
    return(
        <div className="flex md:flex-col lg:gap-0  md:w-[175px] lg:w-[397px] md:scrollbar-hide  w-full overflow-x-auto">
            {
                itemData.map((item)=>{
                    return <Item key={item.id} href={item.href} title={item.title}/>
                })
            }
        </div>
    )
}