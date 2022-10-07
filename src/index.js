const { App } = require("./js components/app");

window.onload = function () {
  // const app = new App();

  // let newContainer = document.createElement("div");
  // newContainer.id = "mainContainer";
  // newContainer.classList.add("container");
  // document.body.appendChild(newContainer);

  // newContainer.innerHTML = app.render();

  let navButton = document.getElementById("navButton");

  let leftАrrow = document.getElementById("slidePrev");
  let rightАrrow = document.getElementById("slideNext");
  let carouselItems = document.getElementsByClassName("carousel-item");
  const videoCards = document.getElementById("videoCard");
  let videos = [
    "https://www.youtube.com/embed/i7ul4LNTnfI",
    "https://www.youtube.com/embed/3GmCHRj8oHE",
    "https://www.youtube.com/embed/YuCRDlEFaw4",
  ];

  navButton.addEventListener("click", () => {
    alert("sorry, but not today");
  });

  leftАrrow.addEventListener("click", () => {
    if (document.getElementById("video1").src == videos[0]) {
      document.getElementById("video1").src = videos[1];
      document.getElementById("video2").src = videos[2];
      document.getElementById("video3").src = videos[0];
    } else if (document.getElementById("video1").src == videos[1]) {
      document.getElementById("video1").src = videos[2];
      document.getElementById("video2").src = videos[0];
      document.getElementById("video3").src = videos[1];
    } else if (document.getElementById("video1").src == videos[2]) {
      document.getElementById("video1").src = videos[0];
      document.getElementById("video2").src = videos[1];
      document.getElementById("video3").src = videos[2];
    }
  });

  rightАrrow.addEventListener("click", () => {
    if (document.getElementById("video1").src == videos[0]) {
      document.getElementById("video1").src = videos[2];
      document.getElementById("video2").src = videos[0];
      document.getElementById("video3").src = videos[1];
    } else if (document.getElementById("video1").src == videos[1]) {
      document.getElementById("video1").src = videos[0];
      document.getElementById("video2").src = videos[1];
      document.getElementById("video3").src = videos[2];
    } else if (document.getElementById("video1").src == videos[2]) {
      document.getElementById("video1").src = videos[1];
      document.getElementById("video2").src = videos[2];
      document.getElementById("video3").src = videos[0];
    }
  });
};
