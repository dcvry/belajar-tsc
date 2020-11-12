import axios from 'axios';

const URL = "https://jsonplaceholder.typicode.com/posts/1"

interface Todo {
    id:number,
    title:string,
    body:string
}

axios.get(URL).then(doc=>{

    let datas = doc.data as Todo;

    const id = datas.id;
    const title = datas.title;
    const body = datas.body;

    logTodo(id,title,body);
    
})

const logTodo = (id: number,title: string,body:string) =>{
    console.log(` 
id: ${id}, 
Title: ${title}, 
Finished: ${body}`)
}