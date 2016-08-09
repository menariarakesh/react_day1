import React,{Component} from 'react';

class SearchBar extends Component {

	constructor(props){
		super(props);
		this.onInputChange = this.onInputChange.bind(this);
		this.state = { term : ''};
	}

	onInputChange(event) {
		//console.log(event.target.value);
		this.setState({term: event.target.value});
	}

	render() {
		return (
			<div>
				<input placeholder="Enter First Name" onChange={this.onInputChange} />
				Value of the input : {this.state.term}
			</div>

			);
	}

	
}

export default SearchBar;