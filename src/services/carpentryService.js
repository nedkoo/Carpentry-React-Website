import {get, post, put, del}  from './helpCarpentryService'

const baseUrl = 'http://localhost:3030/data';


export const create = async(data) => {
    const result = await post(`${baseUrl}/carpentry`, data);
    console.log(result);
    return result;
}

export const update = async(carpentryId, carpentryData) => {
    const result = await put(`${baseUrl}/carpentry/${carpentryId}`, carpentryData);
    console.log(result);
    return result;
}

export const getAllByCategory = async(category) => {
    let query = encodeURIComponent(`category IN ("${category}")`);
    const result = await get(`${baseUrl}/carpentry?where=${query}`);
    console.log(result);
    return result;
}


export const getOne = async(carpentryId) => {
    const result = await get(`${baseUrl}/carpentry/${carpentryId}`);
    console.log(result);
    return result;
}

export const deleteOne = async(carpentryId) => {
    const result = await del(`${baseUrl}/carpentry/${carpentryId}`);
    console.log(result);
    return result;
};
