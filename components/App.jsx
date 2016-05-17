import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const styles = {
	border: '1px solid #777',
	boxSizing: 'border-box',
	borderRadius: '5px'
};

export default class App extends React.Component {
	render() {
		return (
			<div style={styles}>
				<Header/>
				<Content/>
				<Footer/>
			</div>
		);
	}
}