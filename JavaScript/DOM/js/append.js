// 1. parent node
const mainContainer = document.getElementById('main-container');

// 2. create child
const placesSection = document.createElement('section');

// create h1
const h1 = document.createElement('h1');
h1.innerText = 'places i want to visit';
placesSection.appendChild(h1);

// create ul
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Dhaka';
ul.appendChild(li1);


const li2 = document.createElement('li');
li2.innerText = 'Cox-Bazar';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Rangamati';
ul.appendChild(li3);
placesSection.appendChild(ul);


placesSection.appendChild(ul);



// 3. append placesSection to the main container

mainContainer.appendChild(placesSection)


// easer to create HTML

const booksSection = document.createElement('section');

booksSection.innerHTML = `
<h1>books i need to read</h1>
<ul>
    <li>Physics</li>
    <li>Math</li>
    <li>English</li>
</ul>
`
mainContainer.appendChild(booksSection);