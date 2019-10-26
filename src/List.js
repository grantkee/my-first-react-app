// import React, {Component} from 'react';
import React from 'react';
import App from './App';

// export default class List extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isComplete: false
//       };
//     }
//       //delete button when the todo is complete
//   isComplete = (event) => {
//     this.setState({isComplete: true})
//     console.log(this.isComplete)
//   }
//   render(){
//       return (
//           {isComplete ? }
//       )
//   }

// }




const List = props => (
    <ul>
        {props.items.map((item, index) => 
            <li key={index}>
            {item} <button onClick={() => {this.completed(item, index)}}>Complete</button>
            </li>
            )}
    </ul>
);

export default List;