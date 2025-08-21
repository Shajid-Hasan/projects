// 1. Create element and set innerText or innerHTML

const newChild = document.createElement('li');
newChild.innerText = 'new born footballer here';

// 2. Find the parent where you will add the child

const playerlist = document.getElementById('player-list');
// console.log(playerlist);

// 3. append the child to the parent

playerlist.appendChild(newChild);