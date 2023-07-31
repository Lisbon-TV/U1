import { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./Functions/LocalStorage";

const KEY = "persons";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [persons, setPersons] = useState(null);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const createPersonInfo = (_) => {
    const person = {
      name,
      lastName,
      money: 0,
    };
    store(KEY, person);
    setLastName("");
    setName("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4">
          <div className="card mt-4">
            <h3 className="card-header">Add New Client</h3>
            <div className="card-body">
              <fieldset>
                <legend>First Name</legend>
                <div>
                  <input type="text" value={name} onChange={handleChangeName} />
                </div>
                <legend>Last Name</legend>
                <div>
                  <input
                    type="text"
                    value={lastName}
                    onChange={handleChangeLastName}
                  />
                </div>
                <button onClick={createPersonInfo}>Add</button>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="col-8 mt-4">Column</div>
      </div>
    </div>
  );
}
export default App;
