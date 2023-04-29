import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContainer from "components/organisms/AuthContainer";
import InputField from "components/atoms/InputField";
import AuthButton from "components/atoms/AuthButton";

import {
  minCharacterRegex,
  fullRegex,
  numberRegex,
  upperCaseRegex,
} from "utils/regex";
import { regexColorChange } from "utils/regexColorChange";

import { CheckCircleFill } from "react-bootstrap-icons";

import Background from "assets/images/RegisterBG.webp";

export default function ChangePassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPassValid, setIsPassValid] = useState(false);

  const [minCheckColor, setMinCheckColor] = useState("#D9D9D9");
  const [upperCheckColor, setUpperCheckColor] = useState("#D9D9D9");
  const [numberCheckColor, setNumberCheckColor] = useState("#D9D9D9");

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
      navigate("/login");
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
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2 items-start   ">
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
          <AuthButton title="Ubah" type="submit" onClick={handleSubmit} />
        </div>
      </AuthContainer>
    </main>
  );
}
