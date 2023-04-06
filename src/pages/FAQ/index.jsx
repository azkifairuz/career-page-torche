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
      desc: "Admin akan memilah CV para pelamar dan memilih untuk menolak atau melanjutkan kandidat ke tahap selanjutnya",
    },
    {
      title: "Screening Test",
      src: ScreeningTest,
      desc: "Kandidat akan diberikan waktu untuk mengisi kuesioner yang terkait dengan preferensi dunia kerja serta Test skill berdasarkan posisi yang dipilih",
    },
    {
      title: "Interview",
      src: Interview,
      desc: "Kandidat dapat memilih jadwal interview berdasarkan kesediaan waktu dari head/manager di torche",
    },
    {
      title: "Offering",
      src: Offering,
      desc: "Kandidat akan menerima offering letter melalui email dan meng-upload offering letter yg sudah di TTD ke website career page",
    },
  ];

  return (
    <section className="flex-1 transition-all duration-400 ease-in">
      <header className="box-border bg-[url('assets/images/bg.webp')] bg-cover bg-[center_bottom_30%] flex items-center justify-center p-[120px]">
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
