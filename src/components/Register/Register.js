import './Register.css'

import * as authService from '../../services/authService'

import { useAuthContext } from '../../contexts/AuthContex';
import {useNavigate} from 'react-router-dom';
import { useNotificationContext, types } from '../../contexts/NotificationContext';


const Register = () => {
    const navigate = useNavigate();
    const { loginContex } = useAuthContext();
    const { addNotification } = useNotificationContext();
    

    const onRegisterSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email').trim();
        const name = formData.get('name').trim();
        const password = formData.get('password').trim();
        const repassword = formData.get('repassword').trim();

        if(password!==repassword){
            
            addNotification('Password and Repassword don\'t match', types.error);
        }

        // console.log(email);
        // console.log(name);
        // console.log(password);
        // console.log(repassword);

        authService.register(email, name, password)
            .then((resAuth) => {
                loginContex(resAuth); 
                navigate('/')
                addNotification('Successfull register', types.info);
                // console.log(res)
            })
            .catch (err => {
                if (err.message==='Missing fields') {
                    addNotification('A user with the same email or name already exists', types.error); 
                } else {
                    addNotification('A user with the same email or name already exists', types.error);
                }
                
             });


    }

    const nameHandler = (event) => {
        const name = event.target.value;
        if (!name) {
            addNotification('It\'s required', types.info);
            
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