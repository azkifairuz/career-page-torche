import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { X } from "react-bootstrap-icons";
import { Check } from "react-bootstrap-icons";
import Toga from "assets/icons/toga.svg";

export default function Preview(props) {
  const { active, setActive } = props;
  const navigate = useNavigate();

  const handleSubmit = () => {
    setActive(false);
    navigate("/admin/vacancy");
  };

  return (
    <div
      className={`${
        active ? "flex" : "hidden"
      } absolute py-20 left-0 justify-center items-center w-screen min-h-screen h-full bg-black bg-opacity-30 z-50`}
    >
      <section className="flex flex-col h-fit w-[1000px] z-50 bg-white p-[60px] rounded-xl">
        <header className="flex justify-between items-center mb-20">
          <h1 className="heading-l-bold">Preview Lowongan</h1>
          <button onClick={() => setActive(false)}>
            <X size={48} />
          </button>
        </header>
        <main className="flex flex-col gap-10 px-24">
          <section className="flex flex-col gap-10 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] bg-white rounded-xl px-[60px] pt-10 pb-20 w-full">
            <h1 className="heading-m-bold text-center">Frontend Engineer</h1>
            <div className="flex justify-between">
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <img src={Toga} alt="Toga" className="w-8 h-8" />
                  <section>
                    <h1 className="heading-s-medium text-neutral-500">
                      Pendidikan
                    </h1>
                    <p className="mt-2 text-xl-regular">
                      Tidak ada minimal pendidikan
                    </p>
                  </section>
                </div>
                <div className="flex gap-4">
                  <img src={Toga} alt="Toga" className="w-8 h-8" />
                  <section>
                    <h1 className="heading-s-medium text-neutral-500">
                      Pendidikan
                    </h1>
                    <p className="mt-2 text-xl-regular">
                      Tidak ada minimal pendidikan
                    </p>
                  </section>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <img src={Toga} alt="Toga" className="w-8 h-8" />
                  <section>
                    <h1 className="heading-s-medium text-neutral-500">
                      Pendidikan
                    </h1>
                    <p className="mt-2 text-xl-regular">
                      Tidak ada minimal pendidikan
                    </p>
                  </section>
                </div>
                <div className="flex gap-4">
                  <img src={Toga} alt="Toga" className="w-8 h-8" />
                  <section>
                    <h1 className="heading-s-medium text-neutral-500">
                      Pendidikan
                    </h1>
                    <p className="mt-2 text-xl-regular">
                      Tidak ada minimal pendidikan
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-5 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] bg-white rounded-xl px-[60px] pt-10 pb-20 w-full">
            <section>
              <h1 className="heading-s-medium text-neutral-500">Pendidikan</h1>
              <p className="mt-2 text-xl-regular">
                Tidak ada minimal pendidikan
              </p>
            </section>

            <section>
              <h1 className="heading-s-medium text-neutral-500">
                Deskripsi pekerjaan
              </h1>
              <div className="mt-2 text-xl-regular">
                <h2>Internship di Torche Education</h2>
                <div className="[&>*]:squared-list">
                  <p>
                    Program magang jarak jauh (remote internship) untuk
                    mahasiswa dan lulusan baru.
                  </p>
                  <p>
                    Unpaid internship selama 4 bulan, namun bisa mendapatkan
                    insentif.
                  </p>
                  <p>
                    Jam kerja: 14 jam/minggu, dapat diatur secara bebas oleh
                    masing-masing peserta.
                  </p>
                </div>
                <br />
                <h2>Job Description:</h2>
                <div className="[&>*]:squared-list">
                  <p>
                    Conducting research in UX design for TORCHE`&apos;`s Apps
                  </p>
                  <p>
                    Developing UX design for TORCHE`&apos;`s Apps and softwares
                  </p>
                </div>
              </div>
            </section>

            <section className="flex justify-between flex-1">
              <div>
                <h1 className="heading-s-medium text-neutral-500">
                  Hari kerja
                </h1>
                <p className="mt-2 text-xl-regular">Diinfokan lebih lanjut</p>
              </div>
              <div>
                <h1 className="heading-s-medium text-neutral-500">Jam kerja</h1>
                <p className="mt-2 text-xl-regular">undefined - undefined</p>
              </div>
            </section>
          </section>
          <button
            className="flex gap-3 items-center self-end bg-secondary-yellow pl-4 pr-5 py-2 rounded-xl"
            onClick={handleSubmit}
          >
            <p className="button-m-regular text-neutral-100">Konfirmasi</p>
            <Check size={24} color="white" />
          </button>
        </main>
      </section>
    </div>
  );
}

Preview.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};
