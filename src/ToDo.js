import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        };
        this.handleRemoveTask = this.handleRemoveTask.bind(this);
        this.toggleEditForm = this.toggleEditForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
    }

    handleRemoveTask() {
        this.props.removeTask(this.props.id);
    }

    toggleEditForm() {
        this.setState({ isEditing: !this.state.isEditing});
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTask(this.props.id, this.state.task);
        this.setState({ isEditing: false});

    }

      handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
      }

      handleToggleCompleted(evt) {
        this.props.toggleToDo(this.props.id);
    }

    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <div className="ToDo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input type="text" 
                        value={this.state.task} 
                        name="task" 
                        onChange={this.handleChange}>

                        </input>
                        <button>Save Changes</button>
                    </form>
                </div>
            )
        } else {
            result = (
            <div className="ToDo">
                <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleToggleCompleted}> {this.props.task}</li> 
                <div className="Todo-buttons">
                    <button onClick={this.toggleEditForm} >Edit</button>
                    <button onClick={this.handleRemoveTask} >X</button>
                </div>
                
            </div>
            )
        }

        return(
            result
            
        );
    }
}

export default ToDo;
