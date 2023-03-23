import { Link } from "react-router-dom";
import Logo from "../../assets/logos/Torche_Logo-01_White.png";
import * as Icon from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="xl:px-20 py-10 lg:px-10 px-5 bg-neutral-1000">
      <div className="flex flex-col justify-between gap-3 xl:flex-row">
        <div className="xl:w-6/12">
          <img src={Logo} alt="Logo" className="h-[100px]"></img>
          <p className="font-cairo font-normal text-white text-[14px] leading-7">
            Torche Education adalah perusahaan startup teknologi pendidikan yang
            berbasis di Indonesia, dengan fokus pada teknik kimia, teknik
            bioproses, dan mata pelajaran teknik proses lainnya.
          </p>
        </div>

        <div className="flex lg:flex-row lg:px-10 flex-col xl:flex-1 text-[14px] gap-10">
          <div className="mt-5 full">
            <p className="font-bold text-white heading-s-bold font-rajdhani">Link</p>
            <ul className="flex flex-col font-cairo text-white  space-y-3  mt-4">
              <Link to="/">Beranda</Link>
              <Link to="/about-us">Tentang Kami</Link>
              <Link to="/services">Layanan</Link>
              <Link to="/courses">Kursus</Link>
              <Link to="/careers">Karir</Link>
            </ul>
          </div>
          <div className="text-white mt-5 flex-1">
            <p className="font-bold mb-4 heading-s-bold font-rajdhani ">
              Kontak Kami
            </p>
            <p className="mb-3 font-cairo text-l-bold ">
              PT. Obor Pengetahuan Indonesia untuk Masyarakat
            </p>
            <p className="font-normal cairo mb-3">
              Jl. Kelapa Lilin Utara XIV Blok DG 8 No. 27 Kab. Tangerang, Banten
              15810 Indonesia
            </p>
            <p className="mb-3 font-cairo text-l-bold">
              Whatsapp Business:{" "}
              <span className="font-normal">+62 851 5521 6117</span>
            </p>
            <p className="mb-3 font-cairo text-l-bold">
              Email: <span className="font-normal">admin@torche.app</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex lg:justify-between lg:flex-row flex-col-reverse mt-8 gap-5 text-white">
        <div>
          <p className="font-cairo font-bold text-[14px] leading-[34px]">Copyright Torche 2022</p>
        </div>
        <div className="flex gap-8 items-center flex-wrap w-[70%] sm:w-[60%] xl:w-auto">
          <a
            className="cursor-pointer"
            target="blank"
            href="https://twitter.com/TorcheEdu"
          >
            <Icon.Twitter size={20} />
          </a>
          <a
            className="cursor-pointer"
            target="blank"
            href="https://www.facebook.com/torche.edu"
          >
            <Icon.Facebook size={20} />
          </a>
          <a
            className="cursor-pointer"
            target="blank"
            href="https://www.instagram.com/torche.app/"
          >
            <Icon.Instagram size={20} />
          </a>
          <a
            className="cursor-pointer"
            target="blank"
            href="https://www.youtube.com/channel/UCQnYuE3KU3CzcAjVhuCQtNw"
          >
            <Icon.Youtube size={20} />
          </a>
          <a
            className="cursor-pointer"
            target="blank"
            href="https://www.linkedin.com/company/torche-education/"
          >
            <Icon.Linkedin size={20} />
          </a>
          <a
            className="cursor-pointer"
            target="blank"
            href="https://vt.tiktok.com/ZSeu2n4ca/"
          >
            <Icon.Tiktok size={20} />
          </a>
          <a
            className="cursor-pointer"
            target="blank"
            href="https://discord.com/invite/2fYBrcK785"
          >
            <Icon.Discord size={20} />
          </a>
          <a
            className="cursor-pointer"
            target="blank"
            href="https://wa.me/+6285155216117"
          >
            <Icon.Whatsapp size={20} />
          </a>
          <a
            className="cursor-pointer"
            target="blank"
            href="https://page.line.me/229wiguf"
          >
            <Icon.Line size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
