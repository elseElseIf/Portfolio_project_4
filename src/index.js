window.onload = function () {
  let navButton = document.getElementById("navButton");
  let navButtonImg = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");`;
  let leftАrrow = document.getElementById("slidePrev");
  let rightАrrow = document.getElementById("slideNext");
  let header = document.getElementById("header");
  let navbarIcon = document.getElementById("navbarIcon");
  let navbar = document.getElementById("navbarSupportedContent");
  let navbarBrand = document.getElementById("navbarBrand");
  let videos = [
    "https://www.youtube.com/embed/i7ul4LNTnfI",
    "https://www.youtube.com/embed/3GmCHRj8oHE",
    "https://www.youtube.com/embed/YuCRDlEFaw4",
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
