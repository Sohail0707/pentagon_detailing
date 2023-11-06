// scripts/contact_form.js

$(document).ready(function () {
  $("#contact_form").submit(function (event) {
    event.preventDefault();

    // Show the loading animation when the form is submitted.
    document.querySelector(".loading_back").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";

    var formData = $(this).serialize();

    $.post("PHP_Forms/formHandler.php", formData, function (response) {
      // Hide the loading animation
      document.querySelector(".loading_back").style.display = "none";
      document.querySelector("body").style.overflow = "auto";

      // Use a timeout to allow the browser to hide the loading animation before showing the alert.
      setTimeout(function () {
        alert(response); // Handle the server response here
        $("#contact_form")[0].reset();
      }, 30); // 30 milliseconds should be enough, but you can adjust this if needed.
    });
  });
});
