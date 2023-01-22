
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
            const randomBroIndex = Math.floor(Math.random() * bros.length);
            let bro = bros[randomBroIndex];
            let sameRandomBro = bros.filter(sameRandomBro => sameRandomBro.id === bro.id);
             console.log(sameRandomBro);
             console.log(sameRandomBro.name);
          /*  const randomPhraseIndex = Math.floor(Math.random() * sameRandomBro.phrases.length);
            let phrase = sameRandomBro.phrases[randomPhraseIndex]
            speechBubble.innerHTML = `${phrase}`;*/
        }

        );



};

let sameMood = document.getElementById("samemood");
sameMood.addEventListener("click", sameBroProgram);

let changeMood = document.getElementById("changemood");
changeMood.addEventListener("click", changeBroProgram);
