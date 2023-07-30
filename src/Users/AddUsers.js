import React, { useState } from 'react';
import './AddUsers.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUsers = (props) => {
  const [enteredUserName, setUserName] = useState('');
  const [enteredLastName, setLastName] = useState('');

  const AddUserHandler = async (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0) {
      return;
    }
    const userData = {
      firstname: enteredUserName,
      lastname: enteredLastName,
      age: parseInt(event.target.elements.age.value),
      mobile: event.target.elements.mobile.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };
    const response = await fetch('/api/adduser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      setLastName('');
      setUserName('');
      props.onClose();
    } else {
      console.log('Error adding user');
    }
  };

  const firstnamehandler = (event) => {
    setUserName(event.target.value);
  };
  const lastnamehandler = (event) => {
    setLastName(event.target.value);
  };
    
    return (
        <Card>
        <form onSubmit={AddUserHandler}>
            <caption style={{textAlign:'center'}}>User Information</caption>
            
            <label htmlFor="firstname">Firstname</label>
            <input type="text" id="firstname" onChange={firstnamehandler} value={enteredUserName} ></input><br/>

            <label htmlFor="lastname">Lastname</label>
            <input type="text" id="lastname" onChange={lastnamehandler} value={enteredLastName} ></input><br/>

            <label htmlFor="age">Age:</label>
            <input type="number" id="age"></input>
<br/>
            <label htmlFor="mobile">Mobile Number:</label>
            <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" required></input><br/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required></input><br/>
            <label htmlFor="preferredLocation">Preferred location:</label>
            <textarea id="preferredLocation" name="preferredLocation"></textarea> 
            <legend>Gender:</legend>
                <input type="radio" id="male" name="gender" value="male" required />
                <label htmlFor="male">Male</label>

                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Female</label>

                <input type="radio" id="other" name="gender" value="other" />
                <label htmlFor="other">Other</label>

            <Button type="submit">Add User</Button> 
            
        </form>
        </Card>
    );
};

export default AddUsers;