import axios from 'axios';

const instance = axios.create({
    baseURL: "https://shrouded-ocean-24719.herokuapp.com/v2/"
})

export default instance;