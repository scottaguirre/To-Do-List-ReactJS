import React, {Component} from 'react';
import Items from './Items';


class Todo extends Component {
	
	
	render() {
	
		return this.props.todos.map( todo => (
								   
										<Items key={todo.id} item={todo} markCompleted={this.props.markCompleted} btnDelete={this.props.btnDelete}/>
								   
								   ));
			
	}
 
}

export default Todo;