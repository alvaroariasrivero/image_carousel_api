let imageArray = [];

const getPoke = async() => {
    for(let i = 1; i <= 10; i++){
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let data = await response.json();
        let pokeImg = data.sprites.front_default;
        imageArray.push(pokeImg);
    }
};

getPoke();
console.log(imageArray);