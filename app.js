document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".col.wobble .card"); // Selects the limited-time offer card

  function triggerWobble() {
    card.classList.add("wobble");
    setTimeout(() => card.classList.remove("wobble"), 600); // Remove class after animation
  }

  // Wobble every 5 seconds
  setInterval(triggerWobble, 5000);

  // Trigger when scrolling near it
  document.addEventListener("scroll", function () {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      triggerWobble();
    }
  });
});

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
  // Get a reference to the register button element
  const registerButton = document.querySelector(".registerButton");

  // Event listener to the register button
  registerButton.addEventListener("click", function () {
    // Hide the registration form
    document.querySelector(".registerForm").style.display = "none";

    // Get a reference to the success message element
    const successElement = document.querySelector(".registerSuccess");
    // Remove the 'hidden' class to reveal the success message
    successElement.classList.remove("hidden");
    // Explicitly set the display style to 'block' to ensure visibility
    successElement.style.display = "block";
    // Set h3 text to bootstrap warning
    successElement.querySelector("h3").classList.add("text-warning");
  });
});
