import React, { useState } from 'react'
import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'
import './App.css'

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the course' },
    { id: 'cg2', text: 'Learn all the things about React' },
    { id: 'cg3', text: 'Help other students with stuff' },
  ])

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal)
    })
  }

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  )
}

export default App
