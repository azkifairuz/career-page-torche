import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { signupUser } from "features/auth/authAction";

import {
  minCharacterRegex,
  passwordRegex,
  numberRegex,
  upperCaseRegex,
  symbolRegex,
} from "utils/regex";

import InputField from "components/atoms/InputField";
import AuthContainer from "components/organisms/AuthContainer";
import AuthButton from "components/atoms/AuthButton";
import PassValidationLabel from "components/atoms/PassValidationLabel";

import Background from "assets/images/RegisterBG.webp";
import PasswordInput from "components/atoms/PasswordInput";

function Signup() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [validationColors, setValidationColors] = useState({
    minCheck: "#D9D9D9",
    upperCheck: "#D9D9D9",
    numberCheck: "#D9D9D9",
    symbolCheck: "#D9D9D9",
  });

  const [isPassValid, setIsPassValid] = useState(false);

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

    dispatch(
      signupUser({
        fullName: name,
        email,
        password,
        passwordRepeat: confirmPassword,
      })
    );

    console.log(loading);

    // navigate("/signup/verify");
  };

  useEffect(() => {
    console.log("loading", loading);
    console.log("Error", error);
  }, [loading, error]);

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
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            title="Email"
            type="text"
            placeholder="yourmail@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex flex-col gap-[8px] items-start   ">
            <PasswordInput
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
            title={loading ? "Loading..." : "Daftar Sekarang"}
            disabled={loading}
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
