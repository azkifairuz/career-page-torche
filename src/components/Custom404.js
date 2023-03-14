import { Link } from "react-router-dom";
import Logo from "../assets/logos/Torche_Logo-01_White.png";

export default function Custom404() {
  return (
    <main>
      <header className="bg-primary flex items-center justify-center h-fit">
        <Link to="/">
          <img className="h-20" src={Logo} alt="Torche" />
        </Link>
      </header>
      <div className="flex flex-col items-center justify-center text-darkGrey font-cairo">
        <h1 className="text-[100px] mt-8 font-bold font-rajdhani">404</h1>
        <h2 className="text-[25px] mb-8">Halaman tidak ditemukan!</h2>
        <p className="text-[18px] mb-8 max-w-3xl text-center">
          Halaman yang Anda cari tidak ada! Jika Anda menemukan halaman ini
          secara tidak sengaja, coba periksa URL di browser web Anda.
        </p>
        <Link to="/">
          <button className="px-4 py-2 mt-4 text-white bg-primary rounded-md">
            Kembali ke halaman beranda
          </button>
        </Link>
      </div>
    </main>
  );
}
