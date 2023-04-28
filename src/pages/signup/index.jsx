import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircleFill } from "react-bootstrap-icons";

import {
  minCharacterRegex,
  fullRegex,
  numberRegex,
  upperCaseRegex,
} from "utils/regex";

import { regexColorChange } from "utils/regexColorChange";

import InputField from "components/atoms/InputField";
import AuthContainer from "components/organisms/AuthContainer";
import AuthButton from "components/atoms/AuthButton";

import Background from "assets/images/RegisterBG.webp";

function Signup() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [minCheckColor, setMinCheckColor] = useState("#D9D9D9");
  const [upperCheckColor, setUpperCheckColor] = useState("#D9D9D9");
  const [numberCheckColor, setNumberCheckColor] = useState("#D9D9D9");

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

  const handlePassswordChange = (e) => {
    const currentPassword = e.target.value;

    setPassword(currentPassword);

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
    <main className="relative flex p-0 md:px-[100px] md:py-[62px] justify-center lg:justify-end items-center min-h-screen">
      <img
        src={Background}
        alt="background"
        className="absolute -z-10 top-0 left-0 h-full w-full"
      />
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
          <AuthButton
            onClick={handleSubmit}
            name="signup-button"
            title="Daftar Sekarang"
          />
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
