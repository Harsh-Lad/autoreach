import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // Replace with your API base URL
    // timeout: 10000, // Request timeout in milliseconds
    headers: {
        'Content-Type': 'application/json',
        // Add any other custom headers here
    },
});

export default axiosInstance;  