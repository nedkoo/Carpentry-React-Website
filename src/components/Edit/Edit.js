import { useParams } from 'react-router-dom';
import * as carpentryService from '../../services/carpentryService';


const category = [
    { value: 'toy', text: 'Toys' },
    { value: 'art', text: 'Art' },
    { value: 'furniture', text: 'Furniture' },
]

const Edit = () => {
    const { carpentryId } = useParams();

    const carpentryEditSubmit = (e) => {
        e.preventDefault();

        let carpentryData = Object.fromEntries(new FormData(e.currentTarget))

        carpentryService.update(carpentryId, carpentryData);
    }

    return (
        <form className="create" method="POST" onSubmit={carpentryEditSubmit}>
            <fieldset>
                <legend>Edit Form</legend>
                <p>
                    <label htmlFor="art name">Name</label>
                    <input type="text" name="art name" id="art name" placeholder="Some art" />
                </p>
                <p>
                    <label htmlFor="author">Author</label>
                    <input type="text" name="name" id="author" placeholder="Ivan Ivanov" />
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="50"
                        rows="10"></textarea>
                </p>

                <p>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" />
                </p>
                <p>
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category">
                        <option value="">Please select .....</option>
                        <option value="toy">Toys</option>
                        <option value="art">Art</option>
                        <option value="furniture">Furniture</option>
                    </select>
                </p>
                <p>
                    <input type="submit" value="Save it!" />
                </p>
            </fieldset>
        </form>
    );
};


export default Edit;