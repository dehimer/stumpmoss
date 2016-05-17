import React from 'react';

import Logo from './Logo';

const styles = {
	backgroundColor: 'blue',
	height: '50px'
};

export default class Header extends React.Component {
	render() {
		return (
			<div style={styles}>
				<Logo/>
			</div>
		);
	}
}