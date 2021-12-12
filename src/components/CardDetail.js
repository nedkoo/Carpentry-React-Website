const CardDetail = () => {
    return (
        <section className="details">
            <div className="card-image">
                <img src="./images/picture1.jpg" alt="detail" />
            </div>
            <div className="card-content">
                <h3>
                    Card Title
                </h3>
                <p>
                    Short description of what this is all about - crafted to make
                    people interested
                </p>
                <p className="liked">Liked 1</p>
                <div className="details-buttons">
                    <a className="button-details" href="/delete">Delete</a>
                    <a className="button-details" href="/edit">Edit</a>
                    <a className="button-details" href="/like">Like</a>
                </div>
            </div>
        </section>
    );
};


export default CardDetail;