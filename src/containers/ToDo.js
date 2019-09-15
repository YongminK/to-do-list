import React from 'react';


class ToDo extends React.Component{
    render(){        
        return(
            <p key={this.props.key}>
                <input 
                    type='checkbox'
                    onClick={() => this.props.select(todo)} 
                    key={this.props.key}
                    className='w3-check'
                    />
                {this.props.task}
            </p> 
        );

    }
}



export default (ToDo);