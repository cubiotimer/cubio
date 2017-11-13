var newScramKey = 13;
var curAlg = [];

var scramLen = [11, 20, 45, 60, 80, 100, 11, 11, 10, 77, 12];
var scramNot = [
	['$:F,R,U,F\',R\',U\',F2,R2,U2\n\n@a{0}[e](n11)\n\n%a'],
	['$:F,B,R,L,U,D,F\',B\',R\',L\',U\',D\',F2,B2,R2,L2,U2,D2\n\n@a{0}[e](n20)\n\n%a'],
	['$:F,B,R,L,U,D,F\',B\',R\',L\',U\',D\',F2,B2,R2,L2,U2,D2,Fw,Bw,Rw,Lw,Uw,Dw,Fw\',Bw\',Rw\',Lw\',Uw\',Dw\',Fw2,Bw2,Rw2,Lw2,Uw2,Dw2\n\n@a{0}[e](n45)\n\n%a'],
	['F', 'B', 'R', 'L', 'U', 'D', 'F\'', 'B\'', 'R\'', 'L\'', 'U\'', 'D\'', 'F2', 'B2', 'R2', 'L2', 'U2', 'D2', 'Fw', 'Bw', 'Rw', 'Lw', 'Uw', 'Dw', 'Fw\'', 'Bw\'', 'Rw\'', 'Lw\'', 'Uw\'', 'Dw\'', 'Fw2', 'Bw2', 'Rw2', 'Lw2', 'Uw2', 'Dw2', '\n\nin development'],
	['F', 'B', 'R', 'L', 'U', 'D', 'F\'', 'B\'', 'R\'', 'L\'', 'U\'', 'D\'', 'F2', 'B2', 'R2', 'L2', 'U2', 'D2', 'Fw', 'Bw', 'Rw', 'Lw', 'Uw', 'Dw', 'Fw\'', 'Bw\'', 'Rw\'', 'Lw\'', 'Uw\'', 'Dw\'', 'Fw2', 'Bw2', 'Rw2', 'Lw2', 'Uw2', 'Dw2', '3Fw', '3Bw', '3Rw', '3Lw', '3Uw', '3Dw', '3Fw\'', '3Bw\'', '3Rw\'', '3Lw\'', '3Uw\'', '3Dw\'', '3Fw2', '3Bw2', '3Rw2', '3Lw2', '3Uw2', '3Dw2', '\n\nin development'],
	['F', 'B', 'R', 'L', 'U', 'D', 'F\'', 'B\'', 'R\'', 'L\'', 'U\'', 'D\'', 'F2', 'B2', 'R2', 'L2', 'U2', 'D2', 'Fw', 'Bw', 'Rw', 'Lw', 'Uw', 'Dw', 'Fw\'', 'Bw\'', 'Rw\'', 'Lw\'', 'Uw\'', 'Dw\'', 'Fw2', 'Bw2', 'Rw2', 'Lw2', 'Uw2', 'Dw2', '3Fw', '3Bw', '3Rw', '3Lw', '3Uw', '3Dw', '3Fw\'', '3Bw\'', '3Rw\'', '3Lw\'', '3Uw\'', '3Dw\'', '3Fw2', '3Bw2', '3Rw2', '3Lw2', '3Uw2', '3Dw2', '\n\nin development'],
	['$:B,R,L,U,B\',R\',L\',U\'\n\n@a{0}[e](n11)\n\n%a'],
	['$:B,R,L,U,B\',R\',L\',U\'\n$:b,r,l,u,b\',r\',l\',u\'\n\n@a{0}[e](n11)\n@b{1}[e](s0-4)\n\n%ab'],
	['in development'],
	['$:R++,R--\n$:D++,D--\n$:U,U\'\n\n@r{0}[e](n1)\n@d{1}[e](n1)\n@u{2}[e](n1)\n\n%rdrdrdrdrdurdrdrdrdrdurdrdrdrdrdurdrdrdrdrdurdrdrdrdrdurdrdrdrdrdurdrdrdrdrdu'],
	['$:UR5-,UR4-,UR3-,UR2-,UR1-,UR0,UR1+,UR2+,UR3+,UR4+,UR5+,UR6\n$:DR5-,DR4-,DR3-,DR2-,DR1-,DR0,DR1+,DR2+,DR3+,DR4+,DR5+,DR6\n$:UL5-,UL4-,UL3-,UL2-,UL1-,UL0,UL1+,UL2+,UL3+,UL4+,U:5+,UL6\n$:DL5-,DL4-,DL3-,DL2-,DL1-,DL0,DL1+,DL2+,DL3+,DL4+,DL5+,DL6\n$:U5-,U4-,U3-,U2-,U1-,U0,U1+,U2+,U3+,U4+,U5+,U6\n$:R5-,R4-,R3-,R2-,R1-,R0,R1+,R2+,R3+,R4+,R5+,R6\n$:D5-,D4-,D3-,D2-,D1-,D0,D1+,D2+,D3+,D4+,D5+,D6\n$:L5-,L4-,L3-,L2-,L1-,L0,L1+,L2+,L3+,L4+,L5+,L6\n$:ALL5-,ALL4-,ALL3-,ALL2-,ALL1-,ALL0,ALL1+,ALL2+,ALL3+,ALL4+,ALL5+,ALL6\n$:UR,DR,DL,UL\n$:y2\n\n@n{0}[e](n1)\n@o{1}[e](n1)\n@p{2}[e](n1)\n@q{3}[e](n1)\n@u{4}[e](n1)\n@r{5}[e](n1)\n@d{6}[e](n1)\n@l{7}[e](n1)\n@a{8}[e](n1)\n@t{9}[e](s0-4)\n@y{10}[0](l)\n\n%nopqurdlayurdlat']
];

