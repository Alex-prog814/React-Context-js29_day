import React, { useContext, useState } from 'react';
import { usersContext } from '../../usersContext';
// npx json-server -w db.json -p 8000
const AddForm = () => {
  const { createUser } = useContext(usersContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  function registerUser() {
    let newUser = {
      name, 
      email, 
      age
    };
    for(let key in newUser) {
      if(!newUser[key]) {
        alert('Net');
        return;
      };
    };
    createUser(newUser);
    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <div>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

      <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

      <input type="text" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />

      <button onClick={registerUser}>Register</button>
    </div>
  )
}

export default AddForm