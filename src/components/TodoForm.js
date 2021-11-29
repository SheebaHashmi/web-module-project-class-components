
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
            <div className="form">
                <input type="text" placeholder="...todo" onChange = {this.handleChange} value={this.state.input}/>
                <button className = "add-btn" onClick = {this.handleClickSubmit}>Add Task</button>
                <button className="remove-btn" onClick = {this.props.handleClear}>Clear List</button>
            </div>
        )
    }
}
export default TodoForm;
