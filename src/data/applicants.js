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
        major: "S1 - Teknik Informatika",
        appliedAt: "2021-08-01",
        status: "Diproses",
      },
      {
        name: "John Doe2",
        age: 20,
        city: "Kota Makassar",
        experience: "5 Bulan",
        major: "S1 - Teknik Informatika",
        appliedAt: "2022-08-02",
        status: "Diproses",
      },
      {
        name: "John Doe3",
        age: 20,
        city: "Kota Makassar",
        experience: "6 Bulan",
        major: "S1 - Teknik Informatika",
        appliedAt: "2021-08-03",
        status: "Diproses",
      },
      {
        name: "John Doe4",
        age: 20,
        city: "Kota Makassar",
        experience: "2 Bulan",
        major: "S1 - Teknik Informatika",
        appliedAt: "2021-09-01",
        status: "Diproses",
      },
      {
        name: "John Doe5",
        age: 20,
        city: "Kota Makassar",
        experience: "3 Bulan",
        major: "S1 - Teknik Informatika",
        appliedAt: "2021-09-02",
        status: "Diproses",
      },
      {
        name: "John Doe6",
        age: 20,
        city: "Kota Makassar",
        experience: "4 Bulan",
        major: "S1 - Teknik Informatika",
        appliedAt: "2021-10-01",
        status: "Diproses",
      },
    ],
  };
});
