import React, { useState } from "react"
import { PencilFill } from "react-bootstrap-icons";
import downloadIcon  from "assets/icons/download.svg";
import ToggleSwitch from "components/atoms/ToggleSwicth";
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

    const [countryCode, setCountryCode] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(`${contact}`)
    const [isJobOpening,setIsJobOpening] = useState(false)
    const [isJobApplication,setIsJobApplication] = useState(false)
    
    const handleCountryCode = (event) => {
        setCountryCode(event.target.value)
    }
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }
    
    const handleToggle1 = () => {
        setIsJobApplication(!isJobApplication);
      };
    const handleToggle2 = () => {
        setIsJobOpening(!isJobOpening);
      };

    const submitPhoneNumber = (event) => {
        event.preventDefault()

        console.log(`Phone Number: ${phoneNumber}`);
        console.log(`Country Cde: ${countryCode}`);
    }
    return (
        <div className="p-[8px_8px_16px_8px] rounded-lg shadow-[0px_0px_10px_0px_#0000001A]  min-w-[313px] flex flex-col gap-4">
            <section className="border-b pb-[4px] border-primaryBlue-main">
                <h1 className="heading-l-bold">Setting</h1>
            </section>

            <section className="min-w-[284px] p-[16px] items-start justify-center shadow-[0px_0px_10px_0px_#0000001A] flex flex-col gap-[24px] rounded-lg">
                <div className="flex flex-col gap-2 w-full">
                    <h1 className="heading-m-bold">Email</h1>
                    <p className="font-cairo text-[16px] leading-[24px] text-neutral-700">{userEmail}</p>
                    <button
                        className="text-s-regular flex gap-[10px] justify-center items-center text-white py-2 px-4 bg-primaryBlue-main rounded-lg active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover">
                        <PencilFill size={12}/>
                        Edit
                    </button>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <h1 className="heading-m-bold">Password</h1>
                    <p
                        type="password"
                        className="font-cairo text-[16px] leading-[24px] text-neutral-700">{passwordDisplay}</p>
                    <button
                        className="text-s-regular flex gap-[10px] justify-center items-center text-white py-2 px-4 rounded-lg bg-primaryBlue-main active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover">
                        <PencilFill size={12}/>
                        Edit
                    </button>
                </div>
            </section>

            <form
                onSubmit={submitPhoneNumber}
                className="p-[16px_16px_24px_16px] flex flex-col gap-[24px] justify-center shadow-[0px_0px_10px_0px_#0000001A] w-full rounded-lg">
                <label
                    htmlFor="editContact"
                    className="heading-m-bold ">
                    Contact
                </label>
                <div className="border-neutral-500 text-neutral-700 flex gap-[14px] border w-full rounded-lg focus:outline-none  focus:border-primaryBlue-main">
                    <select
                        className="bg-transparent py-2 pl-4"
                        value={countryCode}
                        onChange={handleCountryCode}
                    >
                        {
                            countryCodes.map((country) => (
                                <option key={country.code} value={country.code}>
                                    +{country.code}
                                </option>
                            ))
                        }
                    </select>
                    <input
                        className="py-2 pr-4 focus:outline-none  bg-transparent rounded-r-lg border-r border-r-neutral"
                        id="editContact"
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumber}>

                    </input>

                </div>
                <button
                    type="submit"
                    className="text-s-regular flex justify-center items-center  gap-[10px] w-full text-white py-2 px-4 rounded-lg bg-primaryBlue-main active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover">
                    <img src={downloadIcon} alt="download-icon" />
                    Save
                </button>
            </form>

            <section className="p-[16px] shadow-[0px_0px_10px_0px_#0000001A] rounded-lg flex flex-col gap-[5px] w-full">
                        <h1 className=" text-neutral-900 font-cairo text-[18px] leading-[24px] ">We'll send you email for updated on job-related news with our notifications.</h1>

                        <div className="flex gap-[4px]  flex-col">
                            <h1 className="heading-m-bold">
                                Jobs Oppening
                            </h1>
                            <p className="font-cairo text-[14px] leading-[24px] text-neutral-700">Notification email for job openings that suit your profile</p>
                            <ToggleSwitch onclick={handleToggle2} isActive= {isJobOpening}  />
                        </div>
                        <div className="flex gap-[4px]  flex-col">
                            <h1 className="heading-m-bold">
                                Jobs Oppening
                            </h1>
                            <p className="font-cairo text-[14px] leading-[24px] text-neutral-700">Notification email for job openings that suit your profile</p>
                            <ToggleSwitch onclick={handleToggle1} isActive= {isJobApplication} />
                        </div>
            </section>
        </div>
    )
}