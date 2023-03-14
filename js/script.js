// Inserisco le immagini dinamiche nell'array
const imgArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

const itemsContainer = document.querySelector(".slider-items");

for (let i = 0; i < imgArray.length; i++) {
    const currentImg = imgArray [i];

    const sliderItem = 
        `<div class = "item">
            <img src="${currentImg}" alt="">
        </div>`;

    itemsContainer.innerHTML += sliderItem;
}

// Imposto la prima immagine e nascondo le altre in css
const itemsArray = document.getElementsByClassName("item");
console.log(itemsArray);

let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");


// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva,
// che quindi verrà visualizzata al posto della precedente.


// Click primo bottone
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function() {
    prevBtn.classList.remove("hidden");
    if (activeItemIndex < (itemsArray.length - 1)) {
        // Rimuovo active dall'img precedente
        itemsArray[activeItemIndex].classList.remove("active");

        // Incremento
        activeItemIndex++;

        // Aggiungo active alla nuova img
        itemsArray[activeItemIndex].classList.add("active");

        // Rimuovo il bottone quando arrivo all'ultima img
        if (activeItemIndex === itemsArray.length - 1) {
            nextBtn.classList.add("hidden");
        }
    }
});


// Click secondo bottone 
const prevBtn = document.querySelector(".prev");
prevBtn.classList.add("hidden");

prevBtn.addEventListener("click", function () {
    // Rimuovo l'hidden dal bottone
    nextBtn.classList.remove("hidden");

    // Rimuovo active
    itemsArray[activeItemIndex].classList.remove("active");

    // Decremento
    activeItemIndex--;

    // aggiungo active alla nuova img
    itemsArray[activeItemIndex].classList.add("active");

    if (activeItemIndex === 0) {
        prevBtn.classList.add("hidden");
    }
});

