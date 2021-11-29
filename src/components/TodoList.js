// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';
class TodoList extends React.Component {
    render(){
        return(
            <div>
                {
                    this.props.tasks.map(task => <Todo task = {task} key={task.id}/>)
                }
                <TodoForm 
                    handleSubmit = {this.props.handleSubmit}
                    handleClear = {this.props.handleClear} 
                />
            </div>
        )
    }
}
export default TodoList;
