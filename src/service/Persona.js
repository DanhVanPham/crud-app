import axios from 'axios'
axios.post
export default class PersonaService {
    url = "http://localhost:9292/studentmanagement/api/";
    getAll() {
        return axios.get(this.url + "getStudents");
    }
}x