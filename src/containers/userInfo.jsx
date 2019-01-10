import React  from 'react';
import {connect} from 'react-redux';
import {getChange} from '../actions'
function UserInfo({getChange}){
	console.log(getChange)
	return (<div>
		<div onClick={()=>getChange()}>welcom!</div>
	</div>)
}

function mapStateToProps(state,ownProps){
	return {}
}
function mapDispatchToProps(){
	return {
		getChange                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	}
}
const reactReduxModule=connect(mapStateToProps, {getChange})(UserInfo);
export default reactReduxModule;
