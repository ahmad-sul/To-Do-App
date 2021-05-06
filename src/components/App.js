import React, { useEffect, useState } from 'react';
import '../css/App.scss';
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import { v4 as uuid } from 'uuid';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Help from '../views/Help';
import NotFound from '../views/NotFound';
import DetailedTaskComp from './DetailedTaskComp';

const App = () => {
const [tasks,setTasks] = useState([
  // {id :uuid(), text: 'Make a website', done: true },
  // {id :uuid(), text: 'Call my mom', done: true },
  // {id :uuid(), text: 'Finish reading my book', done: true },
  // {id :uuid(), text: 'Make more moneys', done: true },
  // {id :uuid(), text: 'Wash my face!', done: false },
  // {id :uuid(), text: 'Walk the dog', done: false },
  // {id :uuid(), text: 'Pay the rent', done: false },
  // { id :uuid(),text: 'Make so moneys', done: false }
]);

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
    <HashRouter>
    <div className="app">
      <Navigation/>
      {/* <DetailedTaskComp text='demo data' done='true'/> */}

<Switch>
{/* <Route path="/" component={}/> we can't use this way here because we have to return tow component */} 
  <Route exact path="/">

     <ToDosContainer 
     updateItem={updateItem} A
     ddItem={AddItem}
      TODOS={TODOS}/>

      <ToDonesContainer
       updateItem={updateItem} 
       DeleteItem={DeleteItem}
        TODONES={TODONES}/>

  </Route>

  <Route path='/help' >
<Help/>
  </Route>


  <Route path='/task/:text'>
    <DetailedTaskComp data ={tasks}/>
  </Route>

  <Route>
    <NotFound/>
  </Route>
  
</Switch>

     
    </div>
    </HashRouter>
  );
};

export default App;
