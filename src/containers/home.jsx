import React from 'react';
import {Connect} from 'react-redux';
import UserInfo from './userInfo.jsx'


function Home (){
	console.log('Home update')
	return <div><UserInfo></UserInfo></div>
}

export default Home