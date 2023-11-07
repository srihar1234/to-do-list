/* eslint-disable react/prop-types */
import './App.css'
import TopBar from './components/TopBar'
import Cards from './components/Cards'
import { useState } from 'react'

function App() {

  const data = [
    {
      name: "JS-TASK",
      description: "create a countdown function to print from 10 to 0",
      status: false,
    },
    {
      name: "HTML,CSS-TASK",
      description: "create timer with previous js task function",
      status: false,
    },
    {
      name: "REACT-TASK",
      description: "create a website to to-do list",
      status: false,
    }
  ];
  const [task, setTask] = useState(data);

  return (
    <div className="app">
      <TopBar />
      <Cards
        task={task}
        setTask={setTask}
      />
    </div>
  )
}

export default App
