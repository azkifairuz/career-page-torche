import React, { useState } from "react";
export default function Form() {
  const data = {}
  const [input, setinput] = useState({
    username:"",
    title:"",
    bahasa:"",
    gender:"",
    gajiSaatIni:"",
    gajiDiharapkan:"",
    deskripsi:"",
    phone:"",
    email:"",
    country:"",
    city:"",
    address:""

  });
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinput((values) => ({ ...values, [name]: value }));
    
  };
  const handleSubmit = (event) => {
    event.preventDefault();   
    console.log(data);
    
  };
 
  return (
    <form onSubmit={handleSubmit} className="p-4 shadow-card flex flex-col gap-8 lg:shadow-none lg:w-10/12 lg:max-w-[714px] rounded-lg">
      <div>
        <header>
          <h1 className="font-rajdhani text-start heading-l-medium ">
            Basic Information
          </h1>
        </header>
        <section
          className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mt-2"
        >
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800  text-xl-regular">
              Nama
            </label>
            <input
              type="text"
              name="username"
              className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              title
            </label>
            <input
              type="text"
              name="title"
              className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              bahasa
            </label>
            <input
              type="text"
              name="bahasa"
              className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.bahasa}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Umur/Jenis Kelamin
            </label>
            <input
              type="text"
              name="gender"
              className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.gender}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Gaj Sekarang (IDR)
            </label>
            <input
              type="text"
              name="gajiSaatIni"
              className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.gajiSaatIni}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Gaji Yang Diharapkan(IDR)
            </label>
            <input
              type="text"
              name="gajiDiharapkan"
              className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main focus:ring-1 md:outline-neutral-700 focus:ring-primaryBlue-main"
              value={input.gajiDiharapkan}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col lg:col-span-2 gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              deskripsi
            </label>
            <textarea
              type="text"
              name="deskripsi"
              className="py-2 px-4 h-[167px] resize-none outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.deskripsi}
              onChange={handleChange}
            ></textarea>
          </div>
        </section>
      </div>
      <div>
        <header>
          <h1 className="font-rajdhani text-start heading-l-medium">Contact</h1>
        </header>
        <section className="flex mt-2 lg:grid lg:grid-cols-2 flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              phone
            </label>
            <input
              type="text"
              name="phone"
              value={input.phone}
              onChange={handleChange}
              className="py-2 px-4 outline-primaryBlue-main outline-1 rounded-md outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo  self-start text-neutral-800 text-xl-regular">
              Alamat email
            </label>
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={handleChange}
              className="py-2 px-4 outline-primaryBlue-main outline-1 rounded-md  outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo  self-start text-neutral-800 text-xl-regular">
              Negara
            </label>
            <input
              type="text"
              name="country"
              value={input.country}
              onChange={handleChange}
              className="py-2 px-4 outline-primaryBlue-main outline-1 rounded-md outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Kota
            </label>
            <input
              type="text"
              name="city"
              value={input.city}
              onChange={handleChange}
              className="py-2 px-4 outline-primaryBlue-main outline-1 rounded-md outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            />
          </div>
          <div className="flex lg:col-span-2 flex-col gap-1">
            <label className="font-cairo self-start text-neutral-800 text-xl-regular">
              Alamat
            </label>
            <textarea
              type="text"
              name="address"
              value={input.address}
              onChange={handleChange}
              className="py-2 h-[167px] resize-none px-4 outline-primaryBlue-main outline-1 rounded-md outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            ></textarea>
          </div>
          <button onSubmit={handleSubmit} className="bg-primaryBlue-main lg:col-span-2 text-white font-cairo text-l-regular py-2 px-4 rounded-lg border">
            Save Settings
          </button>
        </section>
      </div>
    </form>
  );
}
