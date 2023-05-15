export default function Setting(props){
    const {userEmail = "Alexander.colombus@gmail.com",password} = props
    return (
        <div className="p-[8px_8px_16px_8px] w-[313px] flex flex-col gap-4">  
                <section className="border-b pb-[4px] border-primaryBlue-main">
                    <h1 className="heading-l-bold">Setting</h1>
                </section>

                <section className="w-[284px] p-[16px] items-start shadow-[0p_x0px_10px_0px_#0000001A] flex flex-col gap-[5px] rounded-lg">
                        <div className="flex flex-col gap-2 w-full">
                                <h1 className="heading-m-bold">Email</h1>
                                <p className="font-cairo text-[16px] leading-[24px] text-neutral-700">{userEmail}</p>
                                <button 
                                className="text-s-regular py-2 px-4 bg-primaryBlue-main active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover">
                                    Edit
                                </button>
                        </div>
                </section>
        </div>
    )
}