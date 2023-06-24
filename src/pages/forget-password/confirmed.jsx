import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContainer from "components/organisms/AuthContainer";
import InputField from "components/atoms/InputField";
import AuthButton from "components/atoms/AuthButton";

import {
  minCharacterRegex,
  passwordRegex,
  numberRegex,
  upperCaseRegex,
  symbolRegex,
} from "utils/regex";

import Background from "assets/images/RegisterBG.webp";
import PassValidationLabel from "components/atoms/PassValidationLabel";

export default function ChangePassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPassValid, setIsPassValid] = useState(false);

  const [validationColors, setValidationColors] = useState({
    minCheck: "#D9D9D9",
    upperCheck: "#D9D9D9",
    numberCheck: "#D9D9D9",
    symbolCheck: "#D9D9D9",
  });

  const handlePassswordChange = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);

    const regexMap = [
      { regex: minCharacterRegex, stateKey: "minCheck" },
      { regex: upperCaseRegex, stateKey: "upperCheck" },
      { regex: numberRegex, stateKey: "numberCheck" },
      { regex: symbolRegex, stateKey: "symbolCheck" },
    ];

    const updatedColors = regexMap.reduce((colors, { regex, stateKey }) => {
      const color = regex.test(currentPassword) ? "green" : "#D9D9D9";
      return { ...colors, [stateKey]: color };
    }, {});

    setValidationColors(updatedColors);
    setIsPassValid(passwordRegex.test(currentPassword));

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
              title="Kata Sandi"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={handlePassswordChange}
            />
            <PassValidationLabel
              color={validationColors.minCheck}
              label="Password min. 8 karakter"
            />
            <PassValidationLabel
              color={validationColors.upperCheck}
              label="Menggunakan huruf kapital"
            />
            <PassValidationLabel
              color={validationColors.numberCheck}
              label="Menggunakan angka"
            />
            <PassValidationLabel
              color={validationColors.symbolCheck}
              label="Menggunakan simbol"
            />
          </div>
          <InputField
            title="Konfirmasi Kata Sandi"
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
