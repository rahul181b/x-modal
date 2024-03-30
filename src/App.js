import React, { useState } from "react";
import './App.css';

function App() {
  const [isShown, setIsShown] = useState(false);
  // const [userNameError, setUserNameError] = useState(false);

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
  });

  const handleOpenForm = () => {
    setIsShown(true);
  }
  const handleCloseModal = (event) => {
    if (event.target.className === 'modal') {
      setIsShown(false);
    }
  }
  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  }

  const handleSubmit = (e) => {

    // if (!userData.username.trim()) {
    //   alert("Please fill out this field");
    //   e.preventDefault();
    //   return;
    // }

    if (!userData.email.includes('@')) {
      alert("Invalid email.");
      e.preventDefault();
      return;
    }
    if (userData.phone.length !== 10) {
      alert("Invalid phone number.");
      e.preventDefault();
      return;
    }

    if (!userData.dob) {
      alert("Please fill out the date of birth field");
      e.preventDefault();
      return;
    }
    const dobDate = new Date(userData.dob);
    const today = new Date();

    if (dobDate > today) {
      alert("Invalid date of birth");
      e.preventDefault();
      return;
    }


  }




  return (
    <div >
      <div className="heading">
        <h1 >User Details Modal</h1>
        <button className="heading-button" onClick={handleOpenForm}>Open Form</button>
      </div>

      {isShown &&
        <div className="modal" onClick={handleCloseModal}>

          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h2>Fill Details</h2>

              <div className="form-data">
                <label >Username:</label>
                <input
                  type="text"
                  value={userData.username}
                  name="username"
                  id="username"
                  onChange={handleChange}
                />


              </div>
              <div className="form-data">
                <label>Email Address:</label>
                <input
                  type="text"
                  id="email"
                  value={userData.email}
                  name="email"
                  onChange={handleChange}
                />

              </div>
              <div className="form-data">
                <label >Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  value={userData.phone}
                  name="phone"
                  onChange={handleChange}
                />

              </div>
              <div className="form-data">
                <label>Date Of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={userData.dob}
                  onChange={handleChange}
                />
              </div>
              <div >
                <button className="submit-button" >Submit</button>
              </div>

            </form>
          </div>

        </div>}

    </div>
  );
}

export default App;
