
 const change = (store=[],action) =>{
	if(action.key){
		return [
			...store,
			{
				key:action.key
			}
		]
	}
}
export default change