import { months } from "data/month";
import React, { useState } from "react";
import { X } from "react-bootstrap-icons";
export default function EducationPopup(props) {
    const { onclick } = props
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1999 }, (_, i) => 2000 + i);// buat list tahun dri 2000-skrng
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [gelar, setGelar] = useState("");

    const gelars = [
        { label: 'SD', value: 'sd' },
        { label: 'SMP', value: 'smp' },
        { label: 'SMK', value: 'smk' },
        { label: 'D1', value: 'd1' },
        { label: 'D2', value: 'd2' },
        { label: 'D3', value: 'd3' },
        { label: 'S1', value: 's1' },
        { label: 'S2', value: 's2' },
        { label: 'S3', value: 's3' },
      ];
    const handleYearChange = (event) => {
        setYear(event.target.value);
    };
    const handleGelarChange = (event) => {
        setGelar(event.target.value);
    };
    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    return (
        <form className="rounded-lg z-50 w-[537px]  bg-white">
            <div className="p-[16px_32px_16px_32px] border-b border-neutral-400 flex items-center justify-between">
                <h1 className="heading-s-bold">Pendidikan</h1>
                <X
                    size={25}
                    color="#727272"
                    className="cursor-pointer"
                    onClick={onclick} />
            </div>
            <div className="px-[32px]  py-[16px] flex flex-col gap-[16px]">
                <section>
                    <p className="text-xl-regular">Gelar</p>
                    <div className="flex w-full  items-center gap-[26px]">
                        <select
                            id="gelar"
                            name="gelar"
                            value={month}
                            onChange={handleGelarChange}
                            className="w-full text-neutral-500 bg-white border focus:border-2 focus:outline-none focus:border-primaryBlue-border placeholder:text-neutral-500 rounded-lg py-2 px-4  border-neutral-500"
                        >
                            <option value="">Pilih Gelar Anda</option>
                            {gelars.map((gelar) => (
                                <option key={gelar.value} value={gelar.value}>
                                    {gelar.label}
                                </option>
                            ))}
                        </select>
                        </div>
                </section>
                <section>
                    <p className="text-xl-regular">Instansi</p>
                    <input
                        type="text"
                        placeholder="Masukan perusahaan"
                        className="w-full placeholder:text-neutral-500 rounded-lg py-2 px-4 border  border-neutral-500"
                    />
                </section>
                <section>
                    <p className="text-xl-regular">Tahun Mulai</p>
                    <div className="flex w-full  items-center gap-[26px]">
                        <select
                            id="month"
                            name="month"
                            value={month}
                            onChange={handleMonthChange}
                            className="w-1/2 text-neutral-500 bg-white border focus:border-2 focus:outline-none focus:border-primaryBlue-border placeholder:text-neutral-500 rounded-lg py-2 px-4  border-neutral-500"
                        >
                            <option value="">Bulan</option>
                            {months.map((m) => (
                                <option key={m.value} value={m.value}>
                                    {m.label}
                                </option>
                            ))}
                        </select>
                        <select
                            id="year"
                            name="year"
                            value={year}
                            onChange={handleYearChange}
                            className="w-1/2 text-neutral-500 bg-white border focus:border-2 focus:outline-none focus:border-primaryBlue-border placeholder:text-neutral-500 rounded-lg py-2 px-4  border-neutral-500"
                        >
                            <option value="">Tahun</option>
                            {years.map((y) => (
                                <option key={y} value={y}>
                                    {y}
                                </option>
                            ))}
                        </select>

                    </div>
                </section>
                <section>
                    <p className="text-xl-regular">Tahun Keluar</p>
                    <div className="flex w-full  items-center gap-[26px]">
                        <select
                            id="month"
                            name="month"
                            value={month}
                            onChange={handleMonthChange}
                            className="w-1/2 text-neutral-500 bg-white border focus:border-2 focus:outline-none focus:border-primaryBlue-border placeholder:text-neutral-500 rounded-lg py-2 px-4  border-neutral-500"
                        >
                            <option value="">Bulan</option>
                            {months.map((m) => (
                                <option key={m.value} value={m.value}>
                                    {m.label}
                                </option>
                            ))}
                        </select>
                        <select
                            id="year"
                            name="year"
                            value={year}
                            onChange={handleYearChange}
                            className="w-1/2 text-neutral-500 bg-white border focus:border-2 focus:outline-none focus:border-primaryBlue-border placeholder:text-neutral-500 rounded-lg py-2 px-4  border-neutral-500"
                        >
                            <option value="">Tahun</option>
                            {years.map((y) => (
                                <option key={y} value={y}>
                                    {y}
                                </option>
                            ))}
                        </select>

                    </div>
                </section>
                <section className="flex gap-2">
                    <input type="checkbox" className="h-6 w-6 rounded-[4px] border border-neutral-500" />
                    <p className="text-l-regular">Saat ini saya masih beresekolah di sini</p>
                </section>
                <section>
                    <p className="text-l-regular text-neutral-900">Deskripsi Tambahan</p>
                    <textarea
                        type="text"
                        className="h-[180px] border rounded-[4px] px-[16px] py-2 border-neutral-700 w-full resize-none outline-1">

                    </textarea>
                </section>
            </div>
            <div className="w-full border-t border-neutral-400 py-[16px] px-[32px] gap-[16px] flex justify-end items-center">
                <button
                    type="button"
                    onclick={onclick}
                    className="py-[9px] px-[16px] hover:bg-neutral-300 font-rajdhani border border-neutral-700 rounded-lg">Cancel</button>
                <button className="py-[9px] px-[24px] font-rajdhani bg-primaryBlue-main text-white active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover rounded-lg">Save</button>
            </div>
        </form>
    )
}