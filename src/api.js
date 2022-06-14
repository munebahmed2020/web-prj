import axios from 'axios'

const url = "http://localhost:5000"


export const addForm = async (data) => {
    return await axios.post(`${url}/addForm`,data)
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