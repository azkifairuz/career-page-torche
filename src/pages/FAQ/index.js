import Accordion from "./Accordion";
import Card from "./Card";
import ScreeningCv from "assets/icons/screening-cv.svg";
import ScreeningTest from "assets/icons/screening-test.svg";
import Interview from "assets/icons/interview.svg";
import Offering from "assets/icons/offering.svg";

export default function FAQ() {
  const cardData = [
    {
      title: "Screening CV",
      src: ScreeningCv,
    },
    {
      title: "Screening Test",
      src: ScreeningTest,
    },
    {
      title: "Interview",
      src: Interview,
    },
    {
      title: "Offering",
      src: Offering,
    },
  ];

  return (
    <section className="flex-1">
      <header className="bg-primaryNavy-hover box-border flex items-center justify-center p-[120px]">
        <h1 className="heading-xxl-bold text-neutral-100">FAQ</h1>
      </header>
      <main className="flex flex-col px-[16px] md:px[32px] lg:px-[100px] py-[80px] gap-[80px]">
        <div className="flex flex-col gap-[40px]">
          <h1 className="heading-l-bold w-fit md:self-center">
            Hiring Process
          </h1>
          <section className="flex flex-wrap lg:flex-nowrap gap-[24px] ">
            {cardData.map((card, index) => (
              <Card key={index} {...card} step={index + 1} />
            ))}
          </section>
        </div>
        <section className="flex flex-col gap-[40px]">
          <h1 className="heading-l-bold w-fit md:self-center">
            Frequently Asked Questions
          </h1>
          <Accordion />
        </section>
      </main>
    </section>
  );
}
