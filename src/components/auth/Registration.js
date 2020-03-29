
import React, {useState} from 'react';
import axios from 'axios';

function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [registrationErrors, setRegistrationErrors] = useState('');


  function handleSubmit(event) {
    console.log('Form submited');
    event.preventDefault();
  }


  return (
    <div>
      <h1>Login</h1>
      <div>
      {email}
      {password}
      {password_confirmation}
      </div>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Mail"
          value={email}
          onChange={e => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(event.target.value)}
          required
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password confirmation"
          value={password_confirmation}
          onChange={e => setPassword_confirmation(event.target.value)}
          required
        />
      </form>
    </div>
  );
}

export default Registration;
