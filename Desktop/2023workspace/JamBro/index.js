
const url = "http://localhost:3000/api/pals";
const queryString = window.location.search;


const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id');



async function changepalProgram() {

    await fetch(url)
        .then((res) => res.json())
        .then(function (pals) {
            const random = Math.floor(Math.random() * pals.length);
            let pal = pals[random];
            console.log(pal);

        });



};

async function samepalProgram() {
    let selectedpal = [];
    await fetch(url)
        .then((res) => res.json())
        .then(function (pals) {
            const randompalIndex = Math.floor(Math.random() * pals.length);
            let pal = pals[randompalIndex];
            let palNameDisplay = document.querySelector(".pal_name");
            palNameDisplay.innerHTML = `${pal.name}`;

            let palPhoto = document.querySelector(".pal_photo");
            palPhoto.style.display = "block";
            palPhoto.style.height = "238px";
            palPhoto.style.width = "276px";
            palPhoto.style.border = `1px ${pal.color} solid`;

            palPhoto.src = `${pal.avatar}`;


            let speechBubble = document.querySelector(".speech_bubble");
            speechBubble.style.backgroundColor = `${pal.color}`;

            

            let palButton = document.querySelector("#samemood");
            palButton.style.backgroundColor = `${pal.color}`;

            let palArr = pals.filter(p => p.id === pal.id);

            for (let p = 0; p <= palArr.length; p++) {
                setInterval(
                    function () {
                        const randomPhraseIndex = Math.floor(Math.random() * palArr[0].phrases.length);
                        let selectedpal = palArr[0]
                        let phrase = selectedpal.phrases[randomPhraseIndex]
                        speechBubble.innerHTML = `${phrase}`;
                        speechBubble.style.fontSize = "1.5rem";

                    }, 5000);
            }


        }

        );



};

let sameMood = document.getElementById("samemood");
sameMood.addEventListener("click", samepalProgram);


