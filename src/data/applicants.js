import { vacancies } from "./vacancy";

// combine vacancies in applicants and add another key named data
export const applicants = vacancies.map((item) => {
  return {
    ...item,
    data: [
      {
        name: "John Doe",
        age: 20,
        city: "Kota Makassar",
        experience: "3 Bulan",
        major: "S1 - Teknik Informatika",
        appliedAt: "2021-08-01",
        status: "Diproses",
      },
      {
        name: "John Doe",
        age: 20,
        city: "Kota Makassar",
        experience: "3 Bulan",
        major: "S1 - Teknik Informatika",
        appliedAt: "2021-08-01",
        status: "Diproses",
      },
    ],
  };
});
