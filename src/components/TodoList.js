// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';
class TodoList extends React.Component {
    render(){
        return(
            <div>
                <Todo tasks = {this.props.tasks}/>
                <TodoForm 
                    handleSubmit = {this.props.handleSubmit}
                    handleClear = {this.props.handleClear} 
                />
            </div>
        )
    }
}
export default TodoList;
