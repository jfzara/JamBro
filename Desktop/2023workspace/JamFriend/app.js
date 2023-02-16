

const express = require('express');
const app = express();


function pal(id, name, color, avatar, mood, favorite_sounds, favorite_bpms, favorite_genres, phrases) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.avatar = avatar;
    this.mood = mood;
    this.favorite_sounds = favorite_sounds;
    this.favorite_bpms = favorite_bpms;
    this.favorite_genres = favorite_genres;
    this.phrases = phrases;
};



const Darko = new pal(1, 'Darko', 'rgb(177, 190, 197, 1)', 'images/Darko.jpg', 'dark', ['low frequency sound', 'dark sound',
    'darker sound', 'low pad sound',
    'moody pad sound', 'soft and dark sound',
    'low frequency percussions', 'menacing pad sounds',
    'sinister synth sound'], [81, 100, 113, 85, 102, 76], ['ballad', 'gothic', 'cold wave'], ['This needs some more mystery', 'Even darker', 'Darker', 'Something sinister', 'I want something which makes me cry...', 'Some creepy short melody, with a pad, or soft sound', 'Some dark sound effect, nothing too showy', 'ooooh, I feel it!']);


const Ramos = new pal(2, 'Ramos', 'rgb(244, 255, 41, 1)', 'images/Ramos.jpeg', 'fiesta', ['bright sound', 'horn stab',
    'exotic percussion sound', 'triangle sound',
    'brass sound', 'bright lead', 'vocal stab sound'], [120, 124, 123, 126], ['salsa', 'samba', 'afrobeat', 'ska', 'tropical house'],
    ['Caramba!',
        'Ay, more percussions!', 'Make it more caliente!', 'Si! Muy bueno! A little more!', 'Some spicy hats', 'Some warm trumpets, or flutes, maybe?', 'Needs some tropical sound effect!', 'I want to dance, what about some rythmic chords', 'Some pluck sound, chord or melody!', 'I hear some sexy short melody now!', 'Hey, some cowbell or other high frequency percussion?', 'Ha ha, I like it like that!', 'A little more syncopation, please!', 'Kalimba or thumb piano melody, maybe?', 'Ta-ta-taaa-ta-ta: yes, something like that!', 'I would put some hot snare right there, pal!', 'A clap or a hot rim shot, now?']);

const Irna = new pal(3, 'Irna','rgb(255, 93, 255, 1)' ,'images/Irna.jpg', 'romantic/flowers', ['flute sound', 'airy sound', 'airy pad', 'light sound', 'light pad', 'celesta sound', 'soft bell sound', , 'smooth sound', 'smooth strings sound', 'mellow chord', 'smooth guitar strum', 'soft light piano chord', 'very light percussion in the background', 'smooth soft bass', 'sparse light piano notes', 'soft melody', 'soft reverb', 'soft echo', 'soft pad sound', 'soothing sound', 'whispers', 'soft shakers', 'soft rimshot sound', 'soft nature sound'], [72, 81, 100, 103], ['slow ballad', 'slow jam', 'folk', 'indie', 'chamber pop', 'indie pop'], ['I need something really soft and romantic', 'I hear some soft sound repeating in the background', 'Can you add some whispers in the background?', 'I don\'\t know, maybe some sparse notes for melody?', 'I would like an echeoy sound in the background', 'What about a soft pad played in a melody?', 'I\'\m in a romantic mood', 'Let\'\s try some soft couterpoint', 'Maybe some staccato, but with a light or soft sound?', 'Something intimate and delicate', 'An instrument that sounds like a flower?', 'I feel inspired!', 'What about a soft lead sound ?'])


const pals = [
    Darko, Ramos, Irna
];



/*
avatars are the Url s of each image or each image should be made with CSS styling
//moods can be store in some object maybe and called  randomly when needed       
 */

app.use((req, res, next) => {
    // origine, droit d'accéder = tt le monde '*'
    res.setHeader("Access-Control-Allow-Origin", "*");
    // headers, ce sont les headers acceptés (en-tête)
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    // methods,  ce sont les méthodes acceptés (verbe de requete)
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS, PATCH"
    );
    next();
});


app.listen(3000, () => console.log(`Listening on ${port}`));

app.get('/api/pals', (req, res) => {
    res.send(pals);
})

app.get('/api/pals/:id', (req, res) => {
    const somepal = pals.find(pal => pal.id === parseInt(req.params.id));

    if (!somepal) {
        res.status(404).send("Sorry, couldn't find the pal!");

    }
    res.send(somepal.favorite_sounds)
        ;
});//on met /:id pour chaque parametre, on peut mettre plusieurs parametres /:id/:foo/:bar etc

const port = process.env.PORT || 3000;


























/*async function getInfoProduct() {

    // récupérer le bon produit avec l'url de l'API+l'Id du produit en question
    await fetch(url + productId)
        //traduire la promesse 1 en json
        .then((response) => response.json())

        /*les données (data) récupérées dans la promesse 2 servent à afficher chaque propriété du produit
        "imageUrl" + "altTxt", "name", "price", "description", "colors".
      

        .then(function (data) {
            console.log(data)

            // Affichage de la balise "image" 
            let img = document.createElement('img');
            img.src = data.imageUrl;
            img.alt = data.altTxt;
            document.getElementsByClassName('item__img')[0].appendChild(img);


            // Affichage de la balise "title" 
            let nameProduct = document.getElementById('title');
            nameProduct.innerHTML = data.name;

           
        }

        )
        .catch((err) => console.log(err));
    


    // On appelle la fonction addToCart avec un addEventListener sur le bouton (addToCartBtn), qui réagit au clic 
    const addToCartBtn = document.querySelector("#addToCart");
    addToCartBtn.addEventListener("click", (addToCart));


}

getInfoProduct();
*/




