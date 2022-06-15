import axios from 'axios'

const url = "http://localhost:5000"


export const AddQuery = async (QueryData) => {
    return await axios.post(`${url}/AddQuery`,QueryData)
}

export const UpdateQuery = async (QueryData) => {
    return await axios.put(`${url}/UpdateQuery`,QueryData)
}
export const getForm = async (data) => {
    return await axios.get(`${url}/show5`)
}

export const addForm2 = async (data) => {
    return await axios.post(`${url}/addForm2`,data)
}
export const addForm3 = async (data) => {
    return await axios.post(`${url}/addForm3`,data)
}
export const addForm4 = async (data) => {
    return await axios.post(`${url}/addForm4`,data)
}