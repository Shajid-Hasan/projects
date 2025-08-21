// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section')
// console.log(sections);
// for(const section of sections){
//     console.log(section);
//     section.style.background = 'lightblue';
//     section.style.border = '3px solid green';
//     section.style.marginBottom = '5px';
//     section.style.borderRadius = '15px';
//     section.style.padding = '10px';
// }
// Daynamic class 

for(const section of sections){
    section.classList.add('section-card');
}


// Tag name
const allParagrap = document.getElementsByTagName('p');
        for(const para of allParagrap){
            // console.log(para);
            // console.log(para.innerText);
        }