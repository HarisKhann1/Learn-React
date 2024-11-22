import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext';

function Login(props) {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div>
            <h2>Login</h2>
            {/* Input for username */}
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter your name' />
            {/* Input for userpassword */}
            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;
