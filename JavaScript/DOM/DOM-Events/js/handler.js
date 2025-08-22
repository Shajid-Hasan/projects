document.getElementById('btn-update-title').addEventListener('click', function(){
// console.log('btn clicked');
    const pageTitleElement = document.getElementById('page-title');
    console.log(pageTitleElement);
    pageTitleElement.innerText = 'Updated page title text'
})


document.getElementById('btn-login')
    .addEventListener('click', function(){
    const userInfoELement = document.getElementById('user-info');
    userInfoELement.innerText = 'user logged in succesfully';
})