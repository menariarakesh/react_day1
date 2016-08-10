import React, {Component} from 'react';


class ResultItem extends Component {

	constructor(props) {
		super(props);

	}

	render() {

		
		return(
			<li className="media">
				<div className="media-left">
					<a href="#">
						<img className="media-object" alt="Image" />
					</a>
				</div>
				<div className="media-body">
					<h4 className="media-heading">
						{this.props.heading}
					</h4>
					<p>
						{this.props.comment}
					</p>
				</div>

			</li>
		);		

			
	}


}

export default ResultItem;