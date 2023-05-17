import React, { useState } from "react";
import { user } from "data/user"
export default function Form() {

  const [input, setinput] = useState({
    username: user.username,
    title: user.title,
    gender: user.gender,
    dateBirth: user.dateBirth,
    description: user.description,
    phone: user.phone,
    email: user.email,
    country: user.country,
    city: user.city,
    address: user.address

  });
  const [isValid, setIsValid] = useState(true)
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinput((values) => ({ ...values, [name]: value }));


  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.username === "") {
      setIsValid(false)

    } else {
      setIsValid(true)
    }
    console.log(isValid);
    console.log(user);
    user.username = input.username
    user.title = input.title
    user.gender = input.gender
    user.dateBirth = input.dateBirth
    user.description = input.description
    user.phone = input.phone
    user.country = input.country
    user.city = input.city
    user.address = input.address
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[472px] p-4 shadow-[0px_0px_10px_0_#0000001A] flex  md:py-[32px] md:px-[42px] flex-col gap-8 lg:shadow-none lg:w-[80%] lg:max-w-[1000px] lg:min-w-[714px] rounded-lg"
    >
      <div>
        <header className="mb-[30px]">
          <h1 className="font-rajdhani text-start heading-l-medium ">
            Basic Information
          </h1>
        </header>
        <section
          className="flex flex-col lg:grid lg:grid-cols-2 gap-5 mt-2"
        >
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-1000  text-l-bold">
              Nama
            </label>
            <input
              type="text"
              name="username"
              placeholder="Input Your Name"
              className="py-2 px-4 text-neutral-500 focus:text-neutral-900 outline outline-1  rounded-md lg:focus:outline-neutral-800   focus:outline-primaryBlue-main md:outline-neutral-500 lg:ring-neutral-800 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.username}
              onChange={handleChange}
            />
            <p className={`text-danger-main ${isValid ? "hidden" : "block"}`}>Nama Tidak Boleh Kosong</p>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-1000 text-l-bold">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Input Your Title"
              className="py-2 px-4 outline-1 rounded-md text-neutral-500 focus:text-neutral-900  md:outline-neutral-500 outline focus:outline-primaryBlue-main  lg:focus:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-1000 text-l-bold">
              Jenis Kelamin
            </label>
            <input
              type="text"
              name="gender"
              placeholder="Input Your gender"
              className="py-2 px-4 outline-1 rounded-md text-neutral-500 focus:text-neutral-900  md:outline-neutral-500 outline focus:outline-primaryBlue-main  lg:focus:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.gender}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-1000 text-l-bold">
              Tanggal Lahir
            </label>
            <input
              type="text"
              name="genderOrAge"
              placeholder="eg:12/men"
              className="py-2 px-4 outline-1 rounded-md text-neutral-500 focus:text-neutral-900  md:outline-neutral-500 outline focus:outline-primaryBlue-main  lg:focus:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.age || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col lg:col-span-2 gap-1">
            <label className="font-cairo self-start text-neutral-1000 text-l-bold">
              description
            </label>
            <textarea
              type="text"
              name="description"
              className="py-2 px-4 h-[167px] resize-none outline-1 rounded-md text-neutral-500 focus:text-neutral-900  md:outline-neutral-500 outline focus:outline-primaryBlue-main  lg:focus:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
              value={input.description}
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
            <label className="font-cairo self-start text-neutral-1000 text-l-bold">
              phone
            </label>
            <input
              type="text"
              name="phone"
              placeholder="eg:+62 08xxxx"
              value={input.phone}
              onChange={handleChange}
              className="py-2 px-4  outline-1 rounded-md text-neutral-500 focus:text-neutral-900 md:outline-neutral-500 outline focus:outline-primaryBlue-main  lg:focus:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo  self-start text-neutral-1000 text-l-bold">
              Alamat email
            </label>
            <input
              type="text"
              name="email"
              value={input.email}
              placeholder="eg:example@gmail.com"
              onChange={handleChange}
              className="py-2 px-4  outline-1 rounded-md text-neutral-500 focus:text-neutral-900  md:outline-neutral-500 outline focus:outline-primaryBlue-main  lg:focus:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo  self-start text-neutral-1000 text-l-bold">
              Negara
            </label>
            <input
              type="text"
              name="country"
              value={input.country}
              placeholder="eg: indonesia"
              onChange={handleChange}
              className="py-2 px-4  outline-1 rounded-md text-neutral-500 focus:text-neutral-900 md:outline-neutral-500 outline focus:outline-primaryBlue-main  lg:focus:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-1000 text-l-bold">
              Kota
            </label>
            <input
              type="text"
              name="city"
              value={input.city}
              placeholder="eg: jakarta"
              onChange={handleChange}
              className="py-2 px-4  outline-1 rounded-md text-neutral-500 focus:text-neutral-900 md:outline-neutral-500 outline focus:outline-primaryBlue-main  lg:focus:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            />
          </div>
          <div className="flex lg:col-span-2 flex-col gap-1">
            <label className="font-cairo self-start text-neutral-1000 text-l-bold">
              Alamat
            </label>
            <textarea
              type="text"
              name="address"
              value={input.address}
              placeholder="eg: jl.abc kec.abc kab.abc"
              onChange={handleChange}
              className="py-2 h-[167px] resize-none px-4  outline-1 rounded-md text-neutral-500 focus:text-neutral-900 md:outline-neutral-500 outline focus:outline-primaryBlue-main  lg:focus:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"
            ></textarea>
          </div>
          <button onSubmit={handleSubmit} className="bg-primaryBlue-main lg:place-self-end lg:w-[314px] lg:col-span-2 text-white font-cairo text-l-regular py-2 px-4 rounded-lg border">
            Save Settings
          </button>
        </section>
      </div>
    </form>
  );
}
