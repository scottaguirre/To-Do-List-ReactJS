import React, {Component} from 'react';
import Todo from './Todo';
import Header from './Header';
import AddToDo from './AddToDo';


class App extends Component {
	
	state = {
		
		todos: [
			
					{
						title: "Take out trash",
						id:    1,
						completed: false
					
					},
			
					{
						title: "Prepare lesson",
						id:    2,
						completed: false
					},
			
					{
						title: "Pay bills",
						id:    3,
						completed: true
					}
			 
		       ]
		
	}

	onSubmit = (item) => {
		const newTodo = this.state.todos.slice();
		
		const newItem = {
			title: item,
			id: 5,
			completed: false
		};
		
		newTodo.push(newItem);
		
		this.setState({todos: newTodo});
	};

		
	markCompleted = (id) => {
				
		this.setState({ todos: this.state.todos.map( todo => {
			
						if( todo.id === id){
						   
							todo.completed = !todo.completed;
						   
						}
			
						return todo;
			
					})
					  			  
		}); 
	}
	
	btnDelete = (id) => {
		
		this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id )]
			
		});
		
	}
		
	
	render() {
		
		return (
    		<div className="App">
				<div className="Container">	
					<Header />
					<AddToDo onSubmit={this.onSubmit} />
					<Todo todos = { this.state.todos} markCompleted={this.markCompleted} btnDelete={this.btnDelete} />
				</div>		
    		</div>
  		);
			
	}
 
}

export default App;
