
const url = "http://localhost:3000/api/friends";
const queryString = window.location.search;


const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id');



async function changefriendProgram() {

    await fetch(url)
        .then((res) => res.json())
        .then(function (friends) {
            const random = Math.floor(Math.random() * friends.length);
            let friend = friends[random];
            console.log(friend);

        });



};

async function samefriendProgram() {

    let selectedfriend = [];
    await fetch(url)
        .then((res) => res.json())
        .then(function (friends) {
            const randomfriendIndex = Math.floor(Math.random() * friends.length);
            let friend = friends[randomfriendIndex];
            let friendName = document.querySelector(".friend_name");
            friendName.innerHTML = `${friend.name}`;
            friendName.style.display = "block";

            let homeTitle = document.querySelector(".titre")
            homeTitle.innerHTML = "";
            homeTitle.display = "none";




            let friendPhoto = document.querySelector(".friend_photo");
            friendPhoto.style.display = "block";
            friendPhoto.style.width = "54vw";
            friendPhoto.style.height = "39vh";


            friendPhoto.style.background = `url(${friend.avatar})`;
            friendPhoto.style.backgroundSize = "cover";

            let btn = document.getElementById("samemood");
            btn.style.backgroundColor = `${friend.color}`;

            let speechBubble = document.querySelector(".speech_bubble");
            speechBubble.style.backgroundColor = "whitesmoke";



            let root = document.documentElement;
            root.style.setProperty('--my-gradient', `${friend.bgcolor}`);

            let friendArr = friends.filter(p => p.id === friend.id);

            for (let p = 0; p <= friendArr.length; p++) {
                setInterval(
                    function () {
                        const randomPhraseIndex = Math.floor(Math.random() * friendArr[0].phrases.length);
                        let selectedfriend = friendArr[0]
                        let phrase = selectedfriend.phrases[randomPhraseIndex]
                        speechBubble.innerHTML = `${phrase}`;

                    }, 12000);
            }


        }


        );



};

let sameMood = document.getElementById("samemood");
sameMood.addEventListener("click", function () {
    setTimeout(samefriendProgram, 1001)
});

