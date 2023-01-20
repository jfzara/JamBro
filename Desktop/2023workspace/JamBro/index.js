const url = "http://localhost:3000/api/bros";
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);



 
const randomBroId =

async function displayBro() {

    await fetch (url + broId)

    .then((resource) => resource.json())

    .then(function (broArr) {
        console.log(broArr);  
    })


};

const changeMood = document.querySelector("change_mood")
changeMood.addEventListener("click", displayBro);


/*
    // récupérer le bon produit avec l'url de l'API+l'Id du produit en question
    await fetch(url + broId)
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
            let namebro = document.getElementById('title');
            namebro.innerHTML = data.name;

           
        }

        )
        .catch((err) => console.log(err));
    


    // On appelle la fonction addToCart avec un addEventListener sur le bouton (addToCartBtn), qui réagit au clic 
    const addToCartBtn = document.querySelector("#addToCart");
    addToCartBtn.addEventListener("click", (addToCart));


}

getInfobro();*/