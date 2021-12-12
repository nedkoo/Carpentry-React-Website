const HomeArticle = () => {
    return (
        <article className="entry">
                    <div className="entry-media">
                        <img src="https://images.unsplash.com/photo-1517036723957-e2891b1b32ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29vZCUyMHRveXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                             alt="wood carving"/>
                    </div>
                    <div className="entry-content">
                        <h3 className="entry-title">
                            <a href="/some/valid/uri">Welcome to Wooden Toys</a>
                        </h3>
                        <p className="entry-category">
                            <a href="/some/valid/uri">Branding design</a>
                        </p>
                        <p>Lots of play. Lots of style.</p>
                        <p>Step into the world of classic as well as trendy wooden toy brands. Every single product is
                            magical.</p>
                        <p>Sustainability is important to us - for the future of our children.</p>
                    </div>
                </article>
    );
};


export default HomeArticle;