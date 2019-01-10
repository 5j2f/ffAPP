import React from 'react'
import {Route} from 'react-router-dom'
import home from '../containers/home.jsx';
import test from '../containers/test.jsx';
const routs=[
	{
		path:'/home',
		component:home
	},
	// {
	// 	path:'/test',
	// 	component:test
	// }
]
function routerView (){
	return <div>
			{routs.map((route,index)=>(
				<Route
				key={index}
				path={route.path}
				component={route.component}
				/>
			))}
		</div>
	
}
export default routerView;