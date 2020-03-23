import React from 'react';
import 'bulma/css/bulma.min.css';
import { Router, Link } from '@reach/router';
import Main from './components/Main';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container" >
            <Link to="/"><a style={{textDecoration:"underline"}} className="title">Pet Shelter</a></Link>
            <h2 className="subtitle">
              These pets are looking for a good home!
            </h2>
          </div>
        </div>
      </section>
      <Router>
        <Main path="/"/>
        <NewPet path="/new" />
        <EditPet path="/edit/:_id" />
        <PetInfo path="/info/:_id" />
      </Router>
    </div>
  );
}

export default App;
