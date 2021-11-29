
import React from 'react';

class TodoForm extends React.Component {
    handleChange = (e) => {
        
        handleSubmit(e.target.value)
      }
    render(){
        return(
            <div>
                <input type="text" placeholder="...todo" onChange = {this.props.handleChange}/>
                <button onClick = {this.props.handleSubmit}>Add Task</button>
                <button onClick = {this.props.handleClear}>Clear List</button>
            </div>
        )
    }
}
export default TodoForm;
