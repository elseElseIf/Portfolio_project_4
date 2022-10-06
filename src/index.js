const { App } = require("./js components/app");

window.onload = function () {
  const app = new App();

  let newContainer = document.createElement("div");
  newContainer.id = "mainContainer";
  newContainer.classList.add("container");
  document.body.appendChild(newContainer);

  newContainer.innerHTML = app.render();
};
