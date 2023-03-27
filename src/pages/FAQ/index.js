import Card from "./Card";

export default function FAQ() {
  return (
    <section className="flex-1">
      <header className="bg-primaryNavy-hover text-white flex items-center justify-center p-[120px]">
        <h1 className="display-bold">FAQ</h1>
      </header>
      <main className="px-[100px] py-[80px]">
        <div className="flex flex-col gap-[40px]">
          <h1 className="heading-l-bold w-fit md:self-center">
            Hiring Process
          </h1>
          <section className="flex flex-wrap gap-[24px]">
            <Card
              title="Screening CV"
              src="assets/icons/ScreeningCV.svg"
              step="1"
            />
            <Card
              title="Screening Test"
              src="assets/icons/ScreeningTest.svg"
              step="2"
            />
            <Card
              title="Interview"
              src="assets/icons/Interview.svg"
              step="3"
            />
            <Card
              title="Offering"
              src="assets/icons/Offering.svg"
              step="4"
            />


          </section>
        </div>
      </main>
    </section>
  );
}
