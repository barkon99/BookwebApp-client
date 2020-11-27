import axios from 'axios'
import {UserService, authHeader} from "./UserService";

const API_URL = 'http://localhost:7070/api/rates';

class RateService{

    addRate(rate, bookId, userId) {
        console.log(authHeader(),rate, bookId, userId)
        return axios.post(API_URL, { 
            headers: authHeader() ,
            rate,
            bookId,
            userId
        });
    }
}
export default new RateService();