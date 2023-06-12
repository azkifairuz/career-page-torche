import { vacancies } from "./vacancy";

// combine vacancies in applicants and add another key named data
export const applicants = vacancies.map((item) => {
  return {
    ...item,
    data: [
      {
        name: "John Doe1",
        age: 20,
        city: "Kota Makassar",
        experience: "1 Bulan",
        lastEducation: "S1",
        major: "Teknik Informatika",
        appliedAt: "2021-08-01",
        status: "Diproses",
      },
      {
        name: "John Doe1",
        age: 20,
        city: "Kota Makassar",
        experience: "1 Bulan",
        lastEducation: "S1",
        major: "Teknik Informatika",
        appliedAt: "2021-08-01",
        status: "Diproses",
      },
      {
        name: "John Doe2",
        age: 20,
        city: "Jakarta",
        experience: "3 Bulan",
        lastEducation: "S2",
        major: "Teknik Informatika",
        appliedAt: "2023-10-03",
        status: "Diproses",
      },
      {
        name: "John Doe3",
        age: 20,
        city: "Tangerang",
        experience: "4 Bulan",
        lastEducation: "S1",
        major: "Teknik Informatika",
        appliedAt: "2021-09-22",
        status: "Diproses",
      },
      {
        name: "John Doe4",
        age: 20,
        city: "Kota Makassar",
        experience: "5 Bulan",
        lastEducation: "D3",
        major: "Teknik Informatika",
        appliedAt: "2022-07-01",
        status: "Diproses",
      },
    ],
  };
});
