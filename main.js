const imageContainer = document.querySelector('.image-container');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const closePopUp = document.getElementById('close-popup');
const popUpContainer = document.getElementById('popup-container');
let popUpImage = document.getElementById('popup-image');
let imagePopupContainer = document.querySelector('.image-popup-container');
let imageArray = [];
let pokeImage;

const getPoke = async() => {
    for(let i = 1; i <= 151; i++){
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let data = await response.json();
        let pokeImg = data.sprites.other.home.front_default;
        imageArray.push(pokeImg);
    }
    let lastElement = imageArray.pop();
    imageArray.unshift(lastElement);
    imageArray.map((pokeImage) => {
        let image = document.createElement("img");
        image.src = pokeImage;
        image.classList.add("poke-image");
        imageContainer.appendChild(image);
    });
    pokeImage = document.querySelectorAll('.poke-image');
    pokeImage.forEach(function(poke){
        poke.addEventListener('click', function(){
            let imageSrc = poke.getAttribute('src');
            popUpImage.setAttribute('src', imageSrc);
            popUpContainer.style.display = 'block';
        });
    });
};

next.addEventListener('click', function() {
    const firstAlbum = imageContainer.firstElementChild;
    pokeImage.forEach(function(item){
        item.classList.add('move-right');
    });
    setTimeout(function() {
        imageContainer.appendChild(firstAlbum);
        pokeImage.forEach(function(item){
            item.classList.remove('move-right');
        })
    }, 300);
});

prev.addEventListener('click', async function(){
    const lastAlbum = imageContainer.lastElementChild;
    const firstAlbum = imageContainer.firstElementChild;
    pokeImage.forEach(function(item){
        item.classList.add('move-left');
    });
    setTimeout(function() {
        imageContainer.insertBefore(lastAlbum, firstAlbum);
        pokeImage.forEach(function(item){
            item.classList.remove('move-left');
        })
    }, 300);
});



closePopUp.addEventListener('click', function(){
    popUpContainer.style.display = 'none';
});

popUpContainer.addEventListener('click', function() {
    popUpContainer.style.display = 'none';
});

imagePopupContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});

getPoke();