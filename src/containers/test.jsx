import React from 'react';
import {createStore ,applyMiddleware,compose} from 'redux'
import {connect} from 'react-redux';
import reducer from '../reducers/index.js'
import {getChange} from '../actions';
const exchange = store => next => action=> {
		return next(action)
}
const middle2= store => next => action=> {
		return next(action)
}
const store=createStore(reducer,applyMiddleware(exchange,middle2))

function Test (){
	return <div>
		<div><input type="text" onChange={(e)=>{store.dispatch(getChange(e.currentTarget.value))}}/></div>
		<h2></h2>
	</div>
}
let currentChange;
function handleChange(){
	console.log(store.getState())
}


store.subscribe(handleChange)
export default Test; 