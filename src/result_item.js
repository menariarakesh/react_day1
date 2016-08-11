import React, {Component} from 'react';

import LikeItem from './like_item';

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

				<LikeItem like={this.props.like} 
					dislike={this.props.dislike} />

			</li>
			
		);		

			
	}


}

export default ResultItem;