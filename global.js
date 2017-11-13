var key;
var newUser = localStorage.getItem('newUserLS') || true;

window.onload = function () {
	optionSel(0);
	showScramType();
	curSes = +localStorage.getItem('curSesLS') || 0;
	loadSession(curSes);
	if (newUser === true) {
		alert('NOTICE:\n\nThis is still very early in development!\nThere is many features that are not added, but are planned to be!\n\nCubio is not optimized or tested on any other browser execpt chrome (for now).');
		localStorage.setItem('newUserLS', false);
	}
};
