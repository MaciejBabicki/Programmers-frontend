import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/repos';

export const listRepositories = () => axios.get(REST_API_BASE_URL);

export const createRepository = (repository) => axios.post(REST_API_BASE_URL, repository);

