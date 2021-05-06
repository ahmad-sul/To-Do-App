import React, { useRef, useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/MyContext';

const ToDosContainer = () => {
 
  const {TODOS,updateItem,AddItem }= useContext(MyContext)

  const toDoItems = TODOS.map(el => {
    return (
      <div className="todo-item" key={el.id}>
        <p>
          <Link to={`/task/${el.text}`}>  {el.text}  </Link> 
        </p>

        <div className="actions">
          <button className="btn" onClick={()=>updateItem(el.id)}>&#10004;</button>
        </div>
      </div>
    );
  });

  const input = useRef() 

  const handelSubmit=(e)=>{
    e.preventDefault()
    setDisabled(true)
    console.log(input.current.value)
    AddItem(input.current.value)
    input.current.value='' // = e.target.reset()
  setTimeout(()=>{setDisabled(false)},2000)
  }

const [disabled,setDisabled] = useState(false)


  return (
    <div className="todos-container">
      <form className="todo-form" onSubmit={handelSubmit}>
        <label className="input-item">
          <input type="text" name="todo"  ref={input}/>
        </label>
        <input disabled={disabled} className="btn" type="submit" value="ADD" />
      </form>
      <div className="todos">
        <h3>TO DO</h3>
        {TODOS.length > 0 && toDoItems}
      </div>
    </div>
  );
};

export default ToDosContainer;
