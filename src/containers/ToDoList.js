import React from 'react';
import ToDo from './ToDo';
import { connect } from 'react-redux';

class ToDoList extends React.Component{
    render(){
        return(
            <div>
                {this.props.tasks.map((task,index)=><ToDo key={index} task={task}/>)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TodoList);