import axios from 'axios'
import './App.css'
import Table from './components/Table'
import TodoForm from './components/TodoForm'
import { useEffect, useState } from 'react'

function App() {

const [todos, setTodos] = useState("")

useEffect(() => {
  fetchData()
  console.log(todos);
}, [])

const fetchData = async () => {
  //  try {
  //   const response = await 
  //   axios.get("http://127.0.0.1:8000/api/todo/")
    
  //   console.log(response.data); // Access the response data using response.data
  //   setTodos(response.data); // Assuming setTodos is a state update function for your component
  //  } catch (error) {
  //   console.log(error);
  //  }
}

  return (
    <div className='bg-indigo-100 px-8 min-h-screen'>  
    <nav className='pt-8'>
    <h1 className='text-5xl text-center pb-12'>Todo List</h1>
    </nav>
    <TodoForm />
    <Table 
      todos={todos}
      setTodos={setTodos}
    />
    </div>
  )
}

export default App
