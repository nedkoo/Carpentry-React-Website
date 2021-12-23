import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import useCarpentryState from '../../hooks/useCarpentryState';
import { useAuthContext } from '../../contexts/AuthContex';


import * as carpentryService from '../../services/carpentryService';

import * as likeService from '../../services/likeService';

import './CardDetail.css'

const CardDetail = () => {
    const navigate = useNavigate();
    

    const { carpentryId } = useParams();
    const [carpentry, setCarpentry] = useCarpentryState(carpentryId);
    
    const { user } = useAuthContext();

    useEffect(() => {
        likeService.getCarpentryLikes(carpentryId)
            .then(likes => {
                setCarpentry(state => ({ ...state, likes }))
            })
            .catch(err=> {
                // console.log(err);
            })
    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();

        carpentryService.deleteOne(carpentryId)
            .then(() => {
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                console.log('Hello');
            });
    };


    const likeHandler = () => {
        if (user._id === carpentry._ownerId) {
            return;
        }

        if (carpentry.like) {
            if (carpentry.likes.includes(user._id)) {
                console.log(carpentry.likes)
                alert('You cannot like again')
                return;
            }
        }

        
        likeService.like(user._id, carpentryId)
            .then(() => {
                setCarpentry(state => ({ ...state, likes: [...state.likes, user._id] }));

                // addNotification('Successfuly liked a cat :)', types.success);
            });
    };

    const ownerButtons = (
        <>
            <Link className="button-details" to={`/edit/${carpentry._id}`}>Edit</Link>
            <a className="button-details" href="/#" onClick={deleteHandler}>Delete</a>
        </>
    );

    const userButtons = <button className={carpentry.likes?.includes(user._id)? 'button-details hidden' : "button-details"} onClick={likeHandler}>Like</button>;


    return (
        <section className="details">
            <div className="card-image">
                <img src={carpentry.imageUrl} alt="detail" />
            </div>
            <div className="card-content">
                <h2>
                    {carpentry.name}
                </h2>
                <p>
                    {carpentry.description}
                </p>
                <h2>
                    {carpentry.price} $
                </h2>
                <p className="liked">Likes {carpentry.likes?.length || 0}</p>
                <div className="details-buttons">
                    {user._id && (user._id === carpentry._ownerId
                        ? ownerButtons
                        : userButtons
                    )}
                </div>
            </div>
        </section>
    );
};


export default CardDetail;