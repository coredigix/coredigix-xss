/** is an object empty */
function isObjEmpty(obj){
	for(var i in obj) return true;
	return false;
}