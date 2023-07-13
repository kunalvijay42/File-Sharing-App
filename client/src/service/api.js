import axios from 'axios';

const API_URI = 'http://localhost:8000';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`https://fileflow.onrender.com/upload`, data); //used to post data on backend, it is asynchronous function which allows you to wait for the response from the HTTP request without blocking the execution of the function. 
        // console.log(response);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}