const baseAPI = "http://localhost:3000";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};


const Method = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
};


export const apiRequest = (endpoint, method, data = {body: null, token: null}) => {
    const url = baseAPI + endpoint;
    let options = {};

    if (method === 'GET') {
        options = {method: method, headers: headers}
    }

    if (method === 'POST') {
        console.log(data.body);
        options = {method: method, headers: headers, body: JSON.stringify(data.body)}
    }

    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch(url, options);
            let json = await response.json();
            resolve(json);
        } catch(e) {
            reject(e);
        }
    });
    
}