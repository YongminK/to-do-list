import React from 'react';
import { connect } from 'react-redux';
import addTask from '../actions/index'
import { bindActionCreators } from 'redux';


class AddToDo extends React.Component{
    render(){
        return(
            <div>
                <input type='text' ref='task'/>
                <button onClick={()=>this.props.addTask(this.refs.value)} >Add</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask}, dispatch);
}

export default connect(null,mapDispatchToProps)(AddToDo);