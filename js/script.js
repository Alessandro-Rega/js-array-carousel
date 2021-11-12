// array
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const immagini_piccole = document.getElementById('immagini-piccole');

for(let i=0; i < items.length; i++){
    immagini_piccole.innerHTML += `
    <div class="immagine-piccola">
        <img src="img/0${i+1}.jpg" alt="..">
    </div>`
}

const immagine_principale = document.getElementById('immagine-principale');

immagine_principale.innerHTML += `<img src="img/01.jpg" alt="..">`  

const scritta = document.getElementById('scritta');
const luogo = document.getElementById('luogo');
const desc = document.getElementById('desc');

scritta.innerHTML += `
<span id="luogo">${title[0]}</span>
<span id="desc">${text[0]}</span>`