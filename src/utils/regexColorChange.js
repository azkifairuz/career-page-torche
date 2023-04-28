export const regexColorChange = (regex, text, colorSetter) => {
  if (regex.test(text)) {
    colorSetter("green");
  } else {
    colorSetter("#D9D9D9");
  }
};
