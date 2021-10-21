import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {


  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Work Appointment',
      day: 'Feb 6th at 3:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'School Appointment',
      day: 'Feb 7th at 8:30pm',
      reminder: true,
    },
    {
      id: 4,
      text: 'Doctors Appointment',
      day: 'Feb 9th at 5:30pm',
      reminder: true,
    },
  ])


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? {
        ...task, reminder:
          !task.reminder
      } : task
    )
    setTasks(newTasks)
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div >
  );
}

export default App;
