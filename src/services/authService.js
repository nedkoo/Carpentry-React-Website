import {post}  from './helpAuthService'

const baseUrl = 'http://localhost:3030';

export const login = async(email, password) => {
    const result = await post(`${baseUrl}/users/login`, {email,password});
    return result;
   
}


export const register = async(email, name, password) => {
    const result = await post(`${baseUrl}/users/register`, {email, name, password});
    return result;
}


export const logout = async (token) => {

    await fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': token,
        }
    });
    
}

export const getUser = () => {
    let emailUser = localStorage.getItem('email');

    return emailUser;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};