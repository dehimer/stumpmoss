import React from 'react';

const styles = {
// 	width: '150px',
// 	height: '100%',
// 	textAlign: 'center',
// 	fontSize: '25px',
// 	color: 'white',
// 	paddingTop:'5px'
};

export default class Menu extends React.Component {
	render() {
		return (
			<div className="collapse navbar-collapse">
	          	<ul className="nav navbar-nav navbar-right">
	            	<li><a href="#signin">Sign In</a></li>
	            	<li><a href="#signup">Sign Up</a></li>
	          	</ul>
	        </div>
		);
	}
}