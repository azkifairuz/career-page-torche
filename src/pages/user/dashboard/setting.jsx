import { useState } from "react"

export default function Setting(props) {
    const { userEmail = "Alexander.colombus@gmail.com", password = "alex123", contact = "8132 1234 52" } = props
    const passwordDisplay = Array(password.length).fill('●').join('')

    const countryCodes = [
        { code: '62', name: 'Indonesia' },
        { code: '1', name: 'United States' },
        { code: '44', name: 'United Kingdom' },
        { code: '91', name: 'India' },
        { code: '81', name: 'Japan' },
      ];
    
    const [countryCode,setCountryCode] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    
    const handleCountryCode = (event) =>{
        setCountryCode(event.target.value)
    }
    const handlePhoneNumber = (event) =>{
        setPhoneNumber(event.target.value)
    }

    
    return (
        <div className="p-[8px_8px_16px_8px] w-[313px] flex flex-col gap-4">
            <section className="border-b pb-[4px] border-primaryBlue-main">
                <h1 className="heading-l-bold">Setting</h1>
            </section>

            <section className="w-[284px] p-[16px] items-start shadow-[0p_x0px_10px_0px_#0000001A] flex flex-col gap-[24px] rounded-lg">
                <div className="flex flex-col gap-2 w-full">
                    <h1 className="heading-m-bold">Email</h1>
                    <p className="font-cairo text-[16px] leading-[24px] text-neutral-700">{userEmail}</p>
                    <button
                        className="text-s-regular text-white py-2 px-4 bg-primaryBlue-main rounded-lg active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover">
                        Edit
                    </button>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <h1 className="heading-m-bold">Password</h1>
                    <p
                        type="password"
                        className="font-cairo text-[16px] leading-[24px] text-neutral-700">{passwordDisplay}</p>
                    <button
                        className="text-s-regular text-white py-2 px-4 rounded-lg bg-primaryBlue-main active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover">
                        Edit
                    </button>
                </div>
            </section>

            <form className="p-[16px_16px_24px_16px] shadow-[0p_x0px_10px_0px_#0000001A] w-full rounded-lg">
                <label
                    htmlFor="editContact"
                    className="heading-m-bold ">
                    Contact
                </label>
                <input></input>
            </form>
        </div>
    )
}