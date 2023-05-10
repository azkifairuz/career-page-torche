import { months } from "data/month";
import React, { useState } from "react";
import { X } from "react-bootstrap-icons";
export default function AboutPopUp(params) {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1999 }, (_, i) => 2000 + i);// buat list tahun dri 2000-skrng
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    return (
        <form className="rounded-lg z-50 w-[537px] bg-white">
            <div className="p-[16px_32px_16px_32px] border-b border-neutral-400 flex items-center justify-between">
                <h1 className="heading-s-bold">Pengalaman Kerja</h1>
                <X size={25} color="#727272" />
            </div>
            <div className="px-[32px]  py-[16px] flex flex-col gap-[16px]">
                <section>
                    <p className="text-xl-regular">Posisi</p>
                    <input
                        type="text"
                        placeholder="Masukan posisi"
                        className="w-full border placeholder:text-neutral-500 rounded-lg py-2 px-4  border-neutral-500"
                    />
                </section>
                <section>
                    <p className="text-xl-regular">Perusahaan</p>
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
                    </div>
                </section>
                <section>
                    <p className="text-l-regular text-neutral-900">Jelaskan Profil Pekerjaan Anda</p>
                    <textarea
                        type="text"
                        className="h-[180px] border rounded-[4px] px-[16px] py-2 border-neutral-700 w-full resize-none outline-1">

                    </textarea>
                </section>
            </div>
            <div className="w-full border-t border-neutral-400 py-[16px] px-[32px] gap-[16px] flex justify-end items-center">
                <button className="py-[9px] px-[16px] hover:bg-neutral-300 font-rajdhani border border-neutral-700 rounded-lg">Cancel</button>
                <button className="py-[9px] px-[24px] font-rajdhani bg-primaryBlue-main text-white active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover rounded-lg">Save</button>
            </div>
        </form>
    )
}