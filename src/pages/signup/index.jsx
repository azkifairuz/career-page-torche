import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircleFill } from "react-bootstrap-icons";

import { signup } from "service/auth";

import {
  minCharacterRegex,
  passwordRegex,
  numberRegex,
  upperCaseRegex,
  symbolRegex,
} from "utils/regex";

import { regexColorChange } from "utils/regexColorChange";

import InputField from "components/atoms/InputField";
import AuthContainer from "components/organisms/AuthContainer";
import AuthButton from "components/atoms/AuthButton";

import Background from "assets/images/RegisterBG.webp";
import PasswordInput from "components/atoms/PasswordInput";

function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [minCheckColor, setMinCheckColor] = useState("#D9D9D9");
  const [upperCheckColor, setUpperCheckColor] = useState("#D9D9D9");
  const [numberCheckColor, setNumberCheckColor] = useState("#D9D9D9");
  const [symbolCheckColor, setSymbolCheckColor] = useState("#D9D9D9");

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
    regexColorChange(symbolRegex, currentPassword, setSymbolCheckColor);

    if (passwordRegex.test(password)) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password tidak sama");
      return;
    }

    if (!isPassValid) {
      alert("Password tidak valid");
      return;
    }

    const res = await signup({
      fullName: name,
      email,
      password,
      passwordRepeat: confirmPassword,
    });

    console.log(res);

    const message = res.messages ? res.messages : res.message;
    alert(message);

    if (res.success === false) {
      return;
    }

    // navigate("/signup/verify");
  };

  return (
    <main className="relative flex p-0 md:px-[100px] md:py-[62px] justify-center lg:justify-end items-center min-h-screen">
      <img
        src={Background}
        alt="background"
        className="absolute -z-10 top-0 left-0 h-full w-full"
      />
      <AuthContainer>
        <form
          className="flex flex-col gap-[16px] w-full h-full"
          method="post"
          onSubmit={handleSubmit}
        >
          <InputField
            title="Fullname"
            type="text"
            placeholder="Ahmad Sultani"
            value={name}
            onChange={handleNameChange}
          />
          <InputField
            title="Email"
            type="text"
            placeholder="yourmail@mail.com"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="flex flex-col gap-[8px] items-start   ">
            <PasswordInput
              title="Kata Sandi"
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
            <div className="flex gap-[8px] items-center">
              <CheckCircleFill
                size={20}
                id="symbol-check"
                color={symbolCheckColor}
              />
              <p className="text-neutral-1000 text-">Menggunakan simbol</p>
            </div>
          </div>
          <PasswordInput
            title="Konfirmasi Kata Sandi"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <AuthButton
            onClick={handleSubmit}
            name="signup-button"
            title="Daftar Sekarang"
            type="submit"
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
