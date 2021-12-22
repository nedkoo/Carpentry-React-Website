import { useState, useEffect, React } from 'react';
import { useAuthContext } from '../../contexts/AuthContex';

import * as carpentryService from '../../services/carpentryService';

import OneItem from './OneItem/OneItem';

import './Profile.css'

const Profile = () => {

    const { user } = useAuthContext();
    const [carpentries, setCarpentries] = useState([]);
       
    useEffect(() => {
        carpentryService.getAllByOwner(user._id)
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
                            {carpentries.map(x => <OneItem key={x._id} carpentry={x} />)}
                        </>
                    )
                    : <h2>No Items in database!</h2>
                }
               
            </div>
        </div>


    );
}

export default Profile;