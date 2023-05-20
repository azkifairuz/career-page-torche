import { X } from "react-bootstrap-icons";
export default function DetailsCard(props) {
    const {onclick} = props
    return (
        <div className="rounded-lg max-w-[537px] bg-white ">
            <div className="w-full flex justify-between border-b items-center border-b-neutral-400 py-4 px-8">
                <h1 className="heading-s-bold">Torch Education</h1>
                <X color="#727272" size={30} />
            </div>
            <div className="w-full flex gap-4 py-4 px-8">
                <div className="w-[90px] text-l-regular text-neutral-1000">
                    <p className="flex justify-between">Job Title:</p>
                    <p className="flex justify-between">Experience:</p>
                    <p className="flex justify-between">Salary:</p>
                    <p className="flex justify-between">Description:</p>
                </div>
                <div className="text-neutral-700 text-l-regular">
                    <p>UI/UX Designer</p>
                    <p>1 years</p>
                    <p>IDR 8.000.000 - 10.000.000/Bulan</p>
                    <p>UI/UX Designer</p>
                    <p>
                        The ideal candidate will have experience in creating mockups to present to teams, collecting feedback and creating a quality piece of work. This individual should be comfortable with building sitemaps, wireframes and prototypes to provide to project manners and inevitably execute based on outlined criteria. This candidate should have strong creative and design skills and be familiar with various design technologies.
                    </p>
                    <p>Responsibilities</p>
                    <ul>
                        <li>
                            Develop mockup/design for various softwares (Mobile Application, Website, POS, etc)
                        </li>
                        <li>
                            Attend meeting with potential clients
                        </li>
                        <li>
                            Create visual assets such as icon, logos, web banners, etc

                        </li>
                        <li>
                            Give suggestions to technical team improve UI/UX of software

                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full flex items-center justify-end py-4 px-8 border-t border-t-neutral-400 ">
                <button onClick={onclick} className="bg-primaryBlue-main rounded-lg font-rajdhani font-semibold text-[18px] leading-[26px] text-neutral-50 py-2 px-6 text-center">Close</button>
            </div>
        </div>
    )
}