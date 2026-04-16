//import config from 'config';
import { fetchWrapper } from '../_helpers';

//const baseUrl = `${config.apiUrl}/user`;

const baseUrl = 'http://localhost:8080/api/user';

export const userService = {
    getBOList,
    getBOById,
    create,
    update,
    delete: _delete
};

function getBOList() {
    return fetchWrapper.get(baseUrl);
}

function getBOById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}

