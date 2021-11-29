import React from 'react';


import TodoList from './components/TodoList';
import './style.css'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      tasks:[]
    } 
  }
  
  handleSubmit = (item) => {
    const newTask = {
      task:item,
      id:Date.now(),
      completed:false
    }

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks,newTask]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(item => !item.completed)
    })
  }
  handleToggleItem = (item) => {
    this.setState({
      ...this.state,
      tasks:this.state.tasks.map(task => {
        if(task.id === item.id){
          return{...task,completed: !task.completed}
        }else{
          return task
        }
      })
    })
  }
  render() {
    return (
      <div>

        <h2>Manage your tasks</h2>
        <TodoList 
          tasks = {this.state.tasks}
          handleSubmit = {this.handleSubmit}
          handleClear = {this.handleClear} 
          handleToggleItem = {this.handleToggleItem}
        />

      </div>
    );
  }
}

export default App;
