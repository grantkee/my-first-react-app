import React, { Component } from 'react';
import './App.css';
import List from './List';
import logo from './logo512.png';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      todo: '',
      items: [],
      isEditing: false,
      complete: false
    };
    this.isComplete = this.isComplete.bind(this);
  }

  inputUpdate = (event) => {
    this.setState({ todo: {"id": this.state.id +1, "text": event.target.value, "complete": false} });
    // this.setState({id: this.state.id +1})
  }

  //tried to add if statement so it will only run if the input field contains text, but it doesn't work here
  formSubmit = (event) => {
    event.preventDefault();
    console.log('todo', this.state.todo)
      this.setState({
        items: [...this.state.items, this.state.todo],
        todo: ''
      });
  }

  //creating edit button on list to change todo list
  isEditing = () => {
    this.setState({isEditing: !this.state.isEditing})
  }

  isComplete = (item, index) => {
    this.setState({complete: true})
    console.log(this.state.complete)
    let completedItems = this.state.items.filter((todo)=> {
      todo.complete === true
    })
    // completedItems.splice(index, 1);
    this.setState({
      completedItems
    })
  }

  render() {
    return (
      <div className="todoListMain">
        {<header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
    </header>}
        <form className="App" onSubmit={this.formSubmit}>
          <input value={this.state.todo.text} onChange={this.inputUpdate} placeholder="enter todo"/>
          <button type="submit">add</button>
        </form>
        {console.log('items', this.state.items)}
        <List items={this.state.items} completed={this.isComplete}/>
        {/* <ul>
        {this.state.items.map((item, index) => 
            <li key={index}>{item}<button key={index} onClick={() => {this.isComplete(item, index)}}>Complete</button>
            {console.log(this.state.complete)}
            </li>
            )}
    </ul> */}
      </div>
    );
  }
}

//export default App