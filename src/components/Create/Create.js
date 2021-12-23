import { useNavigate } from 'react-router-dom';
import * as carpentryService from '../../services/carpentryService';
import { useAuthContext } from '../../contexts/AuthContex';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

import './Create.css'

const Create = () => {

    const { user } = useAuthContext();
    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();
    const onCarpentryCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name').trim();
        let description = formData.get('description').trim();
        let price = formData.get('price').trim();
        let imageUrl = formData.get('imageUrl').trim();
        let category = formData.get('category').trim();

        carpentryService.create({
            name,
            description,
            price,
            imageUrl,
            category,
        }, user.accessToken)
            .then(result => {
                console.log(result)
                navigate('/');
                addNotification('You create item successfully', types.info);
            })
            .catch (err => {
                console.log(err)
                addNotification('You can not create this item', types.error);
             });
    }

    const nameChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 3) {
            addNotification('Your name sould be at least 3 characters!', types.error);
        }
        if (currentName.length > 10) {
            addNotification('Your name sould be max 20 characters!', types.error)
        }
    };

    const descriptionHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 3) {
            addNotification('Your description sould be at least 3 characters!', types.error);
        }
        if (currentName.length > 80) {
            addNotification('Your name sould be max 80 characters!', types.error)
        }
    };

    const imgHandler = (e) => {
        let currentName = e.target.value;
        const regex = /^https?/mg;
        const isValid = currentName.match(regex);
        if (isValid == null) {
            addNotification('Image must be valid URL!', types.error);
        }
    };

    const priceHandler = (e) => {
        let currentName = e.target.value;
        if (!currentName) {
            addNotification('Price is required!', types.error);
        }
        if (Number(currentName) < 0) {
            addNotification('Price should be positive', types.error)
        }
    };

    
    return (
<form className="create" onSubmit={onCarpentryCreate} method="POST">
                    <fieldset>
                        <legend>Create Form</legend>
                        <p>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Some art" onChange={nameChangeHandler} />
                        </p>
                        
                        <p>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" cols="50"
                                      rows="10" onChange={descriptionHandler}/>
                        </p>

                        <p>
                            <label htmlFor="image">Image</label>
                            <input type="text" name="imageUrl" id="image" placeholder='imageUrl' onChange={imgHandler} />
                        </p>

                        <p>
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" id="price" onChange={priceHandler} />
                        </p>
                        <p>
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category">
                                <option value="toy">Please select .....</option>
                                <option value="toy">Toys</option>
                                <option value="art">Art</option>
                                <option value="furniture">Furniture</option>
                            </select>
                        </p>
                        <p>
                          <input type="submit" value="Save it!"/>
                        </p>
                    </fieldset>
                </form>
    );
};


export default Create;