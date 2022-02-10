var height;
var preScroll = 0;
var isLow = false;
function resizeCon() {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.visualViewport.height}px`
  );
}
resizeCon();
height = window.visualViewport.height;
console.log(
  "%c%s",
  "border-radius: 6px; padding: 8px; color: #ffffff; background: #4801ff;",
  "✨ Developed by: RL — https://jfft.pages.dev"
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let registration of registrations) {
        registration.unregister().then((bool) => {
          console.log("unregister: ", bool);
        });
      }
    });
  });
}

function handleScroll() {
  var scrollY = window.scrollY;
  if (scrollY > preScroll + 30) {
    document.querySelector("#nav").classList.add("hidden");
    preScroll = scrollY;
  } else if (scrollY < preScroll && scrollY > 0) {
    document.querySelector("#nav").classList.remove("hidden");
    preScroll = scrollY;
  }
  //Nav transparent black
  if (scrollY > 0) {
    document.querySelector("#nav").classList.add("black");
  } else if (scrollY == 0) {
    document.querySelector("#nav").classList.remove("black");
  }

  resizeCon();
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", resizeCon);
document.addEventListener("load", resizeCon);
