import {postUser}  from '../services/helpService'

const baseUrl = 'http://localhost:3030/data';


export const create = async(data, token) => {
    const result = await postUser(`${baseUrl}/carpentry`, data, token);
    console.log(result)
    return result;
}