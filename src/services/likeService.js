import {get, post}  from './helpCarpentryService'

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, carpentryId) => post(`${baseUrl}/likes`, {userId, carpentryId});
export const getCarpentryLikes = (carpentryId) => {
    const query = encodeURIComponent(`carpentryId="${carpentryId}"`);

    return get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};