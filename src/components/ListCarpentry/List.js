import { useLocation } from 'react-router-dom';
import { useState, useEffect, React } from 'react';

import * as carpentryService from '../../services/carpentryService';

import OneCard from './CarpentryCard/OneCard';
// import './Dashboard.css';

const List = () => {
    const [carpentries, setCarpentries] = useState([]);

    const search = useLocation().search;
    const name = new URLSearchParams(search).get('category')
    console.log(name)
    // const { carpentryCatalog } = useParams();


    useEffect(() => {
        carpentryService.getAllByCategory(name)
            .then(result => {
                setCarpentries(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className="cards-layout masonry">
            <div className="card-masonry">
                {carpentries.length > 0
                    ? (
                        <>
                            {carpentries.map(x => <OneCard key={x._id} carpentry={x} />)}
                        </>
                    )
                    : <h2>No {name} in database!</h2>
                }
               
            </div>
        </div>


    );
}


export default List;