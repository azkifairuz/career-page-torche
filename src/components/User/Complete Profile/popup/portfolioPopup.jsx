import React, { useState } from "react";
import { X } from "react-bootstrap-icons";

export default function PortfolioPopup(props) {
    const { onclick } = props
    const currentYear = new Date().getFullYear();



    return (
        <form className="rounded-lg z-50 w-[537px]  bg-white">
            <div className="p-[16px_32px_16px_32px] border-b border-neutral-400 flex items-center justify-between">
                <h1 className="heading-s-bold">Portofolio</h1>
                <X
                    size={25}
                    color="#727272"
                    className="cursor-pointer"
                    onClick={onclick} />
            </div>
            <div className="px-[32px]  py-[16px] flex flex-col gap-[16px]">
                <section>
                    <p className="text-l-regular text-neutral-900">Website</p>
                    <input
                        type="text"
                        placeholder="Masukan Penghargaan"
                        className="w-full border placeholder:text-neutral-500 rounded-lg py-2 px-4  border-neutral-500"
                    />
                </section>
                <section>
                    <p className="ttext-l-regular text-neutral-900">Link</p>
                    <input
                        type="text"
                        placeholder="Masukan perusahaan"
                        className="w-full placeholder:text-neutral-500 rounded-lg py-2 px-4 border  border-neutral-500"
                    />
                </section>
                <section>
                    <p className="ttext-l-regular text-neutral-900">Linkdin</p>
                    <input
                        type="text"
                        placeholder="Masukan perusahaan"
                        className="w-full placeholder:text-neutral-500 rounded-lg py-2 px-4 border  border-neutral-500"
                    />
                </section>
                <section>
                    <p className="ttext-l-regular text-neutral-900">Dribble</p>
                    <input
                        type="text"
                        placeholder="Masukan perusahaan"
                        className="w-full placeholder:text-neutral-500 rounded-lg py-2 px-4 border  border-neutral-500"
                    />
                </section>
                <section>
                    <p className="ttext-l-regular text-neutral-900">Behance</p>
                    <input
                        type="text"
                        placeholder="Masukan perusahaan"
                        className="w-full placeholder:text-neutral-500 rounded-lg py-2 px-4 border  border-neutral-500"
                    />
                </section>
                <section>
                    <p className="ttext-l-regular text-neutral-900">Github</p>
                    <input
                        type="text"
                        placeholder="Masukan perusahaan"
                        className="w-full placeholder:text-neutral-500 rounded-lg py-2 px-4 border  border-neutral-500"
                    />
                </section>
                <section>
                    <p className="ttext-l-regular text-neutral-900">Facebook</p>
                    <input
                        type="text"
                        placeholder="Masukan perusahaan"
                        className="w-full placeholder:text-neutral-500 rounded-lg py-2 px-4 border  border-neutral-500"
                    />
                </section>
                <section>
                    <p className="ttext-l-regular text-neutral-900">Twiter</p>
                    <input
                        type="text"
                        placeholder="Masukan perusahaan"
                        className="w-full placeholder:text-neutral-500 rounded-lg py-2 px-4 border  border-neutral-500"
                    />
                </section>
                <section>
                    <p className="ttext-l-regular text-neutral-900">Youtube</p>
                    <input
                        type="text"
                        placeholder="Masukan perusahaan"
                        className="w-full placeholder:text-neutral-500 rounded-lg py-2 px-4 border  border-neutral-500"
                    />
                </section>
            </div>
            <div className="w-full border-t border-neutral-400 py-[16px] px-[32px] gap-[16px] flex justify-end items-center">
                <button
                    onClick={onclick}
                    type="button"
                    className="py-[9px] px-[16px] hover:bg-neutral-300 font-rajdhani border border-neutral-700 rounded-lg">Cancel</button>
                <button className="py-[9px] px-[24px] font-rajdhani bg-primaryBlue-main text-white active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover rounded-lg">Save</button>
            </div>
        </form>
    )
}