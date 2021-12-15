const Header = () => {
    return (
        <header className="site-header">
            <div className="site-wrapper">
                <h1 className="site-title">
                    <a href="/homepage">Personal</a>
                </h1>
                <nav className="site-nav">
                    <ul>
                        <li className="current-page"><a href="/homepage">Projects</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/logout">Logout</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


export default Header;