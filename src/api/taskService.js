import axios from 'axios';

const API_URL = 'https://localhost:44311/api/Task';

export const getTasks = async () =>{
    return await axios.get(API_URL);
}

export const getTask = async (id) =>{
    return await  axios.get(`${API_URL}/${id}`);
}

export const createTask =  async (data) =>{
    return await axios.post(API_URL, data);
}

export const updateTask = async (id, data) =>{
    return await axios.put(`${API_URL}/${id}`, data);
}

export const deleteTask = async (id) =>{
    return await axios.delete(`${API_URL}/${id}`);
}