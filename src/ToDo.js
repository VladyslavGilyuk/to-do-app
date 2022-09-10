import React from 'react'
import editIcon from "./icons/edit.png"
import deleteIcon from "./icons/delete.png"
import saveIcon from "./icons/save.png"
import completeIcon from "./icons/complete.png"


function ToDo({edit, value, setValue, saveTask, todo, editTask, removeTask, toggleTask} ) {
  return (
    <div key={todo.id} className="to-do-item">
    {
      edit === todo.id ? 
        <div className={todo.complete ? "item-strike list-container" : "list-container"}>
          <input className='input-style'  value={value} onChange={(e)=>setValue(e.target.value)}  />
          <button onClick={() =>saveTask(todo.id)} className="icon-btn"><img src={saveIcon} alt='save icon' className='icon-style'></img></button>
        </div> :
        <div className={todo.complete ? "item-strike list-container" : "list-container"}>
          <div className= "item">
            {todo.task}
          </div>
          <div>
            <button onClick={() => toggleTask(todo.id)} className="icon-btn"><img src={completeIcon} alt='completed icon' className='icon-style'/></button>
            <button onClick={() => editTask(todo.id, todo.task)} className="icon-btn"><img src={editIcon} alt='edit icon' className='icon-style' /></button>
            <button onClick={() => removeTask(todo.id)} className ="delete-item icon-btn"><img src={deleteIcon} alt='edit icon' className='icon-style' /></button>
          </div>
        </div>
    }
    </div>
  )
}

export default ToDo