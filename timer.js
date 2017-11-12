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
		h = Math.floor(curTime / 100 / 60 / 60);
		if (h < 10) {
			h = '0' + h;
		}
		if (h == 0) {
			h = '';
		} else {
			h = h + ':';
		}
		m = Math.floor(curTime / 100 / 60 % 60);
		if (m < 10 && h != 0) {
			m = '0' + m;
		}
		if (m == 0) {
			m = '';
		} else {
			m = m + ':';
		}
		s = Math.floor(curTime / 100 % 60);
		if (s < 10 && m != 0) {
			s = '0' + s;
		}
		l = curTime % 100;
		if (l < 10) {
			l = '0' + l;
		}
		document.getElementById('time').innerHTML = h + '' + m + '' + s + '.' + l;
	}, 10);
}