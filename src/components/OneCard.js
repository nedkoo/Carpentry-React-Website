const OneCard = () => {
    return (
        <div className="card">
            <header className="card-img">
                <img src="/images/Image1.jpg" alt="card" />
            </header>
            <section className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                    consequuntur possimus quo enim eveniet, deserunt ducimus
                    doloremque laudantium iure, ut inventore eaque fugit ex porro
                    totam perspiciatis molestiae corporis. Odio!</p>
                <h4>200 $</h4>
            </section>
            <footer className="card-footer">
                <a href="/some/valid/uri">More interesting things about the thing</a>
            </footer>
        </div>
    );
};


export default OneCard;