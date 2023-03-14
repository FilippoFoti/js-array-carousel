// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le 
// immagini dinamicamente servendoci dell'array fornito e un semplice 
// ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una 
// classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato 
// nella milestone 1, ma costruito dinamicamente attraverso JavaScript.


// Inserisco le immagini dinamiche nell'array
const imgArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

const itemsContainer = document.querySelector(".slider-items");

for (let i = 0; i < imgArray.length; i++) {
    const currentImg = imgArray [i];

    const sliderItem = `
        <div class = "item">
            <img src="${currentImg}" alt="">
        </div>`;

    itemsContainer.innerHTML += sliderItem;
}

const itemsArray = document.getElementsByClassName("item");
console.log(itemsArray);


let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");
