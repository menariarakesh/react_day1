import React,{Component} from 'react';

import ResultList from './result_list';

class SearchBar extends Component {

	constructor(props){
		super(props);
		this.onInputChange = this.onInputChange.bind(this);

		this.onClick = this.onClick.bind(this);

		this.state = { term : '', results:[]};
	}

	onInputChange(event) {
		//console.log(event.target.value);
		this.setState({term: event.target.value});
	}

	onClick(event) {
		this.setState({
			results: [
				{
					id: 1,
					name: 'Kunal Mathur',
					location: 'Bangalore',
					comment: 'Hello folks , I am from Bangalore'
				},
				{
					id: 2,
					name: 'Rakesh Menaria',
					location: 'Mumbai',
					comment: 'Hello folks , I am from Mumbai'
				},
				{
					id: 3,
					name: 'Rushabh Soni',
					location: 'Pune',
					comment: 'Hello folks , I am from Pune'
				}
			]
		})
	}

	render() {
		return (


			<div>
				<h1>{this.props.heading}</h1>
				<label >Name</label>
				<input className="form-control" placeholder="Enter First Name" onChange={this.onInputChange} value={this.state.term}/>
				Value of the input : {this.state.term}
				
				<br/><br/>
				<button onClick={this.onClick}>Search</button>
				<ResultList results={this.state.results} />
			</div>

			);
	}

	
}

export default SearchBar;