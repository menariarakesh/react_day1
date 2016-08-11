import React,{Component} from 'react';

import ResultList from './result_list';


class SearchBar extends Component {

	constructor(props){
		super(props);
		this.onInputChange = this.onInputChange.bind(this);

		this.onClick = this.onClick.bind(this);

		//this.onAddComment = this.onAddComment.bind(this);

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
					comment: 'Hello folks , I am from Bangalore',
					like:0,
					dislike:0
				},
				{
					id: 2,
					name: 'Rakesh Menaria',
					location: 'Mumbai',
					comment: 'Hello folks , I am from Mumbai',
					like:0,
					dislike:0
				},
				{
					id: 3,
					name: 'Rushabh Soni',
					location: 'Pune',
					comment: 'Hello folks , I am from Pune',
					like:0,
					dislike:0
				}
			]
		})
	}

	/*onAddComment(event){
		let tempName = event.target.elements["name"].value;
		let tempComment = event.target.elements["comment"].value;

		let tempID = this.results.length + 1;

		this.setState(Object.assign({},
					this.state,
						Object.assign({},this.state.results,{
							id:tempID,
							name:tempName,
							location:"Mumbai",
							comment:tempComment
						})
					)
			);

	}*/

	render() {
		return (


			<div>
				
				<button onClick={this.onClick}>Search</button>
				<ResultList results={this.state.results} />
				<br />
				
			</div>

			);
	}

	
}

export default SearchBar;