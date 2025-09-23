import React from 'react';

const Student = ({student}) => {
    console.log(student)
    // if(student.name === 'Alaina'){
    //     return <h1>Admit to class 10</h1>
    // }
    
    return (
        <>
            <h2>{student.name}</h2>
            <h2>{student.age}</h2>
            {
                student.isRegular ? 'regular' : 'Irregular' //conditional Rendering [Ternary]
            }
        </>
    );
};

export default Student;