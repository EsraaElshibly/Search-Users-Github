import React from "react";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    
});

export const apiKey = '6614dee7bd34ca2508d77bb0886d4ab2' ;

export default axiosInstance 