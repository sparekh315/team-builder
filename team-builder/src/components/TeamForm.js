import React, {useState} from 'react';





const TeamForm = (props) => {

 const [member, setMember] = useState({
     name: '',
     email: '',
     role: ''
 });


 const handleChanges = e => {
     setMember({...member, [e.target.name]: e.target.value});
 };


 const handleSubmit = e => {
     e.preventDefault();
     props.addNewMember(member);
     setMember({name:'', email:'', role:''});
 };




    return (
        <div>
        <h2>Add a New Team Member Here:</h2>
        <form onSubmit={handleSubmit}>
        
        <label htmlFor='name'>New Member Name:</label>
        <input
        id='name'
        type='text'
        name='name'
        onChange={handleChanges}
        placeholder="Name"
        value={member.name}
        required
        />
        <label htmlFor='email'>Email:</label>
        <input
        id='email'
        type='text'
        name='email'
        onChange={handleChanges}
        placeholder='Email'
        value={member.email}
        required
        />
        <label htmlFor='role'>Role:</label>
        <input 
        id='role'
        type='text'
        name='role'
        onChange={handleChanges}
        placeholder='Role'
        value={member.role}
        required
        />
        <button type="submit">Add Member to Team</button>
        </form>
        </div>
     
    );
};



export default TeamForm;