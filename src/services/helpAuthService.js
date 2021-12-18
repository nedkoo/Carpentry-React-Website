import {request}  from './request'

function getOptions(method = 'get', body) {

    const options = {
        headers: {},
        method
    };

    if (method != 'get') {
               
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(body);
    }
    return options;
}



export async function post(url, data) {
    return await request(url, getOptions('post', data));
}


