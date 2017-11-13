var curInspectTime, inspectionTimer, mainTimer, h, m, s, l;

var timerEvent = 32;
var inspection = true;
var inspectionStart = false;
var inspectionTime = 15;

var timerStart = false;
var timerStopped = false;
var curTime = 0;

// EVENT LISTENERS
window.addEventListener('keydown', function (event) {
	key = event.keyCode;
	if (key == timerEvent && !optionOpen) {
		if (timerStart) {
			timerStart = false;
			clearInterval(mainTimer);
			timerStopped = true;
			sessions[curSes][1].push([curTime, document.getElementById('scramble').innerHTML, '']);
			updateSession();
			curTime = 0;
		}
	}
});
window.addEventListener('keyup', function (event) {
	key = event.keyCode;
	if (key == timerEvent && !optionOpen) {
		if (!timerStopped) {
			inspection = document.getElementById('inspectioncb').checked;
			inspectionTime = document.getElementById('inspectionTime').value;
			if (inspection && !inspectionStart) {
				startInspection();
			} else if (inspectionStart) {
				clearInterval(inspectionTimer);
				startTimer();
			} else {
				startTimer();
			}
		} else {
			timerStopped = false;
		}
	}
});

// INSPECTION
function startInspection() {
	inspectionStart = true;
	curInspectTime = inspectionTime;
	document.getElementById('time').innerHTML = curInspectTime;
	inspectionTimer = setInterval(function () {
		curInspectTime -= 1;
		if (curInspectTime == -1) {
			clearInterval(inspectionTimer);
			startTimer();
		} else {
			document.getElementById('time').innerHTML = curInspectTime;
		}
	}, 1000);
}

// TIME
function startTimer() {
	timerStart = true;
	inspectionStart = false;
	mainTimer = setInterval(function () {
		curTime += 1;
		document.getElementById('time').innerHTML = convertTime(curTime);
	}, 10);
}

// CONVERT NUMBER TO TIME
function convertTime(inTime) {
	this.inTime = inTime;
	var inH = Math.floor(inTime / 100 / 60 / 60);
	if (inH === 0) {
		inH = '';
	}
	if (inH < 10) {
		inH = '0' + inH;
	}
	if (inH == 0) {
		inH = '';
	} else {
		inH = inH + ':';
	}
	var inM = Math.floor(inTime / 100 / 60 % 60);
	if (inM === 0) {
		inM = '';
	}
	if (inM < 10 && inH != 0) {
		inM = '0' + inM;
	}
	if (inM == 0) {
		inM = '';
	} else {
		inM = inM + ':';
	}
	var inS = Math.floor(inTime / 100 % 60);
	if (inS < 10 && inM != 0) {
		inS = '0' + inS;
	}
	var inL = inTime % 100;
	if (inL < 10) {
		inL = '0' + inL;
	}
	return inH + '' + inM + '' + inS + '.' + inL;
}