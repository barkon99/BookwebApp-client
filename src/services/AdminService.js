import axios from 'axios'
import {UserService, authHeader} from "./UserService";

const API_URL = 'http://localhost:7070/api/admin/books';

class AdminService{

    getAllBooksToAccept() {
        return axios.get(API_URL, { headers: authHeader() });
    }

    async rejectBook(id) {
        const res = await axios.delete(API_URL + "/" + id, { headers: authHeader() });
        return res
    }

    async acceptBook(id) {
        const res =  await axios.get(API_URL + "/" + id, { headers: authHeader() });
        return res 
    }
}

export default new AdminService();