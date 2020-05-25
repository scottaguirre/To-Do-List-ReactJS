import React, {Component} from 'react';


class Items extends Component {
	
	getStyle = () => {
			
			return {
				
				background: '#f4f4f4',
				padding: '10px',
				borderBottom: '1px dotted #ccc',
				textDecoration: this.props.item.completed ? 'line-through': 'none'
			}
	}
	
	
	render() {
		
		const { id, title  } = this.props.item;
		
		return (
    		<div style={this.getStyle()} >
				<p>
					<input type="checkbox" onChange={this.props.markCompleted.bind(this, id)}/>
					{' '} {title}
					<button onClick={this.props.btnDelete.bind(this, id)} style={btnStyle} >x</button>
				</p>
    		</div>
  		);
			
	}
 
}

const btnStyle = {
	
	background: '#ff0000',
	color: 'white',
	borderRadius: '50%',
	border: 'none',
	padding: '5px 8px',
	cursor: 'pointer',
	float: 'right'
}


export default Items;