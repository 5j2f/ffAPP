import React from 'react';
import {Link} from 'react-router-dom';

function leftNav(){
	return <div>
		<Link to="/home">home</Link>
		<hr/>
		<Link to="/test">test</Link>
	</div>
}
export default leftNav;