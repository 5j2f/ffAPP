
// export const getChange =(value)=>({
// 	type:'getChange',
// 	key:value
// })
// export const getChange=value=>(getstate,dispatch)=>{
// 	console.log(gestate)
// }

export const getChange=value=>{
	return (dispatch,getstate)=>{
			// console.log(getstate)
			dispatch({
				type:'getVlue',
				key:value
			})
		}
}
export const testReduxOnly=value=>({
	type:'reduxOnly',
	key:value
})