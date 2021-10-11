import httpClient from "./httpClient";

const END_POINT = '/api/user';

const users = {
    getUsers: () => httpClient.get(END_POINT + 's'),
    createUser: (user) => httpClient.post(END_POINT, user),
    editUser: (user, code) => httpClient.post(END_POINT + '/' + code, user),
    deleteUser: (code) => httpClient.get(END_POINT + '/' + code),
    login: (data) => httpClient.post('/api/login', data),
}
export {
    users
}