var sessions = JSON.parse(localStorage.getItem('sessionsLS')) || [
	['sessions #0', []]
];
var curSes;

// LOAD AND SET CURRENT SESSION
function loadSession(sessionNum) {
	this.sessionNum = sessionNum;
	curSes = this.sessionNum;
	updateSession();
}

// REMOVE TIME
function removeItem(idNum) {
	this.idNum = idNum;
	sessions[curSes][1].splice(this.idNum, 1);
	updateSession();
}

// UPDATE CURRENT SESSION
function updateSession() {
	// SET LOCAL STORAGE
	localStorage.setItem('sessionsLS', JSON.stringify(sessions));
	localStorage.setItem('curSesLS', +curSes);

	// TIME TABLE
	if (sessions[curSes][1].length > 0) {
		document.getElementById('sessioninfo').innerHTML = '<table id="sessionItem"><tr class="sessiontableheader"><td><td>ID<td>time<td>scramble<td>notes';
	} else {
		document.getElementById('sessioninfo').innerHTML = '';
	}
	// ADD TIME INFO
	document.getElementById('currentSession').innerHTML = sessions[curSes][0];
	document.getElementById('sessionname').value = sessions[curSes][0];
	for (var f = 0; f < sessions[curSes][1].length; f ++) {
		document.getElementById('sessionItem').innerHTML += '<tr id="item' + f + '">';
		document.getElementById('item' + f).innerHTML += '<td><span class="removeItem" onclick="removeItem(' + f + ')" title="Remove ID ' + f + '">&times</span><td>' + f + '<td>' + convertTime(sessions[curSes][1][f][0]) + '<td><span class="scramText">' + sessions[curSes][1][f][1] + '</span><td>' + sessions[curSes][1][f][2];
	}
	document.getElementById('sessioninfo').innerHTML += '</table>';
	document.getElementById('sessionList').innerHTML = '';
	for (var n = 0; n < sessions.length; n ++) {
		if (n === curSes) {
			document.getElementById('sessionList').innerHTML += '<option value="' + n + '" selected>' + sessions[n][0] + '</option>';
		} else {
			document.getElementById('sessionList').innerHTML += '<option value="' + n + '">' + sessions[n][0] + '</option>';
		}
	}
}

// CHANGE CURRENT SESSION
document.getElementById('sessionList').onchange = function () {
	loadSession(+document.getElementById('sessionList').value);
};

// CHANGE SESSION NAME
document.getElementById('sessionname').onmousedown = function () {
	optionOpen = true;
};
document.getElementById('sessionname').onchange = function () {
	sessions[curSes][0] = document.getElementById('sessionname').value;
	document.getElementById('currentSession').innerHTML = sessions[curSes][0];
	optionOpen = false;
	updateSession();
};

// ADD SESSION
document.getElementById('addSes').onclick = function () {
	sessions[sessions.length] = ['sessions #' + (sessions.length - 1), []];
	updateSession();
};

// REMOVE SESSION
document.getElementById('removeSes').onclick = function () {
	if (sessions.length === 1) {
		alert('You need to have at least one session');
	} else {
		var removeSesCon = confirm('Are you sure you want to remove this session?');
		if (removeSesCon) {
			sessions.splice(curSes, 1);
			if (sessions[curSes - 1] === undefined) {
				curSes = 0;
			} else {
				curSes -= 1;
			}
		}
	}
	updateSession();
};