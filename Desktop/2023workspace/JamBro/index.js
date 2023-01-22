
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
    let selectedBro = [];
    await fetch(url)
        .then((res) => res.json())
        .then(function (bros) {
            const randomBroIndex = Math.floor(Math.random() * bros.length);
            let bro = bros[randomBroIndex];
            let broArr = bros.filter(b => b.id === bro.id);

            for (let p = 0; p <= broArr.length; p++) {
                const randomPhraseIndex = Math.floor(Math.random() * broArr[0].phrases.length);
                let selectedBro = broArr[0]
                let phrase = selectedBro.phrases[randomPhraseIndex]
                speechBubble.innerHTML = `${phrase}`;
            }
             
  
}

);



};

let sameMood = document.getElementById("samemood");
sameMood.addEventListener("click", sameBroProgram);

let changeMood = document.getElementById("changemood");
changeMood.addEventListener("click", changeBroProgram);
