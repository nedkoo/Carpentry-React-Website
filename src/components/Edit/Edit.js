import { useParams,useNavigate } from 'react-router-dom';
import useCarpentryState from '../../hooks/useCarpentryState';
import * as carpentryService from '../../services/carpentryService';



const categories = [
    { value: 'toy', text: 'Toys' },
    { value: 'art', text: 'Art' },
    { value: 'furniture', text: 'Furniture' },
]

const Edit = () => {

    const navigate = useNavigate();

    const { carpentryId } = useParams();
    const [carpentry] = useCarpentryState(carpentryId);

    const carpentryEditSubmit = (e) => {
        e.preventDefault();

        let carpentryData = Object.fromEntries(new FormData(e.currentTarget))

        carpentryService.update(carpentryId, carpentryData)
            .then(result => {
                navigate(`/details/${carpentry._id}`);
            })
            .catch(err => {
                console.log(err)
            });;
    }

    return (
        <form className="create" method="POST" onSubmit={carpentryEditSubmit}>
            <fieldset>
                <legend>Edit Form</legend>
                <p>
                    <label htmlFor="art name">Name</label>
                    <input type="text" name="art name" id="art name" placeholder="Some art" defaultValue={carpentry.name} />
                </p>

                <p>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="50" defaultValue={carpentry.description}
                        rows="10" />
                </p>

                <p>
                    <label htmlFor="image">Image</label>
                    <input type="text" name="imageUrl" id="image" placeholder='imageUrl' defaultValue={carpentry.imageUrl} />
                </p>

                <p>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" defaultValue={carpentry.price} />
                </p>
                <p>
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" value={carpentry.category}>
                        {categories.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
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