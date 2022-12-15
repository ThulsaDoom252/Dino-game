const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")

cactus.classList.add("move")

document.addEventListener("touchstart", (event) => jump())
document.addEventListener("keydown", (event) => jump())


const jump = () => {
    if (dino.classList !== "jump") {
        dino.classList.add("jump")
    }
    setTimeout(() => dino.classList.remove("jump"), 300)
}

setInterval(() => {
    let dinoPos = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusPos = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    if (cactusPos > 0 && cactusPos < 50 && dinoPos >= 140) {
        alert("GAME OVER")
        cactus.classList.remove("move")
        setTimeout(() => {
            cactus.classList.add("move")
        }, 100)
    }
}, 20)