import React, {Component} from 'react';


class LikeItem extends Component {

	constructor(props) {
		super(props);

		this.onLikeClick = this.onLikeClick.bind(this);


		this.state = { like : this.props.like, dislike:this.props.dislike};

	}

	onLikeClick(event){
		if(event.target.className == "glyphicon glyphicon-thumbs-up"){
			this.setState({like:this.state.like + 1 }
				);
			event.target.className = "glyphicon glyphicon-thumbs-down"
		} 
		else {

			this.setState({like:this.state.like - 1 }
				);
			event.target.className = "glyphicon glyphicon-thumbs-up"
		}
	}



	render() {

		
		return(
			<div class="container">
				<a href="#" className="glyphicon glyphicon-thumbs-up" name="like" 
				onClick={this.onLikeClick} />
				
				{this.state.like}
			</div>
		);		

			
	}


}

export default LikeItem;