import { useState } from "react";

import { user } from "data/user";
import { countryCodes } from "data/countryCodes";
import InputField from "components/atoms/InputField";
import Select from "components/atoms/Select";

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
    address: user.address,
  });
  const [countryCode, setCountryCode] = useState("");
  const handleCountryCode = () => {
    setCountryCode(countryCode);
  };
  const [isValid, setIsValid] = useState(true);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.username === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    user.username = input.username;
    user.title = input.title;
    user.gender = input.gender;
    user.dateBirth = input.dateBirth;
    user.description = input.description;
    user.phone = input.phone;
    user.country = input.country;
    user.city = input.city;
    user.address = input.address;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-[313px] p-[24px_32px_24px_32px] shadow-[0px_0px_10px_0_#0000001A] flex md:min-w-[472px]  md:p-[24px_32px_24px_32px] flex-col gap-8 transition-all duration-500 ease-in-out rounded-lg"
    >
      <div>
        <header className="mb-[30px]">
          <h1 className="font-rajdhani text-start heading-l-bold text-neutral-1000 ">
            Profile
          </h1>
        </header>
        <section className="flex flex-col lg:grid lg:grid-cols-2 gap-5 mt-2">
          <div className="flex flex-col gap-1">
            <InputField
              type="text"
              name="username"
              title="Nama"
              placeholder="Input Your Name"
              value={input.username}
              onChange={handleChange}
            />
            <p className={`text-danger-main ${isValid ? "hidden" : "block"}`}>
              Nama Tidak Boleh Kosong
            </p>
          </div>
          <InputField
            type="text"
            name="title"
            title="Title"
            placeholder="Input Your Title"
            value={input.title}
            onChange={handleChange}
          />
          <div className="flex flex-col gap-2">
            <label className="self-start text-neutral-1000 text-l-bold">
              Jenis Kelamin
            </label>
            <Select
              title="Jenis Kelamin"
              active={input.gender}
              data={["Laki-laki", "Perempuan"]}
            />
          </div>
          <InputField
            type="date"
            name="dateBirth"
            title="Tanggal Lahir"
            placeholder="Pilih Tanggal Lahir"
            value={input.dateBirth || ""}
            onChange={handleChange}
          />
          <div className="flex flex-col lg:col-span-2 gap-1">
            <label className="font-cairo self-start text-neutral-1000 text-l-bold">
              Tentang Saya
            </label>
            <textarea
              type="text"
              name="description"
              className="py-2 px-4 h-[167px] resize-none outline-1 rounded-md text-neutral-500 focus:text-neutral-900  border border-primaryNavy-border outline focus:outline-primaryBlue-main  focus:ring-1 focus:ring-primaryBlue-main"
              value={input.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </section>
      </div>
      <div>
        <header>
          <h1 className="font-rajdhani text-start heading-l-bold text-neutral-1000">
            Contact
          </h1>
        </header>
        <section className="flex mt-2 lg:grid lg:grid-cols-2 flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-cairo self-start text-neutral-1000 text-l-bold">
              No Telp
            </label>
            <div className="flex w-full">
              <select
                className="py-2 px-4 bg-white outline-1 outline  rounded-l-md text-neutral-500 focus:text-neutral-900 border border-r-0 border-primaryNavy-border  focus:outline-primaryBlue-main  focus:ring-1 focus:ring-primaryBlue-main "
                onChange={handleCountryCode}
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    +{country.code}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="phone"
                placeholder="eg:+62 08xxxx"
                value={input.phone}
                onChange={handleChange}
                className="py-2 px-4  outline-1 rounded-r-md border-l-0 text-neutral-500 focus:text-neutral-900 border border-primaryNavy-border outline w-full focus:outline-primaryBlue-main  focus:ring-1 focus:ring-primaryBlue-main"
              />
            </div>
          </div>
          <InputField
            type="text"
            name="email"
            title="Email"
            placeholder="eg:example@gmail.com"
            onChange={handleChange}
            value={input.email}
          />
          <InputField
            type="text"
            name="website"
            title="Website"
            placeholder="eg:example.com"
            onChange={handleChange}
            value={input.website}
          />
          <InputField
            type="text"
            name="city"
            title="Kota"
            placeholder="eg: jakarta"
            onChange={handleChange}
            value={input.city}
          />
          <div className="flex lg:col-span-2 flex-col">
            <InputField
              type="text"
              name="address"
              title="Alamat"
              placeholder="eg: jl.abc kec.abc kab.abc"
              onChange={handleChange}
              value={input.address}
            />
          </div>
          <button
            onSubmit={handleSubmit}
            className="bg-primaryBlue-main lg:place-self-end lg:w-[206px] active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover lg:col-span-2 text-white font-cairo text-l-regular p-[14px_16px_14px_16px] rounded-lg border"
          >
            Simpan
          </button>
        </section>
      </div>
    </form>
  );
}
