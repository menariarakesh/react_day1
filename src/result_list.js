import React, {Component} from 'react';

import ResultItem from './result_item';

class ResultList extends Component {

	constructor(props) {
		super(props);

	}

	render() {

		const results = this.props.results.map((result) => {
			return(
				<ResultItem heading={result.name}
					comment={result.comment}
					key={result.id} />
					)
		});
		
		return(
			<div>
				<ul className="media-list">
					{results}
				</ul>
			</div>
		);		

			
	}


}

export default ResultList;