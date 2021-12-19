import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContex';


const Header = () => {
    const { user } = useAuthContext();

    let publicNavigation = (
        <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </>

    );

    let userNavigation = (
        <>
            <li><Link to="/profile">{user.email}</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        </>

    );

    return (
        <header className="site-header">
            <div className="site-wrapper">
                <h1 className="site-title">
                    <Link to="/">Carpentry</Link>
                </h1>
                <nav className="site-nav">
                    <ul>
                        <li className="current-page"><Link to="/">Projects</Link></li>
                        {user.email
                            ? userNavigation
                            : publicNavigation
                        }
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


export default Header;