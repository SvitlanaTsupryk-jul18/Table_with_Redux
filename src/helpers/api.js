const BASE_URL = 'http://dev.frevend.com/json/users.json';
/// for allowed access from CORS
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

export const getUsers = async () => {
    const response = await fetch(proxyUrl + BASE_URL);
    const data = await response.json();
    return data.users;
};