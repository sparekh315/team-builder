import React from 'react';



const Team = (props) => {

  


    return (
        <div>
        <h2>Team List</h2>
        {props.team.map(member => (
            <div>
            <h3>{member.name}</h3>
            <p>Email:{member.email}</p>
            <p>Role: {member.role}</p>
            </div>
        ))}
        </div>
    );
};


export default Team;