document.getElementById('helpButton').onclick = function () {
	window.open('scramblehelp.html');
};

document.getElementById('scramType').onchange = function () {
	showScramType();
};

function showScramType() {
	document.getElementById('scramCode').value = scramNot[document.getElementById('scramType').value];
}

window.addEventListener('keydown', function (event) {
	if (event.keyCode === newScramKey && !optionOpen && !timerStart) {
		newScramble();
	}
});

var scrambleCode;
var arrays;
var variables;
var patterns;
var scrambleOut = [];
function newScramble() {
	scrambleCode = document.getElementById('scramCode').value.split('\n');
	arrays = [];
	variables = [];
	patterns = [];
	scrambleOut = [];
	for (var s = 0; s < scrambleCode.length; s ++) {
		if (scrambleCode[s] == '') {
			scrambleCode.splice(s, 1);
			s -= 1;
		} else {
			scrambleCode[s] = scrambleCode[s].split(' ').join('');
			if (scrambleCode[s].split('')[0] === '$') {
				arrays[arrays.length] = scrambleCode[s].split(':')[1].split(',');
			} else if (scrambleCode[s].split('')[0] === '@') {
				variables[variables.length] = [];
				variables[variables.length - 1][0] = scrambleCode[s].split('')[1];
				variables[variables.length - 1][1] = scrambleCode[s].split('{')[1].split('}')[0];
				variables[variables.length - 1][2] = scrambleCode[s].split('[')[1].split(']')[0];
				variables[variables.length - 1][3] = scrambleCode[s].split('(')[1].split(')')[0];
			} else if (scrambleCode[s].split('')[0] === '%') {
				patterns[patterns.length] = scrambleCode[s].split('%')[1].split('');
			}
		}
	}
	for (var p = 0; p < patterns.length; p ++) {
		for (var p2 = 0; p2 < patterns[p].length; p2 ++) {
			for (var pv = 0; pv < variables.length; pv ++) {
				if (patterns[p][p2] === variables[pv][0]) {
					var arrayNot = arrays[variables[pv][1]];
					var curArray = [];
					if (variables[pv][2] === 'e') {
						curArray = arrayNot;
					} else {
						for (var c = 0; c < variables[pv][2].split(',').length; c ++) {
							curArray[c] = arrayNot[variables[pv][2].split(',')[c]];
						}
					}
					if (variables[pv][3].split('')[0] === 'l') {
						for (var l = 0; l < curArray.length; l ++) {
							scrambleOut[scrambleOut.length] = curArray[l];
						}
					} else if (variables[pv][3].split('')[0] === 'n') {
						for (var n = 0; n < +variables[pv][3].split('n')[1]; n ++) {
							var ran = Math.floor(Math.random() * curArray.length);
							scrambleOut[scrambleOut.length] = curArray[ran];
							if (n >= 1) {
								if (scrambleOut[scrambleOut.length - 1].split('')[0] === scrambleOut[scrambleOut.length - 2].split('')[0]) {
									scrambleOut.splice(scrambleOut.length - 1, 1);
									n -= 1;
								}
							}
						}
					} else if (variables[pv][3].split('')[0] === 'o') {
						return true;
					} else if (variables[pv][3].split('')[0] === 'r') {
						return true;
					} else if (variables[pv][3].split('')[0] === 's') {
						var min = +variables[pv][3].split('s')[1].split('-')[0];
						var max = +variables[pv][3].split('s')[1].split('-')[1] + 1;
						var ranLen = Math.floor(Math.random() * (max - min));
						for (var n = 0; n < ranLen; n ++) {
							var ran = Math.floor(Math.random() * curArray.length);
							scrambleOut[scrambleOut.length] = curArray[ran];
							if (n >= 1) {
								if (scrambleOut[scrambleOut.length - 1].split('')[0] === scrambleOut[scrambleOut.length - 2].split('')[0]) {
									scrambleOut.splice(scrambleOut.length - 1, 1);
									n -= 1;
								}
							}
						}
					} else {
						codeError(variables[pv][3].split('')[0] + ' is an unknown scramble type');
					}
				}
			}
		}
	}
	document.getElementById('scramble').innerHTML = '';
	for (var so = 0; so < scrambleOut.length; so ++) {
		document.getElementById('scramble').innerHTML += scrambleOut[so] + ' ';
	}
}

function codeError(text) {
	this.text = text;
	alert('CODE ERROR\n' + this.text);
}