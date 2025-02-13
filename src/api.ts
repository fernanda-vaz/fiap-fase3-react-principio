import axios from 'axios'

const api = axios.create({
  baseURL: 'https://localhost:3001',
})

export default api

// json-server --watch db.json --port 3001