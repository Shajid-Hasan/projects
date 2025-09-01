const student = {
    name: "Jeson",
    marks: 90,
    family: {
        title: 'Ali',
        // mother: {
        //     name: 'Nurjahan',
        //     age: 45
        // }
    },
    "home-address": "Dhaka",
    1: 20,
};
console.log(student.family.title)
console.log(student.family.mother?.age)