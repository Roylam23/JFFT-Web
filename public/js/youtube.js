function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player("player", {
    videoId: "337wko5AmKY", // YouTube 影片ID
    playerVars: {
      autoplay: 1, // 自動播放影片
      controls: 0, // 顯示播放器
      showinfo: 0, // 隱藏影片標題
      modestbranding: 0, // 隱藏YouTube Logo
      loop: 1, // 重覆播放
      fs: 0, // 隱藏全螢幕按鈕
      cc_load_policty: 0, // 隱藏字幕
      iv_load_policy: 3, // 隱藏影片註解
      autohide: 0, // 影片播放時，隱藏影片控制列
    },
    events: {
      onReady: function (e) {
        e.target.mute(); //播放時靜音
        e.target.playVideo(); //強制播放(手機才會自動播放，但僅限於Android)
      },
    },
  });
}
