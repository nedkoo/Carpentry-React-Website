import { Link } from 'react-router-dom';

const OneItem = ({ carpentry }) => {
    return (
        <div className="card">
            <header className="card-img">
                <img src={carpentry.imageUrl} alt="card" />
            </header>
            <footer className="card-footer">
                <Link to={`/details/${carpentry._id}`}>Details</Link>
            </footer>
        </div>
    );
};


export default OneItem;