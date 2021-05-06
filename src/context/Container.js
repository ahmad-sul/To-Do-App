import React, { useState, useEffect } from 'react'
import { MyContext } from './MyContext'
import { v4 as uuid } from 'uuid';

export default function Container(props) {

const [tasks,setTasks] = useState([])

useEffect(()=>{
    let data = localStorage.getItem('todoItem')  
  
    if (data) {
      let parseData = JSON.parse(data)
      setTasks(parseData)
    }
  },[])

  const TODOS = tasks.filter(item=>!item.done) // اعطيني المهام التي لم تتم بعد
  const TODONES = tasks.filter(item=>item.done) // اعطيني المهام التي  تمت  

  const AddItem=(text)=>{
    let task ={id :uuid(), text:text, done:false}
    localStorage.setItem('todoItem', JSON.stringify([ task , ...tasks ])) // we store it inside the localStorge
    sessionStorage.setItem('todoItem', JSON.stringify([ task , ...tasks ]))
    setTasks([ task , ...tasks ])
  }
  
  const DeleteItem=(id)=>{
    let removeItem = tasks.filter((item)=>item.id!==id)
    localStorage.setItem('todoItem', JSON.stringify(removeItem))
  setTasks(removeItem) // show me all tasks axcept this task which i clicked
  }
  
  const updateItem=(id)=>{
    let updatedTasks = tasks.map(item=>item.id===id ? {...item,done:!item.done}:item);
  
    localStorage.setItem('todoItem', JSON.stringify(updatedTasks));
     setTasks(updatedTasks);
  
  
    /////////// another way //////////////
  // item=>item.id===id ? {...item,done:!item.done}:item === 
    // let updatedTasks= tasks.map(task=>{
    //   if(task.id === id){
    //     task.done = !task.done
    //     return task
    //   }
    //   return task
    // })
    // setTasks(updatedTasks)
  }


    return (
      <MyContext.Provider value ={{tasks,setTasks,TODOS,TODONES,AddItem,updateItem, DeleteItem,}}>
      {props.children}

      </MyContext.Provider>
    )
}
