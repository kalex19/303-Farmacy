import React, { Component } from 'react';
import Controls from '../containers/Controls';
import CardContainer from '../containers/Controls';
import '../styles/App.scss';

export class App extends Component {
	render() {
		return (
			<div className="app">
				<h1>303 Farmacy</h1>
				<i class="fas fa-search" />
				<input type="text" className="searchBar" placeholder="Search..." name="search" />
				<Controls />
				<CardContainer />
			</div>
		);
	}
}

export default App;
