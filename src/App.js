import React, { Component } from 'react';
import './App.css';
import List from './List';
import logo from './logo512.png';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      isEditing: false,
      complete: false
    };
    this.isComplete = this.isComplete.bind(this);
  }

  inputUpdate = (event) => {
    this.setState({ term: event.target.value });
  }

  //tried to add if statement so it will only run if the input field contains text, but it doesn't work here
  formSubmit = (event) => {
    event.preventDefault();
    if(this.term !== ''){
      this.setState({
        items: this.state.items.concat(this.state.term),
        term: ''
      });
    }
  }

  //creating edit button on list to change todo list
  isEditing = () => {
    this.setState({isEditing: !this.state.isEditing})
  }

  isComplete = (todo, index) => {
    this.setState({complete: true})
    let completedItems = this.state.items.slice();
    completedItems.splice(index, 1);
    this.setState({
      items: this.state.items
    })
  }

  render() {
    return (
      <div className="todoListMain">
        {<header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
    </header>}
        <form className="App" onSubmit={this.formSubmit}>
          <input value={this.state.term} onChange={this.inputUpdate} placeholder="enter todo"/>
          <button type="submit">add</button>
        </form>
        <List items={this.state.items}/>
      </div>
    );
  }
}

//export default App