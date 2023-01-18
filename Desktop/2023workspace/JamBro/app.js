

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('HelloWorld!');
});
app.listen(3000, () => console.log('Listening on port 3000'));



function Bro(name, color, avatar, mood, favorite_sounds, favorite_bpms, phrases, favorite_genres) {
    this.name = name;
    this.color = color;
    this.avatar = avatar;
    this.mood = mood;
    this.favorite_sounds = favorite_sounds;
    this.favorite_bpms = favorite_bpms;
    this.favorite_genres = favorite_genres;
    this.phrases = phrases;

}

let Darko = new Bro('Darko', 'black', '',
    ['low frequency sound', 'dark sound', 'darker sound', 'low pad sound', 'moody pad sound', 'soft and dark sound', 'low frequency percussions', 'menacing pad sounds', 'sinister synth sound                                                                                                                                                                                         v '], [], [], [], []);
let Ramos = new Bro('Ramos', 'red', '', [], [], [], [], []);
//avatars are the Url s of each image or each image should be made with CSS styling
//moods can be store in some object maybe and called  randomly when needed