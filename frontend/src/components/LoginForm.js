import React, { useState } from 'react';
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');



    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();//// it will prevent whole page to reload when this event is occured 
        try {
            const response = await axios.post("http://localhost:5000/api/login", { username, password });
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            window.location.href = '/home';

        } catch (error) {
            console.error("login error:", error.response.data.message);
            window.alert("invalid  username or password");
            // window.alert("invalid username or password");
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const customPrimaryColor = '#81bfda';
    const customSecondaryColor = '#ffffff';

    return (
        <div>
            <nav className="navbar bg-green pt-3 pb-2" style={{ backgroundColor: customPrimaryColor }} >
                <div className="container-fluid">
                    {/* <span class="navbar-brand mb-0 h1">Dune state University</span> */}
                    <a className="navbar-brand " href="#" style={{ color: customSecondaryColor }}>
                        <div>
                            <img src="/dune.jpg" alt="" width="60" height="40" className="d-inline-block align-text-top mb-2" />
                        </div>
                        Dune State University
                    </a>
                </div>
            </nav>

            <div className="container-fluid h-100 d-flex align-items-center justify-content-center pt-5 mt-5">
                <div className="card pt-4" style={{ width: '490px', height: '490px', boxShadow: "0 8px 10px 0 rgba(0, 0, 0, 0.1)" }}>
                    <div className="card-body">
                        <h2 className="card-title display-5 mb-4">Login</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group my-5 fs-5">
                                <label className='mb-2'>Username:</label>
                                <input type="text" className="form-control" value={username} onChange={handleUsernameChange} />
                            </div>
                           
                            <div className="form-group my-3 fs-5">
                                <label className='mb-2'>Password:</label>
                                <input type={showPassword ? 'text' : 'password'} className="form-control" value={password} onChange={handlePasswordChange} />
                                <input type="checkbox" onChange={handleTogglePassword} className='mt-4' /> Show Password
                            </div>
                           
                            <button type="submit" className="btn mt-3 fs-5 custom-btn">LOGIN</button>

                        </form>
                    </div>
                </div>
            </div>

        </div>



    );
};

export default LoginForm;