import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircleFill } from "react-bootstrap-icons";

import InputField from "components/atoms/InputField";
import AuthContainer from "components/organisms/AuthContainer";

import Background from "assets/images/RegisterBG.webp";

function Signup() {
  const navigate = useNavigate();
  const checkColors = ["#D9D9D9", "green"];

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [minCheckColor, setMinCheckColor] = useState(checkColors[0]);
  const [upperCheckColor, setUpperCheckColor] = useState(checkColors[0]);
  const [numberCheckColor, setNumberCheckColor] = useState(checkColors[0]);

  const [isPassValid, setIsPassValid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (name === "") {
      alert("Nama tidak boleh kosong");
    }
  };

  const regexColorChange = (regex, text, colorSetter) => {
    if (regex.test(text)) {
      colorSetter(checkColors[1]);
    } else {
      colorSetter(checkColors[0]);
    }
  };

  const handlePassswordChange = (e) => {
    const currentPassword = e.target.value;

    setPassword(currentPassword);
    const minCharacterRegex = new RegExp("^(?=.{8,})");
    const upperCaseRegex = new RegExp("^(?=.*[A-Z])");
    const numberRegex = new RegExp("^(?=.*[0-9])");
    const fullRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[0-9])");

    regexColorChange(minCharacterRegex, currentPassword, setMinCheckColor);
    regexColorChange(upperCaseRegex, currentPassword, setUpperCheckColor);
    regexColorChange(numberRegex, currentPassword, setNumberCheckColor);

    if (fullRegex.test(password)) {
      setIsPassValid(true);
    } else {
      setIsPassValid(false);
    }

    console.log(password);
    console.log(isPassValid);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password tidak sama");
    } else {
      alert("Selamat datang");
      navigate("/signup/verify");
    }
  };

  return (
    <main className=" flex p-0 md:px-[100px] md:py-[62px] justify-center lg:justify-end items-center min-h-screen">
      <img src={Background} alt="background" className="fixed -z-10 top-0 left-0 right-0 bottom-0" />
      <AuthContainer>
        <form className="flex flex-col gap-[16px] w-full h-full" method="post">
          <InputField
            label="Fullname"
            type="text"
            placeholder="Ahmad Sultani"
            value={name}
            onChange={handleNameChange}
          />
          <InputField
            label="Email"
            type="text"
            placeholder="yourmail@mail.com"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="flex flex-col gap-[8px] items-start   ">
            <InputField
              label="Kata Sandi"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={handlePassswordChange}
            />
            <div className="flex gap-[8px] items-center">
              <CheckCircleFill
                size={20}
                id="number-check"
                color={minCheckColor}
              />
              <p className="text-neutral-1000 text-">
                Password min. 8 karakter
              </p>
            </div>
            <div className="flex gap-[8px] items-center">
              <CheckCircleFill
                size={20}
                id="number-check"
                color={upperCheckColor}
              />
              <p className="text-neutral-1000 text-">
                Menggunakan huruf kapital
              </p>
            </div>
            <div className="flex gap-[8px] items-center">
              <CheckCircleFill
                size={20}
                id="number-check"
                color={numberCheckColor}
              />
              <p className="text-neutral-1000 text-">Menggunakan angka</p>
            </div>
          </div>
          <InputField
            label="Konfirmasi Kata Sandi"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <button
            onClick={handleSubmit}
            name="loginbutton"
            className="w-full bg-primaryBlue-main hover:bg-primaryBlue-hover active:bg-primaryBlue-pressed  text-white focus:outline-none px-[14px] py-[16px] rounded-[8px] "
          >
            Daftar Sekarang
          </button>
        </form>
        <p className="text-neutral-1000 text-[14px]">
          sudah punya akun?{" "}
          <Link
            to="/login"
            className="font-bold text-primaryBlue-main hover:text-primaryBlue-hover active:text-primaryBlue-pressed"
          >
            Masuk Sekarang
          </Link>
        </p>
      </AuthContainer>
    </main>
  );
}

export default Signup;
