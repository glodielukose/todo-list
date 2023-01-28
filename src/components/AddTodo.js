import React, {useState} from 'react'

function AddTodo({addNewTodo}) {

  const [addTodo, setAddTodo] = useState('')

  const handleChange = (e) => {
    
    setAddTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(addTodo)
  }

  return (
    <div className='card mt-5'>
      <div className='card-body'>
        <form onSubmit={handleSubmit} className='form-group'>
            <label></label>
            <input type='text' value={addTodo} onChange={handleChange} className='form-control'/>
            <input type='submit' className='btn btn-success mt-3'/>
        </form>
      </div>
    </div>
  )
}

export default AddTodo
