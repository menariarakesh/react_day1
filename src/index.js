/* eslint-disable no-console */
console.log('hi');


import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar';



/*const App = function(){
	return <div>Hi!</div>;
}*/

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {label: 'Search Term ', heading: 'Hello world from React !!!'}
	}

	render() {
		return (
			<div>
				<SearchBar label={this.state.label} heading={this.state.heading}/>
			</div>
			);
	}

}

ReactDOM.render(<App />,document.getElementById('app'));