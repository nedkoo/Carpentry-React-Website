import './Register.css'

import * as authService from '../../services/authService'
import { useState } from 'react';

import { useAuthContext } from '../../contexts/AuthContex';
import {useNavigate} from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const { loginContex } = useAuthContext();

    const [errors, setErrors] = useState({name:false})

    const onRegisterSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email').trim();
        const name = formData.get('name').trim();
        const password = formData.get('password').trim();
        const repassword = formData.get('repassword').trim();

        if(password!==repassword){
            setErrors(state => ({...state, name: 'Password and Repassword don\'t match'}));
        }

        // console.log(email);
        // console.log(name);
        // console.log(password);
        // console.log(repassword);

        authService.register(email, name, password)
            .then((resAuth) => {
                loginContex(resAuth); 
                navigate('/')
                // console.log(res)
            })
            .catch (err => {
                console.log(err)
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
        <form className="register" onSubmit={onRegisterSubmit} method="POST">
        <fieldset>
            <legend>Register</legend>
            <p className="field-icon">
                <input type="email" name="email" id="email" placeholder="nedko@abv.bg" onBlur={nameHandler}/>
                <label htmlFor="email"><span>Email</span></label>
            </p>
            <p className="field-icon">
                <input type="text" name="name" id="name" placeholder="Nedko Yordanov" onBlur={nameHandler}/>
                <label htmlFor="name"><span>Name</span></label>
            </p>
            <p className="field-icon">
                <input type="password" name="password" id="password" onBlur={nameHandler}/>
                <label htmlFor="password"><span>Password</span></label>
            </p>
            <p className="field-icon">
                <input type="password" name="repassword" id="repassword" />
                <label htmlFor="repassword"><span>Repassword</span></label>
            </p>
            <p>
                <input className="field-icon" type="submit" value="Send it!"/>
            </p>
        </fieldset>
    </form>
    );
};


export default Register;