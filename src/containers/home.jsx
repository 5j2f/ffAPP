import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Connect,Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from  '../reducers'
import UserInfo from './userInfo.jsx'

const store=createStore(reducer,applyMiddleware(thunk))
function Home (){
	return <Provider store={store}><div><UserInfo></UserInfo></div></Provider>
}

export default Home