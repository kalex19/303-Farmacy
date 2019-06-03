import React, { Component } from 'react';
import Card from '../components/Card';

export class CardContainer extends Component {
	render() {
		return (
			<div>
				<h1>Results</h1>
				<Card />
			</div>
		);
	}
}

export default CardContainer;
