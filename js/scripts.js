const rgbbutton = document.getElementById("button-rgb")
const hexabutton = document.getElementById("button-hexa")

const mousebox = document.querySelector(".mouse-box")
const rootStyles = document.documentElement.style

rootStyles.setProperty('--scroll-box-width','0%')

const boxFollow = (box) => {
    mousebox.transform = `translate(${box.clientX}px, ${box.client}px)`
}

const scrollWidthIncrease = () => {
   //let totalScroll =  document.body.scrollHeight

   if(window.scrollY >= document.body.scrollHeight){
    rootStyles.setProperty('--scroll-box-width','100%')
    }
    if(window.scrollY === 0) {
        rootStyles.setProperty('--scroll-box-width','0%')
    }
}

const rgbcolors = () =>{
    // del 0 al 255
    const colorvalue = Math.floor(Math.random() * 255 - 0)
    return colorvalue
}

const changeRgbbutton = () =>{
    //3 valores: rojo,verde,azul
    rootStyles.setProperty('--background-color',`rgb (${rgbcolors}, ${rgbcolors}, ${rgbcolors})`)
}
const changeHexabutton = () =>{
    //hexa 16 números (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E y F)
// empieza por #
    const hexa = '0123456789ABCDEF';
    hexa.length = 16;
    hexacolorRandom = hexa.charAt(
        Math.floor(Math.random() * hexa.length))
    rootStyles.setProperty( '--background-color',`#${hexacolorRandom}`)
}

document.addEventListener("mousemove", boxFollow)
rgbbutton.addEventListener("click",changeRgbbutton)

hexabutton.addEventListener("click",changeHexabutton)
window.addEventListener("scroll",scrollWidthIncrease)