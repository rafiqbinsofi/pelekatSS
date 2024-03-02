$(document).ready(function () {
    // Function to fetch images from the 'images' folder
    function fetchImages() {
        return $.ajax({
            url: 'images', // Adjust the path accordingly
            dataType: 'json'
        })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.error('Error fetching images:', textStatus, errorThrown);
                // Handle the error here, such as displaying an error message to the user
            });
    }

    // Function to create and append image elements to the gallery
    function createImageElements(images) {
        const gallery = $('#imageGallery');

        images.forEach(image => {
            const imgContainer = $('<div class="img-container">');
            const imgElement = $('<img>');
            imgElement.attr('src', `./images/${image}`);
            imgElement.attr('alt', image);
            imgElement.addClass('img-fluid'); // Make images responsive

            imgContainer.append(imgElement);
            gallery.append(imgContainer);

            // Hover effect
            imgContainer.hover(
                function () { // Mouse enter
                    imgElement.addClass('blur');
                    const fileName = $('<div class="file-name">').text(image);
                    imgContainer.append(fileName);
                },
                function () { // Mouse leave
                    imgElement.removeClass('blur');
                    imgContainer.find('.file-name').remove();
                }
            );
        });
    }

    // Fetch images and dynamically add them to the gallery on page load
    fetchImages()
        .done(createImageElements)
        .fail(function (error) {
            console.error('Error fetching images:', error);
        });
});
