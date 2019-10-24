import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      isEditing: null
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: this.state.items.concat(this.state.term)
    });
  }

  //creating edit button on list to change todo list
  onEdit = (event) => {
    this.setState({isEditing: true})
  }

  render() {
    return (
      <div className="todoListMain">
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} placeholder="enter todo"/>
          <button type="submit">add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}