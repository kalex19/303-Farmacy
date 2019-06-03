import React, { Component } from 'react';
import { fetchEffects } from '../thunks/fetchEffects';
import { fetchFlavors } from '../thunks/fetchFlavors';
import Controls from '../containers/Controls';
import '../styles/App.scss';
import PropTypes from 'prop-types';
import { urlEffects, urlFlavors } from '../util/urls';

export default class App extends Component {
	// componentDidMount() {
	// 	this.props.fetchFlavors(urlFlavors);
	// 	this.props.fetchEffects(urlEffects);
	// }

	render() {
		let display = this.props.isLoading ? <section>Loading...</section> : <Controls />;

		return (
			<div className="app">
				<h1>303 Farmacy</h1>
				<div className="searchBarContainer">
					<i class="fas fa-search" />
					<input type="text" className="searchBar" placeholder="Search..." name="search" maxlength="25" />
				</div>
				{display}
			</div>
		);
	}
}
