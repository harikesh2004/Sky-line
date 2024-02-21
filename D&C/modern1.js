function toggleFields() {
    var uploadImages = document.getElementById("uploadImages");
    var provideDescriptions = document.getElementById("provideDescriptions");
    var imageUpload = document.getElementById("imageUpload");
    var descriptionTextarea = document.getElementById("descriptionTextarea");

    if (uploadImages.checked) {
        imageUpload.style.display = "block";
    } else {
        imageUpload.style.display = "none";
    }

    if (provideDescriptions.checked) {
        descriptionTextarea.style.display = "block";
    } else {
        descriptionTextarea.style.display = "none";
    }
}


function limitFiles(input, maxFiles) {
if (input.files.length > maxFiles) {
    alert("You can only upload up to " + maxFiles + " files.");
    input.value = ''; // Reset the file input
}
}