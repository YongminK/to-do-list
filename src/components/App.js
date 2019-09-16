import React, { Component } from 'react';
import AddToDo from '../containers/AddToDo';
import ToDoList from '../containers/ToDoList';
import '../styles/style.css';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="w3-container" >
          <div>
            <div>
              <AddToDo />
            </div>
            <ToDoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;