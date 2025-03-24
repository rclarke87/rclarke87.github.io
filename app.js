document.addEventListener("DOMContentLoaded", function () {
  const hero = document.getElementById("hero");
  const highResImage = new Image();
  highResImage.src = "images/hero.webp";
  highResImage.onload = function () {
    hero.classList.add("loaded");
  };
});

// New code for todays session

// Load DOM before running any code
document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the form element
  const form = document.querySelector(".registerForm form");

  // Add event listener to the form's submit event
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Hide the registration form
    document.querySelector(".registerForm").style.display = "none";

    // Get a reference to the success message element
    const successElement = document.querySelector(".registerSuccess");
    // Remove the 'hidden' class to reveal the success message
    successElement.classList.remove("hidden");
    // Explicitly set the display style to 'block' to ensure visibility
    successElement.style.display = "block";
  });
});
