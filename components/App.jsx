import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default class App extends React.Component {
	render() {
		return (
			<div style={{backgroundColor:'red'}}>
				App
				<Header/>
				<Content/>
				<Footer/>
			</div>
		);
	}
}