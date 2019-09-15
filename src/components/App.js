import React from 'react';
import ToDoList from '../containers/ToDo';
import AddToDo from '../containers/AddToDo';

const App = () => (
  <div className="w3-container">
    <h1>To Do List</h1>
    <AddToDo />
    <ToDoList/>
  </div>
)

export default App;