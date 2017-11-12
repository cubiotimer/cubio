var animationTime = 0.4;
var optionOpen = false;

// OPEN OPTION MENU
document.getElementById('options').onclick = function () {
	showOpt();
};
function showOpt() {
	document.getElementsByClassName('optionback')[0].style.display = 'initial';
	document.getElementsByClassName('optionbody')[0].style.animation = animationTime + 's slidedown forwards';
	optionOpen = true;
}

// CLOSE OPTION MENU
var backClick = false;
document.getElementsByClassName('optionback')[0].onclick = function () {
	if (!backClick) {
		hideOpt();
	} else {
		backClick = false;
	}
};
document.getElementsByClassName('optionbody')[0].onclick = function () {
	backClick = true;
};
function hideOpt() {
	document.getElementsByClassName('optionbody')[0].style.animation = animationTime + 's slideup forwards';
	setTimeout(function () {
		document.getElementsByClassName('optionback')[0].style.display = 'none';
	}, animationTime * 1000);
	optionOpen = false;
}

// CLOSE TAB
document.getElementsByClassName('closeoption')[0].onclick = function () {
	hideOpt();	
};

// CLICK OPTION LIST
function optionSel(num) {
	this.num = num;
	for (var l = 0; l < document.getElementsByClassName('contopt').length; l ++) {
		document.getElementsByClassName('contopt')[l].style.display = 'none';
	}
	document.getElementById('contopt' + this.num).style.display = 'initial';
}