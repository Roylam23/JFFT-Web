
var ua = navigator.userAgent || navigator.vendor || window.opera;
var isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;

if (document.documentElement.classList ){
	if (isInstagram) {
		alert("建議使用Safari, Chrome等瀏覽器瀏覽以達致最佳觀賞效果")
	}
}