import React from 'react'
import {Route} from 'react-router-dom'
import home from '../containers/home.jsx';
import testReactRedux from '../containers/testReactRedux.jsx';
import textRedux from '../containers/testRedux.jsx';
import shouldComponentUpdate from '../components/shouldComponentUpdate.jsx';
const routs=[
	{
		path:'/home',
		component:home
	},
	{
		path:'/testReactRedux',
		component:testReactRedux
	},
	// {
	// 	path:'/textRedux',
	// 	component:textRedux
	// }
	{
		path:'/shouldComponentUpdate',
		component:shouldComponentUpdate
	}
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