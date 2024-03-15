$(document).ready(function () {
  const gallery = $("#imageGallery");
  let result = [];
  let limit;
  // Change samping Line here
  for (let letter of ["B"]) {
    // Change limit to represent the number of sampin in each line
    switch (letter) {
      case "B":
        limit = 8;
        break;
    }
    for (let number = 1; number <= limit; number++) {
      result.push(letter + number);
    }
  }
  result.forEach((path) => {
    const imgContainer = $('<div class="img-container col-md-4">');
    const imgElement = $("<img>");
    imgElement.attr("src", "images/" + path + ".jpg");
    imgElement.attr("alt", "image");
    imgElement.addClass("img-fluid");
    imgElement.css({
      width: "600px", // Adjust the width as needed
      height: "440px", // Adjust the height as needed
    });
    const textbox = $('<div class="text-box">');
    textbox.css({
      border: "1px solid #F9E79F",
      padding: "10px",
      width: "80%",
      height: "13%",
      margin: "0 auto",
      backgroundColor: "#FFFDD0",
    });
    const text = $("<p>");
    text.text(path);
    text.css({
      color: "#706f42",
      fontfamily: "Arial",
      fontSize: "1.5rem",
      textAlign: "center",
    });
    textbox.append(text);

    imgContainer.append(imgElement);
    imgContainer.append(textbox);
    gallery.append(imgContainer);
  });
});
