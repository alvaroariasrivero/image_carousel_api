const imageConteiner = document.querySelector('.image-container');
let imageArray = [];

const getPoke = async() => {
    for(let i = 1; i <= 26; i++){
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
        image.classList.add("pokeImage");
        imageConteiner.appendChild(image);
    });
};

getPoke();