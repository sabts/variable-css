const rgbbutton = document.getElementById("button-rgb");
const hexabutton = document.getElementById("button-hexa");
const elementTitle = document.getElementById("title");

const rootStyles = document.documentElement.style;

const rgbcolors = () => {
  const colorvalue = Math.floor(Math.random() * 256);  // del 0 al 255
  return colorvalue;
};

let x = 0;
let y = 0;

const boxFollow = box => {
  x = box.clientX;
  y = box.clientY;
  
  rootStyles.setProperty("--box-positionX", `${x}px`);
  rootStyles.setProperty("--box-positionY", `${y}px`);
};

const scrollPosition = () => {
  const position = scrollY;
  elementTitle.textContent = `Te has desplazado ${position} px`;
};

const scrollWidthIncrease = () => {
  const boxWidth =
    (scrollY * 100) / (document.body.scrollHeight - window.innerHeight);

  rootStyles.setProperty("--scroll-box-width", `${boxWidth}%`);
};

const changeRgbbutton = () => {
  rootStyles.setProperty(
    "--background-color",
    `rgb(${rgbcolors()}, ${rgbcolors()}, ${rgbcolors()})`);
};

const changeHexabutton = () => {
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
