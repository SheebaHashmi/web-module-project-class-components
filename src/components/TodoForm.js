
import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            input:e.target.value
        })
        
    }
    
    handleClickSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.input)
        this.setState({input:''})
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="...todo" onChange = {this.handleChange}/>
                <button onClick = {this.handleClickSubmit}>Add Task</button>
                <button onClick = {this.props.handleClear}>Clear List</button>
            </div>
        )
    }
}
export default TodoForm;
