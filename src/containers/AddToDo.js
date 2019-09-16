import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreators';
import { bindActionCreators } from 'redux'

class AddToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todotext: '',
        }
        this.onChangeTodoText = this.onChangeTodoText.bind(this);
        this.onClickAddToDo = this.onClickAddToDo.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);
    }

    onChangeTodoText(e) {
        this.setState({
            todotext: e.target.value
        })
    }

    onClickAddToDo(){
        this.props.addTodo(this.state.todotext);
        this.setState({ todotext: '' });
    }

    onClickCancel(){
        this.setState({ todotext: '' });
    }

    render() {
        return (
            <div>
                <div>
                    <input onChange={this.onChangeTodoText} value={this.state.todotext} type="text" className="w3-input" placeholder="What to do?" />
                    <i className='material-icons send-icon' onClick={this.onClickAddToDo}>send</i>
                    <i className='material-icons ' onClick={this.onClickCancel }>cancel</i>

                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddToDo)