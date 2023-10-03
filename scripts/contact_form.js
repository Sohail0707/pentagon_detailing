// scripts/contact_form.js
console.log("script loaded");

$(document).ready(function () {
  $("#contact_form").submit(function (event) {
    event.preventDefault();

    var formData = $(this).serialize();

    $.post("PHP_Forms/formHandler.php", formData, function (response) {
      alert(response); // Handle the server response here
      $("#contact_form")[0].reset();
    });
  });
});
