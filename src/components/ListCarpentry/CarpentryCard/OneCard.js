import { Link} from 'react-router-dom';

const OneCard = ({carpentry}) => {
    return (
        <div className="card">
            <header className="card-img">
                <img src={carpentry.imageUrl} alt="card" />
            </header>
            <section className="content">
                <p>{carpentry.name}</p>
                <h4>{carpentry.price} $</h4>
            </section>
            <footer className="card-footer">
                <Link to={`/details/${carpentry._id}`}>More interesting things</Link>
            </footer>
        </div>
    );
};


export default OneCard;