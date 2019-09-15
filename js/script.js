function copyText(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
}

// $(document).ready(function() {
//   $('pre code').each(function(i, block) {
//     hljs.highlightBlock(block);
//   });
// });


var buttons = document.getElementsByTagName('button');
Array.prototype.forEach.call(buttons, function (b) {
	b.addEventListener('click', createRipple);
});
function createRipple(e) {
	var circle = document.createElement('div');
	this.appendChild(circle);
	var d = Math.max(this.clientWidth, this.clientHeight);
	circle.style.width = circle.style.height = d + 'px';

	var rect = this.getBoundingClientRect();
	circle.style.left = e.clientX - rect.left - d / 2 + 'px';
	circle.style.top = e.clientY - rect.top - d / 2 + 'px';

	circle.classList.add('ripple');
}

function modalClose() {
	var body = document.getElementById('body');
	body.style.cssText = "overflow: auto;";


	var overlay = document.getElementById('overlay');
	overlay.style.cssText = "z-index: -2; opacity: 0;";

	var modal = document.getElementsByClassName('modal-frame');
	Array.prototype.forEach.call(modal, function (mf) {
		mf.style.cssText = "z-index: -1; opacity: 0;";
	});

	var modal = document.getElementsByClassName('modal-box');
	Array.prototype.forEach.call(modal, function (mb) {
		mb.style.cssText = "top: -50%; opacity: 0;";
	});
}

function modalCloseRight() {
	var body = document.getElementById('body');
	body.style.cssText = "overflow: auto;";


	var overlay = document.getElementById('overlay');
	overlay.style.cssText = "z-index: -2; opacity: 0;";

	var modal = document.getElementsByClassName('modal-frame');
	Array.prototype.forEach.call(modal, function (mf) {
		mf.style.cssText = "z-index: -1; opacity: 0;";
	});

	var modal = document.getElementsByClassName('modal-box-notification');
	Array.prototype.forEach.call(modal, function (mb) {
		mb.style.cssText = "right: -50%; opacity: 1;";
	});
}

function modalOpen() {
	var body = document.getElementById('body');
	body.style.cssText = "overflow: hidden;";


	var overlay = document.getElementById('overlay');
	overlay.style.cssText = "z-index: 999; opacity: 1;";

	var modal = document.getElementsByClassName('modal-frame');
	Array.prototype.forEach.call(modal, function (mf) {
		mf.style.cssText = "z-index: 999; opacity: 1;";
	});

	var modal = document.getElementsByClassName('modal-box');
	Array.prototype.forEach.call(modal, function (mb) {
		mb.style.cssText = "top: 50%; opacity: 1;";
	});
}

function modalOpenTop() {
	var body = document.getElementById('body');
	body.style.cssText = "overflow: hidden;";


	var overlay = document.getElementById('overlay');
	overlay.style.cssText = "z-index: 999; opacity: 1;";

	var modal = document.getElementsByClassName('modal-frame');
	Array.prototype.forEach.call(modal, function (mf) {
		mf.style.cssText = "z-index: 999; opacity: 1;";
	});

	var modal = document.getElementsByClassName('modal-box');
	Array.prototype.forEach.call(modal, function (mb) {
		mb.style.cssText = "top: 50%; opacity: 1;";
	});
}

function modalOpenRight() {
	// var body = document.getElementById('body');
	// body.style.cssText = "overflow: hidden;";


	// var overlay = document.getElementById('overlay');
	// overlay.style.cssText = "z-index: 999; opacity: 1;";

	var modal = document.getElementsByClassName('modal-frame');
	Array.prototype.forEach.call(modal, function (mf) {
		mf.style.cssText = "z-index: 999; opacity: 1;";
	});

	var modal = document.getElementsByClassName('modal-box-notification');
	Array.prototype.forEach.call(modal, function (mb) {
		mb.style.cssText = "right: 0%; opacity: 1;";
	});
}

// $('i[rel="pre"]').replaceWith(function() {
//     return $('<pre><code>' + $(this).html() + '</code></pre>');
// });
// var pres = document.querySelectorAll('pre,kbd,blockquote');
// for (var i = 0; i < pres.length; i++) {
//   pres[i].addEventListener("dblclick", function () {
//     var selection = getSelection();
//     var range = document.createRange();
//     range.selectNodeContents(this);
//     selection.removeAllRanges();
//     selection.addRange(range);
//   }, false);
// }