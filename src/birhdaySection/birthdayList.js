import React, { useState } from 'react';
import './birthday.css';

import Data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(Data);
  const [btnChange, setBtnChange] = useState(true);

  const clearList = () => {
    if(btnChange === true){
      setPeople([]);
      setBtnChange(false);

    }else{
      setPeople(Data)
    }
  }

  return (
    <main>
      <section className='container'>
        <h2>0 Birthdays today</h2>
        <List people={people}/>
        <button onClick={clearList}>Clear All</button>
      </section>
      
    </main>
  );
}

export default App;
 