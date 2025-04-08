const rgbbutton = document.getElementById("button-rgb");
const hexabutton = document.getElementById("button-hexa");
const elementTitle = document.getElementById("title");

const mousebox = document.querySelector(".mouse-box");
const rootStyles = document.documentElement.style;

let x = 0;
let y = 0;

const boxFollow = box => {
  //https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
  rootStyles.setProperty("-box-position", "relative"); //fixed
};

const scrollPosition = () => {
  position = scrollY;
  elementTitle.textContent = `Te has desplazado ${position} px`;
};

const scrollWidthIncrease = () => {
  const boxWidth =
    (scrollY * 100) / (document.body.scrollHeight - window.innerHeight);

  rootStyles.setProperty("--scroll-box-width", `${boxWidth}%`);
};

const rgbcolors = () => {
  // del 0 al 255
  const colorvalue = Math.floor(Math.random() * 256);
  return colorvalue;
};

const changeRgbbutton = () => {
  //3 valores: rojo,verde,azul
  rootStyles.setProperty(
    "--background-color",
    `rgb(${rgbcolors()}, ${rgbcolors()}, ${rgbcolors()})`
  );
};
const changeHexabutton = () => {
  //hexa 16 números (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E y F)     empieza por #    6 digitos
  let hexacolor = "";
  const hexa = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    const hexacolorRandom = hexa.charAt(
      Math.floor(Math.random() * hexa.length)
    );
    hexacolor += hexacolorRandom;
  }
  rootStyles.setProperty("--background-color", `#${hexacolor}`);
};

document.addEventListener("mousemove", boxFollow);

window.addEventListener("scroll", scrollWidthIncrease);
rgbbutton.addEventListener("click", changeRgbbutton);
hexabutton.addEventListener("click", changeHexabutton);

window.addEventListener("scroll", scrollPosition);
window.addEventListener("scroll", scrollWidthIncrease);
