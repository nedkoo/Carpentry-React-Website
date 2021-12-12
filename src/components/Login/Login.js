import * as authService from '../../services/authService'

import './Login.css'

const Login = () => {

    const onLoginSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        

        console.log(email);
        console.log(password);

        authService.login(email, password)
            .then((res) => { 
                console.log(res)
            })
            .catch (err => {
                console.log(err)
             });
    }

    const nameHandler = (event) => {
        const name = event.target.value;
        console.log(name);
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
                <input type="password" name="password" id="password"/>
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