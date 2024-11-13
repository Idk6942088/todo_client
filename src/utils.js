import axios from 'axios'

//const url='http://localhost:8000'

const url='https://todo-server-3z5w.onrender.com/'

export const getTodos=async ()=>{
    const response=await axios.get(url+'/todos')
    return response
}

export const delTodos=async (id)=>{
    const response=await axios.delete(url+'/todos/'+id)
    return response
}

export const updateCompleted=async (id)=>{
    const response=await axios.put(url+'/todos/completed/'+id)
    return response
}

export const updateTask=async (id,data)=>{
    const response=await axios.put(url+'/todos/task/'+id,data)
    return response
}

export const addTodo=async (data)=>{
    const response=await axios.post(url+'/todos',data)
    return response
}