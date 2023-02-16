
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
            let palName = document.querySelector(".pal_name");
            palName.innerHTML = `${pal.name}`;
            palName.style.display = "block";

            let homeTitle = document.querySelector(".titre")
            homeTitle.innerHTML = "";
            homeTitle.display = "none";




            let palPhoto = document.querySelector(".pal_photo");
            palPhoto.style.display = "block";
            palPhoto.style.width = "54vw";
            palPhoto.style.height = "39vh";


            palPhoto.style.background = `url(${pal.avatar})`;
            palPhoto.style.backgroundSize = "cover";



            let speechBubble = document.querySelector(".speech_bubble");
            speechBubble.style.backgroundColor = `${pal.color}`;



            let palButton = document.querySelector("#samemood");
            palButton.style.backgroundColor = `${pal.color}`;


            let root = document.documentElement;
            root.style.setProperty('--my-gradient', `45deg, rgb(241 237 237), rgb(236 230 183 / 52%), rgb(171 151 151 / 45%), ${pal.color}`);

            let mainContainer = document.querySelector(".main");
            mainContainer.style.backgroundColor = ;

            let palArr = pals.filter(p => p.id === pal.id);

            for (let p = 0; p <= palArr.length; p++) {
                setInterval(
                    function () {
                        const randomPhraseIndex = Math.floor(Math.random() * palArr[0].phrases.length);
                        let selectedpal = palArr[0]
                        let phrase = selectedpal.phrases[randomPhraseIndex]
                        speechBubble.innerHTML = `${phrase}`;

                    }, 5000);
            }


        }


        );



};

let sameMood = document.getElementById("samemood");
sameMood.addEventListener("click", samepalProgram);


