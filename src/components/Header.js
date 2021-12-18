


const Header = () => {
    return (
        <header className="site-header">
            <div className="site-wrapper">
                <h1 className="site-title">
                    <a href="/">Personal</a>
                </h1>
                <nav className="site-nav">
                    <ul>
                        <li className="current-page"><a href="/">Projects</a></li>
                        <li><a href="/about">Create</a></li>
                        <li><a href="/logout">Logout</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


export default Header;