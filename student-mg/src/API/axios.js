import axios from "axios";

 
 const service = axios.create({

    baseURL: 'http://localhost:4000',

    headers:{
        "content-type":"application/json"
    }
    })

    export default service;
