var str = navigator.userAgent;
var i = str.indexOf("Instagram");
if (i != -1) {
  document.write(
    '<div className={styles.insta}><img className={styles.noticeImg} src="/jffticon.png"></img><span>建議使用Safari, Chrome等瀏覽器瀏覽以達致最佳觀賞效果</span></div>'
  );
  window.stop();
}
