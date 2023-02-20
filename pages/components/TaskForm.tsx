import { Button, TextField } from '@mui/material';
import React, {useState, useEffect, ChangeEvent, FormEvent} from 'react'
import { Task } from '../interfaces/Task';



interface Props {
    btnText: string; 
    taskList: Task[];
    setTaskList?: React.Dispatch<React.SetStateAction<Task[]>>   // alterando o setState de uma lista       ? é opcional
}

const TaskForm = ({btnText, taskList, setTaskList} : Props) => {

    const [id , setId] = useState<number>(0)
    const [title , setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();      // enviar formulario sem submeter
        const id = Math.floor(Math.random()*100)   // gerar um valor pra id 

        const newTask: Task = {id, title, difficulty}    // adcionando os tres types de Task á newTask

        setTaskList!([...taskList, newTask])    // une todas as tasks e newTask à nova setTaskList        ! força o javascript entender que irá vir o argumento opcional

        setDifficulty(0)
        setTitle("")
        console.log(taskList)
    }

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title"){
            setTitle(e.target.value)

        }else {
            setDifficulty(parseInt(e.target.value))
          }

     
    }


  return (
  <form onSubmit={addTaskHandler}>
    
     <TextField   name="title" label="Título da Tarefa" variant="standard" onChange={handlerChange} value={title}/><br></br>
     <TextField name="difficulty"  label="Dificuldade da Tarefa" variant="standard" onChange={handlerChange} value={difficulty} /><br></br><br></br>
     <Button type='submit' variant="contained" value={btnText}>Criar Tarefa</Button>
  </form>
  );
}

export default TaskForm 