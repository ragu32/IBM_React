export const Helper = (() => {
	let actionReturnType =  (actionType,value) => {
		return {
			type : actionType,
			payload : value
		};
	};
    
	return{
		actionReturnType : actionReturnType
	};
})();
