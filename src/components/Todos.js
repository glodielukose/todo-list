import React, {useState} from 'react'
import AddTodo from './AddTodo';

function Todos() {
  const [todos, setTodos] = useState([
    {id: 1, todo: 'Faire la lessive'},
    {id: 2, todo: 'Prendre mon petit dejeuner'},
    {id: 3, todo: 'Reviser mes cours'}
  ]);

  const myTodos = todos.map( todo => {
    return(
        <li key={todo.id} className='list-group-item'>{todo.todo}</li>
    )
  });

  const addNewTodo = (newTodo) => {
    setTodos([
      ...todos,
      {id: 4, todo: newTodo}
    ])
  }


  return (
    <div>
    <h1>{todos.length}-Todos</h1>
    
      <ul className='list-group'>
        {myTodos}
      </ul>

      <AddTodo addNewTodo={addNewTodo}/>
    </div>
  )
}

export default Todos
