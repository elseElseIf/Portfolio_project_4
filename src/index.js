window.onload = function () {
  let navButton = document.getElementById("navButton");
  let leftАrrow = document.getElementById("slidePrev");
  let rightАrrow = document.getElementById("slideNext");
  let header = document.getElementById("header");
  let navbar = document.getElementById("navbarSupportedContent");
  let navbarBrand = document.getElementById("navbarBrand");
  const videos = document.querySelectorAll(".video");

  let videosData = [
    "https://youtu.be/i7ul4LNTnfI",
    "https://youtu.be/3GmCHRj8oHE",
    "https://youtu.be/YuCRDlEFaw4",
  ];
  navButton.addEventListener("click", () => {
    navbar.classList.toggle("close-nav");
    if (navbar.classList.contains("close-nav")) {
      document.body.classList.add("hidden");
      header.style.height = "100%";
      navbarBrand.style.opacity = "0";
      navButton.style.background = "blanchedalmond";
    } else {
      document.body.classList.remove("hidden");
      header.style.height = "0%";
      navbarBrand.style.opacity = "1";
      navButton.style.background = "white";
    }
  });

  leftАrrow.addEventListener("click", () => {
    if (
      document.getElementById("video1").getAttribute("data-video") ==
      videosData[0]
    ) {
      document
        .getElementById("video1")
        .setAttribute("data-video", videosData[1]);
      document
        .getElementById("video2")
        .setAttribute("data-video", videosData[2]);
      document
        .getElementById("video3")
        .setAttribute("data-video", videosData[0]);
    } else if (
      document.getElementById("video1").getAttribute("data-video") ==
      videosData[1]
    ) {
      document
        .getElementById("video1")
        .setAttribute("data-video", videosData[2]);
      document
        .getElementById("video2")
        .setAttribute("data-video", videosData[0]);
      document
        .getElementById("video3")
        .setAttribute("data-video", videosData[1]);
    } else if (
      document.getElementById("video1").getAttribute("data-video") ==
      videosData[2]
    ) {
      document
        .getElementById("video1")
        .setAttribute("data-video", videosData[0]);
      document
        .getElementById("video2")
        .setAttribute("data-video", videosData[1]);
      document
        .getElementById("video3")
        .setAttribute("data-video", videosData[2]);
    }
    addVideo(videos);
  });

  rightАrrow.addEventListener("click", () => {
    if (
      document.getElementById("video1").getAttribute("data-video") ==
      videosData[0]
    ) {
      document
        .getElementById("video1")
        .setAttribute("data-video", videosData[2]);
      document
        .getElementById("video2")
        .setAttribute("data-video", videosData[0]);
      document
        .getElementById("video3")
        .setAttribute("data-video", videosData[1]);
    } else if (
      document.getElementById("video1").getAttribute("data-video") ==
      videosData[1]
    ) {
      document
        .getElementById("video1")
        .setAttribute("data-video", videosData[0]);
      document
        .getElementById("video2")
        .setAttribute("data-video", videosData[1]);
      document
        .getElementById("video3")
        .setAttribute("data-video", videosData[2]);
    } else if (
      document.getElementById("video1").getAttribute("data-video") ==
      videosData[2]
    ) {
      document
        .getElementById("video1")
        .setAttribute("data-video", videosData[1]);
      document
        .getElementById("video2")
        .setAttribute("data-video", videosData[2]);
      document
        .getElementById("video3")
        .setAttribute("data-video", videosData[0]);
    }
    addVideo(videos);
  });
  // generate video url
  let generateUrl = function (id) {
    let query = "?rel=0&showinfo=0&autoplay=1";

    return "https://www.youtube.com/embed/" + id + query;
  };

  // creating iframe
  let createIframe = function (id) {
    let iframe = document.createElement("iframe");

    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("allow", "autoplay; encrypted-media");
    iframe.setAttribute("src", generateUrl(id));

    return iframe;
  };
  // main code
  let addVideo = function (videos) {
    videos.forEach((el) => {
      let videoHref = el.getAttribute("data-video");

      let deletedLength = "https://youtu.be/".length;

      let videoId = videoHref.substring(deletedLength, videoHref.length);

      let img = el.querySelector("img");
      let youtubeImgSrc =
        "https://i.ytimg.com/vi/" + videoId + "/maxresdefault.jpg";
      img.setAttribute("src", youtubeImgSrc);

      el.addEventListener("click", (e) => {
        e.preventDefault();

        let iframe = createIframe(videoId);
        el.querySelector("img").remove();
        el.appendChild(iframe);
        el.querySelector("button").remove();
      });
    });
  };
  addVideo(videos);
};
