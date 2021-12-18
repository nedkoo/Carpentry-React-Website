export async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok === false) {
            const error = await response.json();

            throw new Error(error.message)
        }
        try {
            return await response.json();
        } catch (err) {

            return response;
        }

    } catch (error) {


        alert(error.message);

        throw error;
    }
}