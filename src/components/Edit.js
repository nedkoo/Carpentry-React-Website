const Edit = () => {
    return (
<form className="create" action="#" method="get">
                    <fieldset>
                        <legend>Edit Form</legend>
                        <p>
                            <label htmlFor="art name">Name</label>
                            <input type="text" name="art name" id="art name" placeholder="Some art"/>
                        </p>
                        <p>
                            <label htmlFor="author">Author</label>
                            <input type="text" name="name" id="author" placeholder="Ivan Ivanov"/>
                        </p>
                        <p>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" cols="50"
                                      rows="10"></textarea>
                        </p>
    
                        <p>
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" id="price"/>
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
                          <input type="submit" value="Save it!"/>
                        </p>
                    </fieldset>
                </form>
    );
};


export default Edit;