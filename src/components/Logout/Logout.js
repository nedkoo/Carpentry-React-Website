import {useNavigate} from 'react-router-dom';

import * as authService from '../../services/authService'

import { useAuthContext } from '../../contexts/AuthContex';

import './Logout.css'

const Logout = () => {
    const { user, logoutContex } = useAuthContext();

    // const navigate = useNavigate();

    const LogoutClickHandler = (event) => {
        event.preventDefault();
        
                
        authService.logout(user.accessToken)
            .then(() => { 
                logoutContex();
                // console.log(res)
                // navigate('/homepage')
            })
            .catch (err => {
                console.log(err.message)
             });
    }
    
    const CancelClickHandler = (event) => {
        event.preventDefault();
        // navigate('/homepage')
        
    }

    return (
        <section className="logout">
            <div className="card-content">
                <h3>
                    Are You Sure to Logout?
                </h3>
                <div className="logout-buttons">
                    <a className="logout-details" href="#" onClick={LogoutClickHandler}>Yes</a>
                    <a className="logout-details" href="#" onClick={CancelClickHandler}>Back</a>
                </div>
            </div>
        </section>
    );
};


export default Logout;