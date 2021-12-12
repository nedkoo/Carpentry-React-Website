const Media = () => {
    return (
        <section className="site-media"
                 style={{ 
                   backgroundImage: "url("+"https://images.unsplash.com/photo-1611021061271-d13576f6bc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"+")" 
                   }}>
            
            <div className="site-wrapper">
                <h2>A modern website</h2>
                <p>Perfects things</p>
                <ul className="social">
                    <li><a href="#top"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#top"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#top"><i className="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
        </section>
    );
};


export default Media;