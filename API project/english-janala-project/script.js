const loadLeasons = () => {
    url = "https://openapi.programming-hero.com/api/levels/all";

    fetch(url)
        .then((res) => res.json()) // promise of json data
        .then((json) => displayLessons(json.data));
};

const loadLabelWord = (id) => {
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayLabelWord(data.data));
};

const displayLabelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    if(words.length == 0){
        wordContainer.innerHTML = `
        <div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
            <img class="mx-auto" src="./assets/alert-error.png">
            <p class="text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-bold text-3xl">নেক্সট Lesson এ যান</h2>
        </div>
        ` ;
        return;
    }

    words.forEach((word) => {
    console.log(word);

    const card = document.createElement("div");
    card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>

        <div class="font-bangla text-2xl font-medium">${word.meaning}/${word.pronunciation}</div>
        <div class="flex justify-between">
            <button class="bg-[#1A91FF10] p-3 rounded-sm hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="bg-[#1A91FF10] p-3 rounded-sm hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
    </div>
    `;
    wordContainer.append(card);
    });
};

const displayLessons = (lessons) => {
  // 1. get the container & empty
    const labelContainer = document.getElementById("label-container");
    labelContainer.innerHTML = "";
  // 2. get into every lesson
for (let lesson of lessons) {
console.log(lesson);
    // 3. create element
const btnDiv = document.createElement("div");
btnDiv.innerHTML = `
        <button onclick = 'loadLabelWord(${lesson.level_no})' class="btn btn-outline btn-primary"><i class="fa-solid fa-book"></i>Lesson - ${lesson.level_no}</button>
        `;
    //4. append
    labelContainer.append(btnDiv);
    }
};
loadLeasons();
