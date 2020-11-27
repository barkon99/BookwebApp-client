import axios from 'axios'
import {authHeader} from "./UserService";

const API_URL = 'http://localhost:7070/api/books';

class BookService{

    getAllBooks() {
        console.log(authHeader() )
        return axios.get(API_URL, { headers: authHeader() });
    }
    getBook(id) {
        return axios.get(API_URL + "/" + id, { headers: authHeader() });
    }
    addBook(formData){
        return axios.post(API_URL,formData)
    }

    updateBook(formData, book_id){
        return axios.post(API_URL + "/" + book_id, formData)
    }
    deleteBook(id){
        return axios.delete(API_URL + "/" + id, { headers: authHeader() });
    }
}

export default new BookService();