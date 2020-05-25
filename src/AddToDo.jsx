import React, {Component} from 'react';

class AddToDo extends Component {
	
	state = {
		item: ''
	};

	onChange = (e) => {
		
		this.setState({[e.target.name]: e.target.value});
	};

    onSubmit = (e) => {
		e.preventDefault();
		
		this.props.onSubmit(e.target['item'].value);
	
		
		this.setState({item: ''});
	
	}
	
	render(){
		
		return(
		
			<div>
				<form onSubmit={this.onSubmit}
					style={{ display: 'flex'}}
				>	
					<input

						type="text"
						value={this.state.item}
						name="item"
						placeholder="Add new item..."
						style={{flex: '10', padding: '5px'}}
						onChange={this.onChange}

					/>
					<input 
						type="submit"
						value="Submit"
						className="btn"
						style={{flex: '1'}}
					/>
			    </form>
			</div>
		
		);
	}
}

export default AddToDo;