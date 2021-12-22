import './Footer.css'

const Footer = () => {
    return (
<footer className="site-footer">
            <div className="site-wrapper">
                <div className="info">
                    <p>A sleek, modern website.</p>
                    <p>&copy; 2021 Untitled. All rights reserved.</p>
                </div>
    
                <ul className="social">
                    <li><a href="#top"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#top"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#top"><i className="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
        </footer>        
    );
};


export default Footer;