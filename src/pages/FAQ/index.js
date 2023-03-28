import Accordion from "./Accordion";
import Card from "./Card";
import ScreeningCv from "assets/icons/screening-cv.svg";
import ScreeningTest from "assets/icons/screening-test.svg";
import Interview from "assets/icons/interview.svg";
import Offering from "assets/icons/offering.svg";

export default function FAQ() {
  return (
    <section className="flex-1">
      <header className="bg-primaryNavy-hover text-white flex items-center justify-center p-[120px]">
        <h1 className="display-bold">FAQ</h1>
      </header>
      <main className="px-[16px] md:px[32px] lg:px-[100px] py-[80px]">
        <div className="flex flex-col gap-[40px]">
          <h1 className="heading-l-bold w-fit md:self-center">
            Hiring Process
          </h1>
          <section className="flex flex-wrap lg:flex-nowrap gap-[24px] ">
            <Card
              title="Screening CV"
              src={ScreeningCv}
              step="1"
            />
            <Card
              title="Screening Test"
              src="assets/icons/ScreeningTest.svg"
              step="2"
            />
            <Card title="Interview" src="assets/icons/Interview.svg" step="3" />
            <Card title="Offering" src="assets/icons/Offering.svg" step="4" />
          </section>
          <section className="flex flex-col gap-[40px]">
            <h1 className="heading-l-bold w-fit md:self-center">
              Frequently Asked Questions
            </h1>
            <Accordion />
          </section>
        </div>
      </main>
    </section>
  );
}
