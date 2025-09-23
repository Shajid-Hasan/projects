import React, { Suspense } from 'react';
import Users from './assets/Components/Users';
import User from './assets/Components/User';
import Student from './assets/Components/Student';
import Event from './assets/Components/Event';
import Effect from './assets/Components/Effect';

const App = () => {

      const fetchUrl = 'https://fake-json-api.mock.beeceptor.com/users'
      const userPromise = fetch(fetchUrl).then((res) => {
        return res.json();
    })
    // console.log(userPromise)

  const person = {
    name: 'Shajid',
    age: 30,
    work: 'developer'
  };

  const anotherPerson = {
    name : 'Sanjana',
    id: 153,
    designation: 'teacher'
  }

  const student = {
    name: 'Alaina',
    age: 15,
    isRegular: true

  };


  return (
    <>
      <h2>Hello React World</h2>
      <Users user={person} person={anotherPerson}></Users>
      <Student student={student}></Student>
      <User></User>
      
      <Suspense fallback={'Loading'}>
              <Event userPromise={userPromise}></Event>
      </Suspense>

      <Effect></Effect>
    </>
  );
};

export default App;