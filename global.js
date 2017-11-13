var key;

window.onload = function () {
	optionSel(0);
	showScramType();
	curSes = +localStorage.getItem('curSesLS') || 0;
	loadSession(curSes);
};