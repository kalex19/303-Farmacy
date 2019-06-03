import React, { Component } from 'react';
import '../styles/Card.scss';

export class Card extends Component {
	render() {
		return (
			<div className="card">
				<h1>Card</h1>
				<button>Share</button>
				<button>Favorite</button>
			</div>
		);
	}
}

export default Card;
