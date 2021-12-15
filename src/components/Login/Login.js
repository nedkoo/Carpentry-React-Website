import {useNavigate} from 'react-router-dom';

import * as authService from '../../services/authService'
import { useState } from 'react';

import { useAuthContext } from '../../contexts/AuthContex';

import './Login.css'

const Login = () => {
    const { loginContex } = useAuthContext();

    // const navigate = useNavigate();
    const [errors, setErrors] = useState({name:false})

    const onLoginSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        
        authService.login(email, password)
            .then((resAuth) => { 
                loginContex(resAuth);
                // console.log(res)
                // navigate('/homepage')
            })
            .catch (err => {
                setErrors(state => ({...state, name: `${err.message}`}));
                console.log(err.message)
                
             });
    }

    const nameHandler = (event) => {
        const name = event.target.value;

        if (!name) {
            setErrors(state => ({...state, name: 'It\'s required'}));
        } else {
            setErrors(state => ({...state, name: false}));
        }
    }

    return (
        <form className="login" onSubmit={onLoginSubmit} method="POST">
        <fieldset>
            <legend>Login</legend>
            <p className="field-icon">
                <input type="email" name="email" id="email" placeholder="nedko@abv.bg" onBlur={nameHandler}/>
                <label htmlFor="email"><span>Email</span></label>
            </p>
            <p className="field-icon">
                <input type="password" name="password" id="password" onBlur={nameHandler}/>
                <label htmlFor="password"><span>Password</span></label>
            </p>
            <p>
                <input className="field-icon" type="submit" value="Login!"/>
            </p>
        </fieldset>
    </form>
    );
};


export default Login;