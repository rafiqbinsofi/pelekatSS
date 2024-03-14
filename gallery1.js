import { imageLink } from "./sampinLine.js";

$(document).ready(function () {
  const gallery = $("#imageGallery");
  let result = imageLink();
  result.forEach((path) => {
    const imgContainer = $('<div class="img-container col-md-4">');
    const imgElement = $("<img>");
    imgElement.attr("src", "images/" + path + ".jpeg");
    imgElement.attr("alt", "image");
    imgElement.addClass("img-fluid");
    imgElement.css({
      width: "600px", // Adjust the width as needed
      height: "400px", // Adjust the height as needed
    });
    const divider = $('<div class="divider" style="margin-bottom:5.8%;">');

    imgContainer.append(imgElement);
    imgContainer.append(divider);

    gallery.append(imgContainer);

    // Hover effect
    imgContainer.hover(
      function () {
        // Mouse enter
        imgElement.addClass("blur");
        const fileName = $('<div class="file-name">').text(path);
        imgContainer.append(fileName);
      },
      function () {
        // Mouse leave
        imgElement.removeClass("blur");
        imgContainer.find(".file-name").remove();
      }
    );
  });
});
