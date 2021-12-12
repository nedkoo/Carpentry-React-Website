import {post}  from '../services/helpService'

const baseUrl = 'http://localhost:3030';

export const login = async(email,password) => {
    const result = await post(`${baseUrl}/users/login`, {email,password});
    return result;
}