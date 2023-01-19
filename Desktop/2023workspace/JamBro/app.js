

const express = require('express');
const app = express();

function Bro(id, name, color, avatar, mood, favorite_sounds, favorite_bpms, favorite_genres, phrases) {
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



const Darko = new Bro('1', 'Darko', 'black', 'avatarDarko', 'dark', ['low frequency sound', 'dark sound',
    'darker sound', 'low pad sound',
    'moody pad sound', 'soft and dark sound',
    'low frequency percussions', 'menacing pad sounds',
    'sinister synth sound'], [81, 100, 113, 85, 102, 76], ['ballad', 'gothic', 'cold wave'], ['This needs some more mystery', 'Even darker', 'Darker', 'Something sinister']);


const Ramos = new Bro('2', 'Ramos', 'red', 'avatarRamos', 'fiesta', ['bright sound', 'horn stab',
    'exotic percussion sound', 'triangle sound',
    'brass sound', 'bright lead', 'vocal stab sound'], [120, 124, 123, 126], ['salsa', 'samba', 'afrobeat', 'ska', 'tropical house'],
    ['Caramba!',
        'Ay, more percussions!', 'Make it more caliente!']);





/*
(  
      
    );        

                                                                                                                                                                       v '], [], [], [], []);


 */

//avatars are the Url s of each image or each image should be made with CSS styling
//moods can be store in some object maybe and called  randomly when needed

const bros = [

];

app.get('/', (req, res) => {
    res.send('HelloWorld!');
});
app.listen(3000, () => console.log(`Listening on ${port}`));

app.get('/api/bros', (req, res) => {
    res.send([1, 2, 3]);
})

app.get('/api/bros/:id', (req, res) => {
    const bro = bros.find(br => br.id === parseInt(req.params.id));
    if (!bro) {
        res.status(404).send("We don't know that bro!");
        res.send(bro);
    }
});//on met /:id pour chaque parametre, on peut mettre plusieurs parametres /:id/:foo/:bar etc



const port = process.env.PORT || 3000;




