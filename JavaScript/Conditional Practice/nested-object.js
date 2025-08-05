const college = {
    name: 'vnc',
    class: ['11','12'],
    events: ['science fair', 'bijoy dibos', '21 february'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
// console.log(college.unique.color);
console.log(college);
college.unique.result.merit = 'top top top most';
console.log(college.unique.result.merit);
college.events[1] = '16 December';
console.log(college.events)

// delet object
delete college.class;
console.log(college)