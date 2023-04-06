import { Link } from "react-router-dom";
import Logo from "assets/logos/Torche_Logo-01_White.webp";
import * as Icon from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="text-white bg-neutral-1000 px-[20px] md:px-[50px] lg:px-[120px]">
      <section className="pt-[40px] pb-[16px] md:py-[40px] lg:py-[70px] flex flex-col lg:flex-row text-m-regular lg:justify-between gap-[16px] md:gap-[32px]">
        <div className="flex flex-col w-full lg:w-5/12 gap-[8px]">
          <img src={Logo} alt="Logo" className="h-[89px] w-[142px]"></img>
          <p>
            Torche Education adalah perusahaan startup teknologi pendidikan yang
            berbasis di Indonesia, dengan fokus pada teknik kimia, teknik
            bioproses, dan mata pelajaran teknik proses lainnya.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between lg:pt-6 lg:w-5/12 gap-[16px] lg:gap-[48px]">
          <section className="flex flex-col gap-[8px]">
            <h2 className="heading-s-bold">Link</h2>
            <Link to="/">Beranda</Link>
            <Link to="/about-us">Tentang Kami</Link>
            <Link to="/services">Layanan</Link>
            <Link to="/courses">Kursus</Link>
            <Link to="/careers">Karir</Link>
          </section>

          <section className="flex flex-col gap-[8px]">
            <p className="heading-s-bold">Kontak Kami</p>
            <p className="text-m-bold">
              PT. Obor Pengetahuan Indonesia untuk Masyarakat
            </p>
            <p>
              Jl. Kelapa Lilin Utara XIV Blok DG 8 No. 27 Kab. Tangerang, Banten
              15810 Indonesia
            </p>
            <p>
              <span className="text-m-bold">Whatsapp Business:</span> +62 851
              5521 6117
            </p>
            <p>
              Email: <span className="font-normal">admin@torche.app</span>
            </p>
          </section>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row py-[16px] md:py-[30px] gap-[16px] justify-between md:items-center">
        <div>
          <p className="font-cairo font-bold text-m-bold">
            Copyright Torche 2022
          </p>
        </div>
        <div className="flex items-center flex-wrap w-2/3 md:w-fit gap-[10px]">
          <a
            className="cursor-pointer flex justify-center items-center w-[32px] h-[32px]"
            target="blank"
            href="https://twitter.com/TorcheEdu"
          >
            <Icon.Twitter size={16} />
          </a>
          <a
            className="cursor-pointer flex justify-center items-center w-[32px] h-[32px]"
            target="blank"
            href="https://www.facebook.com/torche.edu"
          >
            <Icon.Facebook size={16} />
          </a>
          <a
            className="cursor-pointer flex justify-center items-center w-[32px] h-[32px]"
            target="blank"
            href="https://www.instagram.com/torche.app/"
          >
            <Icon.Instagram size={16} />
          </a>
          <a
            className="cursor-pointer flex justify-center items-center w-[32px] h-[32px]"
            target="blank"
            href="https://www.youtube.com/channel/UCQnYuE3KU3CzcAjVhuCQtNw"
          >
            <Icon.Youtube size={16} />
          </a>
          <a
            className="cursor-pointer flex justify-center items-center w-[32px] h-[32px]"
            target="blank"
            href="https://www.linkedin.com/company/torche-education/"
          >
            <Icon.Linkedin size={16} />
          </a>
          <a
            className="cursor-pointer flex justify-center items-center w-[32px] h-[32px]"
            target="blank"
            href="https://vt.tiktok.com/ZSeu2n4ca/"
          >
            <Icon.Tiktok size={16} />
          </a>
          <a
            className="cursor-pointer flex justify-center items-center w-[32px] h-[32px]"
            target="blank"
            href="https://discord.com/invite/2fYBrcK785"
          >
            <Icon.Discord size={16} />
          </a>
          <a
            className="cursor-pointer flex justify-center items-center w-[32px] h-[32px]"
            target="blank"
            href="https://wa.me/+6285155216117"
          >
            <Icon.Whatsapp size={16} />
          </a>
          <a
            className="cursor-pointer flex justify-center items-center w-[32px] h-[32px]"
            target="blank"
            href="https://page.line.me/229wiguf"
          >
            <Icon.Line size={16} />
          </a>
        </div>
      </section>
    </footer>
  );
}
