
const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            displayPosts(data)
        });
}

// UI show

const displayPosts = (posts) => {
    // 1. get the container and empty the container
    const postContainer = document.getElementById('post-container')
    postContainer.innerHTML = '';
    // forEach loop
    posts.forEach((post) =>  {
    // 2. create element
    const postCard = document.createElement('div')
    postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div> 
    `
    // 3. add to the container

    postContainer.append(postCard)
});

};

loadPost()


//              Array of Object
// const displayPost = (posts) => {
    
//     // for(let i=0; i<posts.length; i++){
//     //     console.log(posts[i]);
//     // }

//     // for(const post of posts){
//     //     console.log(post);
//     // }

//     // 1. get the container
//     const postContainer = document.getElementById('post-container')
//     postContainer.innerHTML=''; // Re-add li break
//     // console.log(postContainer);

//     // ForEach loop function
//     posts.forEach((post) => {
//     console.log(post.title);

//     // 2. create  HTML element
//     const li = document.createElement('li');
//     li.innerText = post.title;
//     // console.log(li);

//     // 3. add li into container
//     postContainer.appendChild(li);
//     });   
// }