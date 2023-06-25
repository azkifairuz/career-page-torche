import PropTypes from "prop-types";

import { X, FileEarmarkPlus } from "react-bootstrap-icons";

export default function ResumePopup(props) {
  const { onclick } = props;
  const MaxFileSize = 5 * 1024 * 1024;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      return alert("file tidak boleh kosong");
    }

    if (selectedFile.size > MaxFileSize) {
      return alert("ukuran file lebih dri 5mb");
    }
  };
  return (
    <form className="rounded-lg z-50 w-[350px]md:w-[537px] bg-white">
      <section className="p-[16px_32px_16px_32px] border-b border-neutral-400 flex items-center justify-between">
        <h1 className="heading-s-bold">Resume</h1>
        <X
          size={30}
          color="#727272"
          className="cursor-pointer"
          onClick={onclick}
        />
      </section>
      <section className="px-[32px]  py-[16px] flex flex-col gap-[16px]">
        <div className="border-2 cursor-pointer border-dotted rounded-md px-[16px] py-2 flex gap-[9px] justify-center items-center border-primaryBlue-main appearance-none w-full outline-1">
          <FileEarmarkPlus className="text-primaryBlue-main" size={18} />
          <label
            htmlFor="uploadCv"
            className="block text-center text-l-regular cursor-pointer text-primaryBlue-main font-medium text-lg"
          >
            Upload CV
          </label>
          <input
            onChange={handleFileChange}
            id="uploadCv"
            type="file"
            accept="application/pdf"
            className="appearance-none hidden"
          ></input>
        </div>
        <p className="text-m-regular w-full text-neutral-800">
          We prefer resumes to be in PDF format and no larger than 5MB.
          Don&apos;t worry, we won&apos;t share your info with anyone except the
          companies you&apos;re applying to.
        </p>
      </section>
      <section className="w-full border-t border-neutral-400 py-[16px] px-[32px] gap-[16px] flex justify-end items-center">
        <button
          onClick={onclick}
          type="button"
          className="py-[9px] px-[16px] hover:bg-neutral-300 font-rajdhani border border-neutral-700 rounded-lg"
        >
          Cancel
        </button>
        <button className="py-[9px] px-[24px] font-rajdhani bg-primaryBlue-main text-white active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover rounded-lg">
          Save
        </button>
      </section>
    </form>
  );
}

ResumePopup.propTypes = {
  onclick: PropTypes.func.isRequired,
};
