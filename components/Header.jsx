import React from 'react';

import Logo from './Logo';
import Menu from './Menu';

const styles = {
	// height: '50px'
};

export default class Header extends React.Component {
	render() {
		return (
			<div style={styles} className="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div className="container">

					<Logo/>
					<Menu/>

				</div>
			</div>
		);
	}
}