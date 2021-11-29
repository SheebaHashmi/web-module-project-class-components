
import React from 'react';

class Todo extends React.Component {
    render(){
        return(
            <div>{this.props.tasks}</div>
        )
    }
}
export default Todo;
