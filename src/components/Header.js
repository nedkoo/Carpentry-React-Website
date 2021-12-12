const Header = () => {
    return (
        <header className="site-header">
            <div className="site-wrapper">
                <h1 className="site-title">
                    <a href="/home">Personal</a>
                </h1>
                <nav className="site-nav">
                    <ul>
                        <li className="current-page"><a href="/home">Projects</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


export default Header;