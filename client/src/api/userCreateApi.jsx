import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})

export const createUser = async (userData) => {
    try {
        const response = await api.post('/cadastrar', userData)
        console.log(response.data)
        return response.data
    }catch(error){
        throw new Error("Erro no front-end", error.message);
    }
}

export const loginUser = async (credentials) => {
    try {
      const response = await api.post('/login', credentials);
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  