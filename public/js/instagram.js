
var ua = navigator.userAgent || navigator.vendor || window.opera;
var isSafari = (ua.indexOf('Safari') > -1) ? true : false;
var isWebkit = (ua.indexOf('Webkit') > -1) ? true : false;

if (document.documentElement.classList ){
	if (isWebkit && !isSafari) {
		alert("建議使用Safari, Chrome等瀏覽器瀏覽以達致最佳觀賞效果")
	}
}