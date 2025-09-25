import React, { Suspense } from 'react';
import Bottles from './Component/Bottles/Bottles';

const App = () => {

  const bottlesPromise = fetch('./Bottle.json')
  .then(res => res.json())


  return (
    <div>
        <h1>Buy Awesome Water Bottle</h1>
        <Suspense fallback={<h3>Bottles are Loading...</h3>}>
          <Bottles bottlesPromise={bottlesPromise}></Bottles>
        </Suspense>
    </div>
  );
};

export default App;