import {useState} from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState(''); //Creates new variable name 
    const [password, setPassword] = useState(''); //Creates new variable password
     async function register(ev) { //async function called register() that takes in an event object named ev as its only parameter.
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
        });
        if (response.status === 200) {
          alert('Registration succesful'); //If saved to mongodb
        } else {
          alert('Registration failed'); //If saving is unsuccesful
        }
      }
    return(
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
        <input type="text" 
        placeholder="username" 
        value={username} 
        onChange={ev => setUsername(ev.target.value)}/>
        <input type="password"
         placeholder="password"
         value={password}
         onChange={ev => setPassword(ev.target.value)}/>
        <button>Register</button>
    </form>
    );
}