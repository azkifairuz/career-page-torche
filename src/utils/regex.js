export const minCharacterRegex = new RegExp("^(?=.{8,})");
export const upperCaseRegex = new RegExp("^(?=.*[A-Z])");
export const numberRegex = new RegExp("^(?=.*[0-9])");
export const symbolRegex = new RegExp("^(?=.*[!@#$%^&*])");
export const emailRegex = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
);
