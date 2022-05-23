import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Planet from './components/Planet';
import People from './components/People';
import {Switch, Route} from "react-router-dom";
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function App() {
  const [select1, setSelect1] = useState();
  const [idInput, setIdInput] = useState();

  const history = useHistory();

  const submitHandler = (event) => {
    
    event.preventDefault();

    if(select1 === "/planet") {
      history.push("/planet/" + idInput);
    } else {
      history.push("/people/" + idInput);
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <form className="row g-3" onSubmit={submitHandler}>
          <div className="col-auto">
          <label htmlFor="select1">Search for:</label>
          <select className="form-select" htmlFor="select1" onChange={(event)=>setSelect1(event.target.value)}>
            <option defaultValue>Select an option...</option>
            <option value="/planet">Planet</option>
            <option value="/people">People</option>
          </select>
          </div>
          <div className="col-auto">
            <label htmlFor="idInput">ID:</label>
            <input type="number" className="form-control" htmlFor="idInput" placeholder="ID" onChange={(event)=>setIdInput(event.target.value)}/>
          </div>
          <div className='col-auto'>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>

        <Switch>
          <Route exact path="/planet/:id">
            <Planet/>
          </Route>

          <Route exact path="/people/:id">
            <People/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
