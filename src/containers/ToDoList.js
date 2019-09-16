import React, { Component } from "react";
import { connect } from "react-redux";
import {
    deleteTodo,
    toggleTodo,
    clearCompleted,
    setVisibilityFilter,
    completeAllTodo,
    clearAll
} from '../actions/actionCreators.js';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/actionTypes';
import { bindActionCreators } from "redux";

class ToDoList extends Component { 
    render() {
        return (
            <div className="">
                <nav>

                    <ul className="w3-bar">
                        <li
                            className={'w3-bar-item w3-button w3-hover-none  w3-bottombar w3-hover-border-blue w3-hover-text-blue' + (this.props.visibilityFilter === SHOW_ALL ? ' w3-border-blue' : '')}
                            onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
                        >
                            All
                        </li>
                        <li
                            className={'w3-bar-item w3-button w3-hover-none  w3-bottombar w3-hover-border-blue w3-hover-text-blue' + (this.props.visibilityFilter === SHOW_COMPLETED ? ' w3-border-blue' : '')}
                            onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
                        >
                            Completed
                        </li>
                        <li
                            className={'w3-bar-item w3-button w3-hover-none  w3-bottombar w3-hover-border-blue w3-hover-text-blue' + (this.props.visibilityFilter === SHOW_ACTIVE ? ' w3-border-blue' : '')}
                            onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
                        >
                            Active
                        </li>
                        <li onClick={() => this.props.clearCompleted()} className='w3-button w3-ripple w3-red w3-bottombar'>Clear completed</li>
                    </ul>

                </nav>
                {this.props.todos.length !== 0 ? (
                    <table className='w3-table w3-centered '>
                        <thead>
                            <tr className='w3-border-bottom'>
                                <th>
                                    <i title='check all' onClick={() => this.props.completeAllTodo()} className='material-icons check-icon' >check_circle</i>
                                </th>
                                <th>Todos</th>
                                <th><i title='clear all'  onClick={() => this.props.clearAll()} className='material-icons delete-icon' >delete</i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.todos.map(todo => (
                                <tr key={todo.id} className='w3-border-bottom'>
                                    <td className='table-td-check'>
                                        <i onClick={() => this.props.toggleTodo(todo.id)} className={'material-icons' + (todo.completed ? ' check-icon' : '')}>check_circle</i>
                                    </td>
                                    <td className='todo-text'
                                        style={{
                                            textDecoration: todo.completed ? "line-through" : "none"
                                        }}
                                    >
                                        <div contentEditable = {todo.completed ? 'false' : 'true'} className='edit-todo'>
                                            {todo.text}
                                        </div>
                                    </td>
                                    <td className='table-td-delete'>
                                        <i onClick={() => this.props.deleteTodo(todo.id)} className='material-icons delete-icon'>delete</i>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                ) : (
                        <div>
                            <div>
                                Todo List is empty
                        </div>
                        </div>
                    )}{" "}
            </div>
        );
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error("Unknown filter: " + filter);
    }
};

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            deleteTodo,
            toggleTodo,
            setVisibilityFilter,
            clearCompleted,
            completeAllTodo,
            clearAll
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);