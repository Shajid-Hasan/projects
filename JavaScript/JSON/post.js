// const url = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            displayPost(data)
        });
}

// UI show

const displayPost = (posts) => {
    
    // for(let i=0; i<posts.length; i++){
    //     console.log(posts[i]);
    // }

    // for(const post of posts){
    //     console.log(post);
    // }

// 1. get the container

    const postContainer = document.getElementById('post-container')
    // console.log(postContainer);


    posts.forEach((post) => {

    console.log(post.title);
    // 2. create  HTML element

    const li = document.createElement('li');
    li.innerText = post.title;
    console.log(li);

    // 3. add li into container
    postContainer.appendChild(li);
    });   
}