import React,{Component}  from 'react';
import {connect} from 'react-redux';
import {getChange} from '../actions'
class UserInfo extends Component {
	constructor(props={key11:'3'}){
		super(props);
		this.state={
			key11:'ff'
		}
	}
	
	changeTitle(){
		this.setState({
				key11:'gg'
		})
		this.setState({
				key11:'g'
		})

	} 


	render() {
		console.log('UserInfo update')
		return (<div>
		<div onClick={()=> this.changeTitle('ffff')}>welcom!</div>
		<p>I'm {this.state.key11}</p>
	</div>)
	}
}
// function UserInfo({getChange,key11}){
// 	console.log('UserInfo update')
// 	return (<div>
// 		<div onClick={()=>getChange('ffff')}>welcom!</div>
// 		<p>I'm {key11}</p>
// 	</div>)
// }

function mapStateToProps(state,ownProps){
	return {...state}
}
function mapDispatchToProps(){
	return {
		getChange                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	}
}
const reactReduxModule=connect(mapStateToProps, {getChange})(UserInfo);
export default reactReduxModule;
