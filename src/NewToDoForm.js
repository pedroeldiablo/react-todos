import React, { Component } from "react";
import './NewToDoForm.css';

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addToDo(this.state);
    this.setState({ task: "" });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {
    return (
      <form className="NewToDoForm" onSubmit={this.handleSubmit}>
        <label  htmlFor='task'>Task: </label>
        <input
          type="text"
          placeholder="Add a new task"
          id='task'
          name='task'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Task</button>
      </form>
    );
  }
}
export default NewToDoForm;
