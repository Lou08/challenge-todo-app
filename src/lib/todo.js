import axios from 'axios';

class Todo {
    constructor() {
        this.todo = axios.create({
            baseURL: process.env.REACT_APP_API_URI,
            withCredentials: true,
        })
    }
    getToDo() {
        return this.todo
            .get("/todos")
            .then((data) => (data))
            .catch((err) => console.log("error from todos:", err));
    }

    createToDo({title,body}){
        return this.todo
        .post("/todos", {title,body})
        .then ((data)=>(data))
        .catch((err)=> console.log('error at create', err));
    }
}
const toDoExports = new Todo();
export default toDoExports;