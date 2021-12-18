import {request}  from './request'

function getOptions(method = 'get', body) {

    const options = {
        headers: {},
        method
    };

    if (method != 'get') {

        const token = getToken();

        if (token) {
            options.headers['X-Authorization'] = token;
        }
        
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(body);
    }
    return options;
}

function getToken() {
    try {
        let userItem = localStorage.getItem('user');

        if (!userItem) {
            throw { message: 'You must be authenticated' };
        }

        let user = JSON.parse(userItem);

        return user.accessToken;
    } catch (err) {
        console.log(err);
    }
}

export async function get(url) {
    return await request(url, getOptions());
}

export async function post(url, data) {
    return await request(url, getOptions('post', data));
}



export async function put(url, data) {
    return await request(url, getOptions('put', data));
}

export async function del(url) {
    return await request(url, getOptions('delete'));
}