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
            <h1 className="w3-allerta">TO DO LIST</h1>
            <div>
              <AddToDo />
            </div>
            <ToDoList />
          </div>
          <div className='footer'>
          last change: 17.09.2019 16:29
          </div> 
        </div>
      </div>
    );
  }
}

export default App;