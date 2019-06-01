import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import CardContainer from './CardContainer';
import { connect } from 'react-redux';

export const Controls = props => {
	const flavors = props.flavors;
	const effects = props.effects;
	const race = props.race;

	return (
		<section>
			<div className="controlButtons">
				<NavLink to="/flavors" className="nav">
					Flavors
				</NavLink>
				<NavLink to="/effects" className="nav">
					Effects
				</NavLink>
				<NavLink to="/race" className="nav">
					Race
				</NavLink>
			</div>
			<Route exact path="/flavors" component={() => <CardContainer category="flavors" />} />
			<Route exact path="/effects" component={() => <CardContainer category="effects" />} />
			<Route exact path="/race" component={() => <CardContainer category="race" />} />
		</section>
	);
};

const mapStateToProps = ({ flavors, effects, race }) => ({
	flavors,
	effects,
	race
});

export default connect(mapStateToProps)(Controls);
