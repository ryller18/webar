window.addEventListener("DOMContentLoaded", function () {
  const model = document.querySelector("#model");

  model.addEventListener("model-loaded", () => {
    console.log("3D model loaded");
  });
});
