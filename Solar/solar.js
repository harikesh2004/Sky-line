function showAdditionalFields(radio) {
    var additionalFields = document.getElementById("additionalFields");
    if (radio.value === "yes") {
        additionalFields.style.display = "block";
    } else {
        additionalFields.style.display = "none";
    }
}

document.getElementById("weatherIcon").addEventListener("click", function() {
alert("Fetching local weather details...");
// You can include your code here to fetch actual weather data from an API
// and display it instead of a mock alert message.
});