$(document).ready(function () {
  let result = [];
  for (let letter of ["A", "B", "C", "D", "E", "F", "G", "H", "J"]) {
    for (let number = 1; number <= 10; number++) {
      result.push(letter + number);
    }
  }

  const gallery = $("#imageGallery");


  result.forEach((path) => {
    const imgContainer = $('<div class="img-container col-md-4">');
    const imgElement = $("<img>");
    imgElement.attr("src", "images/" + path + ".jpg");
    imgElement.attr("alt", "image");
    imgElement.addClass("img-fluid");
    imgElement.css({
      width: "600px", // Adjust the width as needed
      height: "400px", // Adjust the height as needed
    });

    imgContainer.append(imgElement);
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
