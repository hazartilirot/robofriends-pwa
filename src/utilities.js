import axios from 'axios';

export const fetchRobotsList = () => {
    return axios('https://jsonplaceholder.typicode.com/users')
};