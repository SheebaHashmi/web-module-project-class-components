
import React from 'react';

class Todo extends React.Component {
     handleClick = () => {
        this.props.handleToggleItem(this.props.task)
    }
    render(){
        return(
            <div onClick={this.handleClick}><p>{this.props.task.task}</p></div>
        )
    }
}
export default Todo;
