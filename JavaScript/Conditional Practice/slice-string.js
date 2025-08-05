// Slice 

const address = 'bandarban';
const part = address.slice(2, 5);
console.log(part);

// Split

const sentence = 'I am a good and hard working person';
// console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendsStr = 'Rahim,simon,limon,apul';
const friends = friendsStr.split(',');
console.log(friends);

// Join
const realFriend = [ 'Rahim', 'simon', 'limon', 'apul' ]
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));
// console.log()