const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const imgContainerEl = document.querySelector(".image-container");
let x = 0;
let timer =
    prevBtn.addEventListener("click", () => {
        x += 45;
        clearTimeout(timer);
        updateGallery();

    })
nextBtn.addEventListener("click", () => {
    x -= 45;
    clearTimeout(timer);
    updateGallery();
})

function updateGallery() {
    imgContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x -= 45;
        updateGallery()
    }, 3000);
}

updateGallery();