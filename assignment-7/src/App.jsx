import React, { Suspense } from 'react';
import Navbar from './Components/Component/Navbar/Navbar';
import ProgressBar from './Components/Component/ProgressBar/ProgressBar';
import Card from './Components/Component/Cards/Card';


const fetchCustomer = async () => {
  const res = await fetch("/Customers.json")
  return res.json();
}

const customerPromise = fetchCustomer();

const App = () => {
  return (


    <>
      <Navbar></Navbar>
      <ProgressBar></ProgressBar>

      <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
        <Card customerPromise={customerPromise}></Card>
      </Suspense>
      
    </>

    
  );
};

export default App;