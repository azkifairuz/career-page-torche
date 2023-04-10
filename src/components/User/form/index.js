import React, { useState } from "react";
export default function Form(params) {
  const [input, setinput] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };
  return (
    <div className="p-4 shadow-card lg:shadow-none lg:w-10/12 lg:max-w-[714px] rounded-lg">
      <div >
        <header className="border-b-2 border-primaryBlue-main p-2">
          <h1 className="font-rajdhani text-start heading-l-medium ">
            Basic Information
          </h1>
        </header>
        <section
          onSubmit={handleSubmit}
          className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mt-2"
        >
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800  text-xl-regular">
              Nama
            </label>
            <input
              type="text"
              className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.Name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Title
            </label>
            <input
              type="text"
              className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.Title}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Bahasa
            </label>
            <input
              type="text"
              className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.Bahasa}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Umur/Jenis Kelamin
            </label>
            <input
              type="text"
              className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input["Umur/JenisKelamin"]}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Gaj Sekarang (IDR)
            </label>
            <input
              type="text"
              className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.Gaji}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Gaji Yang Diharapkan(IDR)
            </label>
            <input
              type="text"
              className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main focus:ring-1 md:outline-neutral-700 focus:ring-primaryBlue-main"
              value={input.Expectation}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col lg:col-span-2 gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Deskripsi
            </label>
            <textarea
              type="text"
              className="py-2 px-4 h-[167px] resize-none outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.Deskripsi}
              onChange={handleChange}
            ></textarea>
          </div>
        </section>
      </div>
      <div >
        <header className="border-b-2 border-primaryBlue-main p-2">
          <h1 className="font-rajdhani text-start heading-l-medium">Kontak</h1>
        </header>
        <section className="flex mt-2 lg:grid lg:grid-cols-2 flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Phone
            </label>
            <input
              type="text"
              className="py-2 px-4 outline-primaryBlue-main outline-1 rounded-md outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo  self-start text-neutral-800 text-xl-regular">
              Alamat Email
            </label>
            <input
              type="text"
              className="py-2 px-4 outline-primaryBlue-main outline-1 rounded-md  outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo  self-start text-neutral-800 text-xl-regular">
              Negara
            </label>
            <input
              type="text"
              className="py-2 px-4 outline-primaryBlue-main outline-1 rounded-md outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Kota
            </label>
            <input
              type="text"
              className="py-2 px-4 outline-primaryBlue-main outline-1 rounded-md outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            />
          </div>
          <div className="flex lg:col-span-2 flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Alamat
            </label>
            <textarea
              type="text"
              className="py-2 h-[167px] resize-none px-4 outline-primaryBlue-main outline-1 rounded-md outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            ></textarea>
          </div>
          <button className="bg-primaryBlue-main lg:col-span-2 text-white font-cairo text-l-regular py-2 px-4 rounded-lg border">
            Save Settings
          </button>
        </section>
      </div>
    </div>
  );
}
