// Built in function

const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    // promise of response

    .then((response) => response.json())

    // Promise of JSON data

    .then((json) => console.log(json));
};

// const loadPost = () => {
//     const url = "https://jsonplaceholder.typicode.com/posts";

//   fetch(url) //promise of response

//     .then((res) => res.json()) 

//     .then((json) => {
//         console.log(json);
//         displayPost(json);
//     }); 
// };

// // Seen UI

// const displayPost = (posts) => {
//   //receive json data
//     posts.forEach((post) => {
//     console.log(post);
// });
// };

// const person = {
//     name: 'Shajid',
//     fruit: 'apple',
//     dish: 'beef',
//     friends: ['Ratul','Robin','Rumon'],
//     isRich: false,
//     money: 20000
// }
// console.log(person, typeof person);

/**
 * JS object with noitation
 *
 * JSON.stringify (convert) -> JSON
 * JSON.parsr (convert) -> object
 */
// object convert to String
// const personJSON = JSON.stringify(person);
// console.log(personJSON, typeof personJSON);

// // String convert object
// const parseJSON = JSON.parse(personJSON);
// console.log(parseJSON);
