import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min';
import './App.css';
import { Button, Divider, Input } from 'antd';

export const UserRegistration = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Functions used by the screen components
  const doUserRegistration = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    try {
      // Since the signUp method returns a Promise, we need to call it using await
      const createdUser = await Parse.User.signUp(usernameValue, passwordValue);
      alert(
        `Success! User ${createdUser.getUsername()} was successfully created!`
      );
      return true;
    } catch (error) {
      // signUp can fail if any parameter is blank or failed an uniqueness check on the server
      alert(`Error! ${error}`);
      return false;
    }
  };

  return (
    <div>
      <div className="header">
        <img
          className="header_logo"
          alt="Back4App Logo"
          src={
            'https://blog.back4app.com/wp-content/uploads/2019/05/back4app-white-logo-500px.png'
          }
        />
        <p className="header_text_bold">{'React on Back4App'}</p>
        <p className="header_text">{'User Registration'}</p>
      </div>
      <div className="container">
        <h2 className="heading">{'User Registration'}</h2>
        <Divider />
        <div className="form_wrapper">
          <Input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            size="large"
            className="form_input"
          />
          <Input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            size="large"
            type="password"
            className="form_input"
          />
        </div>
        <div className="form_buttons">
          <Button
            onClick={() => doUserRegistration()}
            type="primary"
            className="form_button"
            color={'#208AEC'}
            size="large"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};
