window.addEventListener("DOMContentLoaded", function () {
  const modelAsset = document.querySelector("#my-3d-model");

  modelAsset.addEventListener("loaded", () => {
    console.log("3D model loaded");
  });

  modelAsset.addEventListener("error", (event) => {
    console.error("Error loading 3D model:", event.detail);
  });
});

