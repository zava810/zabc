////UTIL FUNCTIONS BELOW
function SetValues()
{
    var s = 'X=' + window.event.clientX +  ' Y=' + window.event.clientY ;
	window.status = s;
}
////UTIL FUNCTIONS ABOVE
function toHex(){
	var ret = "";
	for ( var i = 0; i < arguments[0].length; i++ )
    //alert(arguments.length);
    ret += (arguments[0][i] < 16 ? "0" : "") + arguments[0][i].toString(16);
	return ret.toUpperCase();
}
////GRAPHICS API BELOW
