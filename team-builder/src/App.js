import React, { useState } from 'react';
import Team from './components/Team';
import TeamForm from './components/TeamForm';

import './App.css';

function App() {


const [team, setTeam] = useState([
  {
    id: 1, 
    name: "Person",
    email: "teammember@team.com",
    role: "awesome person"
  }
]);


const addNewMember = member => {
  const newMember = {
    id: Date.now(),
    name: member.name, 
    email: member.email, 
    role: member.role
  };
  setTeam([...team, newMember]);
}



  return (
    <div className="App">
        <h1>Our Team</h1>
        
        <Team team={team}/>
        <TeamForm addNewMember={addNewMember} />
  
    </div>
  );
}

export default App;
