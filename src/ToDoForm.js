import React, { useState } from 'react'

function ToDoForm({addTask}) {

  const [userInput, setUserInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  }
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  }

  return (
    <form className='form-style' onSubmit={handleSubmit}>
      <input
        className='input-style'
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKey}
        placeholder="Enter your todo" />
      <button onClick={handleSubmit} className="add-btn">Add Todo</button>
    </form>
  )
}

export default ToDoForm