import './Register.css'


const Register = () => {

    const onRegisterSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email').trim();
        const name = formData.get('name').trim();
        const password = formData.get('password').trim();
        const repassword = formData.get('repassword').trim();

        console.log(email);
        console.log(name);
        console.log(password);
        console.log(repassword);
    }

    const nameHandler = (event) => {
        const name = event.target.value;
        console.log(name);
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
                <input type="text" name="name" id="name" placeholder="Nedko Yordanov"/>
                <label htmlFor="name"><span>Name</span></label>
            </p>
            <p className="field-icon">
                <input type="password" name="password" id="password"/>
                <label htmlFor="password"><span>Password</span></label>
            </p>
            <p className="field-icon">
                <input type="repassword" name="repassword" id="repassword"/>
                <label htmlFor="repassword"><span>Repass</span></label>
            </p>
            <p>
                <input className="field-icon" type="submit" value="Send it!"/>
            </p>
        </fieldset>
    </form>
    );
};


export default Register;