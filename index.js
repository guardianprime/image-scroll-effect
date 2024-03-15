const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const imgContainerEl = document.querySelector(".image-container");
let x = 45;

prevBtn.addEventListener("click", () => {
    clearTimeout(timer)
    x += 45;
    rotateImg()
})
nextBtn.addEventListener("click", () => {
    clearTimeout(timer)
    x -= 45;
    rotateImg()
})

function rotateImg() {
    imgContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`

    timer = setTimeout(() => {
        x -= 45;
        rotateImg()
    }, 3000);
}

rotateImg()

