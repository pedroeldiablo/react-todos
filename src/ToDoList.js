import React, { Component } from 'react';
import NewToDoForm from './NewToDoForm.js';
import ToDo from './ToDo';
import uuid from 'uuid/v4';
import './ToDoList.css';

class ToDoList extends Component {
   constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: "Sleep", id: uuid(), completed: false },
      ]
    };
    this.addToDo = this.addToDo.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  };

  addToDo(todo) {
    let newToDo = { ...todo, id: uuid(), completed: false };
    this.setState(state => ({
      todos: [...state.todos, newToDo]
    }));
  };

  removeTask(id) {
    this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
    });
    };

    updateTask(id, updatedTask) {
        const updatedToDos = this.state.todos.map(todo => {
            if (todo.id === id ) {
                return {...todo, task: updatedTask};
            }
            return todo;
        });
        this.setState({todos: updatedToDos});
    };

    toggleCompletion(id) {
        const updatedToDos = this.state.todos.map(todo => {
            if (todo.id === id ) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        this.setState({todos: updatedToDos});
    };

  render() {
const todos = this.state.todos.map(todo => (
    <ToDo
    key={todo.id} 
    id={todo.id} 
    task={todo.task}
    removeTask={this.removeTask}
    completed={todo.completed}
    updateTask={this.updateTask}
    editTask={() => this.editTask(todo.id)}
    toggleToDo = {this.toggleCompletion}
    /> 
 ));


    return (
      <div className="ToDoList">
        <h1>To DO</h1>
        <ul>
          {todos}
        </ul>
        <NewToDoForm addToDo={this.addToDo} />
      </div>
    );
  }
}

export default ToDoList;
