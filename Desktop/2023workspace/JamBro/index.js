
const url = "http://localhost:3000/api/bros";
const queryString = window.location.search;


const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id');

const speechBubble = document.querySelector(".speech_bubble");

async function changeBroProgram() {

    await fetch(url)
        .then((res) => res.json())
        .then(function (bros) {
            const random = Math.floor(Math.random() * bros.length);
            let bro = bros[random];
            console.log(bro);

        });



};

async function sameBroProgram() {

    await fetch(url)
        .then((res) => res.json())
        .then(function (bros) {
            const randomBro = Math.floor(Math.random() * bros.length);
            let bro = bros[randomBro];
            console.log(bro);
            const randomPhraseIndex = Math.floor(Math.random() * bro.phrases.length);
            let phrase = bro.phrases[randomPhraseIndex]

            speechBubble.innerHTML = `${phrase}`;
        });



};

let sameMood = document.getElementById("samemood");
sameMood.addEventListener("click", sameBroProgram);

let changeMood = document.getElementById("changemood");
changeMood.addEventListener("click", changeBroProgram);



/*
    // récupérer le bon produit avec l'url de l'API+l'Id du produit en question
    await fetch(url + broId)
        //traduire la promesse 1 en json
        .then((response) => response.json())

        /*les données (bros) récupérées dans la promesse 2 servent à afficher chaque propriété du produit
        "imageUrl" + "altTxt", "name", "price", "description", "colors".
      

        .then(function (bros) {
            console.log(bros)

            // Affichage de la balise "image" 
            let img = document.createElement('img');
            img.src = bros.imageUrl;
            img.alt = bros.altTxt;
            document.getElementsByClassName('item__img')[0].appendChild(img);


            // Affichage de la balise "title" 
            let namebro = document.getElementById('title');
            namebro.innerHTML = bros.name;

           
        }

        )
        .catch((err) => console.log(err));
    


    // On appelle la fonction addToCart avec un addEventListener sur le bouton (addToCartBtn), qui réagit au clic 
    const addToCartBtn = document.querySelector("#addToCart");
    addToCartBtn.addEventListener("click", (addToCart));


}

getInfobro();*/