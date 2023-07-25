const containerE1 = document.querySelector(".container")


for (let index = 0; index < 30; index++) {
    const colorcontainerE1 = document.createElement("div")

    colorcontainerE1.classList.add("color-container");

    containerE1.appendChild(colorcontainerE1);

}
const colorContainerE1s = document.
    querySelectorAll(".color-container");

generateColors()

function generateColors() {
    colorContainerE1s.forEach(
        (colorContainerE1) => {
            const newColorCode = randomColor();

            colorContainerE1.style.backgroundColor = "#" + newColorCode;
            colorContainerE1.innerText = "#" + newColorCode;
        });
}

randomColor()
function randomColor() {
    const chars = "0123456789abcdef"
    const colorCodeLength = "6";
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNUM = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(randomNUM, randomNUM + 1)
        console.log(colorCode)

    }
    return colorCode;

}