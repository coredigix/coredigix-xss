var $$log = document.getElementById('targetLog');
function logMsg(level, msg){
	var dev	= document.createElement('li');
	dev.className  = level;
	dev.innerText = msg;
	$$log.appendChild(dev)
}

var log = {
	title	: msg => logMsg('title', msg),
	debug	: msg => logMsg('debug', msg),
	error	: msg => logMsg('error', msg),
	warn	: msg => logMsg('warn', msg),
	success	: msg => logMsg('success', msg),
}

function assert(predicat, message){
	if(predicat) log.success(message + ': success');
	else log.error(message + ': fails');
}

function title(title){
	var h1 = document.createElement('h1');
	h1.innerText = title;
	document.body.append(h1);
}

function title2(title){
	var h1 = document.createElement('h2');
	h1.innerText = title;
	document.body.append(h1);
}

function addResult(data){
	var pre1 = document.createElement('pre');
	pre1.className = 'origine';
	pre1.innerText = data;
	document.body.appendChild(pre1);
}

function error(data){
	if(data instanceof Error)
		data = 'message: ' + data.message + "\nStack: " + data.stack;
	else data = JSON.stringify(data);

	var pre1 = document.createElement('pre');
	pre1.className = 'error';
	pre1.innerText = data;
	document.body.appendChild(pre1);

}