import qs from 'qs';
import 'isomorphic-fetch';
import API_ENDPOINT from 'config/api';

/**
 * The request helper is used to make sure every API call acts the same by always checking authorization and errors
 * @param {String} path The URL that we should make an fetch request to
 * @param {Object} options An object containing all options for the fetch call to the given path
 * @param {Bool} handle401 Should the request handle a 401 response or should it let it pass
 * @return {*} Either a rejected promise or a JSON object
 */
const request = ({ path, options }) =>
    new Promise((resolve, reject) => {
        fetch(path, options)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(response.json());
            })
            .then((json) => {
                if (__DEV__) console.info('API call succeeded:', json);
                resolve(json);
            })
            .catch((json) => {
                json.then((error) => {
                    if (__DEV__) console.error('API call failed:', error);
                    reject(error);
                });
            });
    });

/**
 * The generateOptions helper is used to make sure every API call is build with the same parameters.
 * The same headers, a certain method (GET, POST, etc) and a body
 * @param {String} method either GET, DELETE, POST, PATCH or PUT
 * @param {String} path The URL that we should make an fetch request to
 * @param {Boolean} false] Should we send a request with our JWT token in the authorization header
 * @param {Object} query An object containing all the options that we want to add to the paths query parameter
 * @param {Object} body An object containing all parameters that we want to send along in the body of the request
 * @return {Object}
 */
const generateOptions = ({
    method, path, query, body,
}) => ({
    path: `${API_ENDPOINT}${path}?api_key=aca525eaa13471a07313b00e90bcb8b3&format=json${query ? '&' : ''}${qs.stringify(query || {})}`,
    options: {
        headers: {
            'Content-Type': 'application/json',
        },
        method,
        ...(body ? { body: JSON.stringify(body) } : {}),
    },
});

export const get = ({ path, query }) =>
    request(generateOptions({
        method: 'GET',
        path,
        query,
    }));

export const del = ({ path, query }) =>
    request(generateOptions({
        method: 'DELETE',
        path,
        query,
    }));

export const post = ({ path, body }) =>
    request(generateOptions({
        method: 'POST',
        path,
        body,
    }));

export const put = ({ path, body }) =>
    request(generateOptions({
        method: 'PUT',
        path,
        body,
    }));

export const patch = ({ path, body }) =>
    request(generateOptions({
        method: 'PATCH',
        path,
        body,
    }));
