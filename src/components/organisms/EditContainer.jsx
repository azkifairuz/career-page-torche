import React from "react";

export default function EditContainer(props) {
  const { children } = props;
  return (
    <section className="mt-[76px] flex flex-col gap-7 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] bg-white rounded-xl p-10 w-full">
      <h1 className="mb-3 heading-m-bold">Informasi Lowongan</h1>
      { children }
    </section>
  );
}
