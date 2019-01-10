import React,{Component} from 'react';
import {Row,Col} from 'antd';
import Leftnav from './containers/leftNav.jsx'
import RouteView from './router/router.js'



class App extends Component {
	conustructor(){

	}
	render(){
		return <div>
			<Row >
				<Col span={4}>
					<Leftnav></Leftnav>
				</Col>
				<Col span={20}>
					<RouteView/>
				</Col>
			</Row>
		</div>
	}
}

export default App;