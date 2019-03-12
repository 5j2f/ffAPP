
 const change = (store={},action) =>{
	if(action.key){
		return {
			...store,
			key11:action.key
		}
	}
}
export default change