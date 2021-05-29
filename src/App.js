import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Birthday from './birhdaySection/birthdayList';
import Tours from './tours/MainTours';
import Reviews from './reviews/Reviews';


function App() {
  return (
    <div>
      <Router>
        <div className="section-links">
          <Link className='links' to='/'>Reviews</Link>
          <Link className='links' to='/birthday'>Birthdays list</Link>
          <Link className='links' to='/tours'>Tours</Link>
        </div>

        <Route exact path= '/' render={() => {
          return <Reviews />
        }}></Route>


        <Route path='/tours' render={()=> {
          return <Tours />
        }}></Route>

        <Route path = '/birthday' render={() => {
          return <Birthday />
        }}></Route>

      </Router>

    </div>
  );
}

export default App;
