import './App.css';
import Card from './UI/Card';
import HomePage from './Users/HomePage';
import AddUsers from './Users/AddUsers';
import Tenet from './Tenet/Tenet';
import React, { useState } from "react";
import UserList from './Users/UserList';
import AboutUs from './Users/AboutUs';
import Slideshow from './Users/slideshow';

function App() {
  const [usersslist, setUserList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showTenet, setshowTenet] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);

  const handleLoginClick = () => {
    setShowForm(!showForm); // toggle the value of showForm state
  };

  const handleCloseForm = () => {
    setShowForm(false); // set showForm to false to close the form
  };

  const handleOnClick = () => {
    setshowTenet(!showTenet);
  };

  const handleAboutUsClick = () => {
    setShowAboutUs(!showAboutUs);
  };

  const handleClose = () => {
    setshowTenet(false);
  };

  return (
    <Card className="App">
      {showForm ? (
        <AddUsers onClose={handleCloseForm} />
      ) : (
        <button
          style={{ backgroundColor: "white", fontFamily: "-moz-initial" }}
          onClick={handleLoginClick}
        >
          Login Form
        </button>
      )}

      {showTenet ? (
        <Tenet onClose={handleClose} />
      ) : (
        <button
          style={{ backgroundColor: "white", fontFamily: "-moz-initial" }}
          onClick={handleOnClick}
        >
          LeaseHolder(If you want to rent your property)
        </button>
      )}

      {showAboutUs ? <AboutUs /> : <button style={{backgroundColor: 'white', fontFamily: '-moz-initial'}} onClick={handleAboutUsClick}>About Us</button>}
      <Slideshow></Slideshow>
      <HomePage></HomePage>
      <UserList users={[usersslist]}></UserList>
    </Card>
  );
}

export default App;