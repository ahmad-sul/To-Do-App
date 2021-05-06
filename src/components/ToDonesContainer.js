import React from 'react';

const ToDonesContainer = ({TODONES,updateItem,DeleteItem}) => {
  

  const toDoNesItems = TODONES.map(el => {
    return (
      <div className="todones-item" key={el.id}>
        <p>{el.text}</p>
        <div className="actions">
          <button className="btn" onClick={()=>updateItem(el.id)} >&#8635;</button>
          <button className="btn" onClick={()=>DeleteItem(el.id)} >&#10008;</button>
        </div>
      </div>
    );
  });

  return (
    <div className="todones-container">
      <h3>BACKLOG</h3>
      {TODONES.length > 0 && toDoNesItems}
    </div>
  );
};

export default ToDonesContainer;
