import axios from "axios";
 
const REST_API_BASE_URL = 'http://localhost:8080/programmers';

export const listProgrammers = () => axios.get(REST_API_BASE_URL);


export const createProgrammer = (programmer) => axios.post(REST_API_BASE_URL, programmer);

export const getProgrammer= (programmerId) => axios.get(REST_API_BASE_URL + '/' + programmerId);

export const updateProgrammer = (programmerId, programmer) => axios.put(REST_API_BASE_URL + '/' + programmerId, programmer);
// export const updateProgrammer = (programmerId, programmer) => { 
    // console.log("put method execution")
    // axios.put(REST_API_BASE_URL, programmer);
// }

export const deleteProgrammer = (programmerId) => axios.delete(REST_API_BASE_URL + '/' + programmerId);

