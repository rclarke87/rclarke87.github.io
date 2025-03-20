// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Define the component types we'll be working with
  const bikeComponents = [
    { buttonClass: "chainService", name: "Chain" },
    { buttonClass: "brakesService", name: "Brakes" },
    { buttonClass: "tyresService", name: "Tyres" },
    { buttonClass: "cassetteService", name: "Cassette" },
    { buttonClass: "gearCablesService", name: "Gear cables" },
  ];

  // Loop through components and set up event handlers for each
  bikeComponents.forEach((component) => {
    const buttons = document.querySelectorAll("." + component.buttonClass);

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        // Find the parent card
        const card = this.closest(".card");

        // Find the progress bar within this card
        const progressBar = card.querySelector(".progress-bar");

        // Update progress bar width and text to 100%
        progressBar.style.width = "100%";
        progressBar.textContent = "100%";
        progressBar.setAttribute("aria-valuenow", "100");

        // Change progress bar color to success
        progressBar.className = "progress-bar bg-success";

        // Update the ETA text
        const etaText = card.querySelector(".card-text:nth-of-type(2)");
        if (etaText) {
          etaText.textContent = "Serviced today! Next service due in 3 months";
        }
      });
    });
  });
});
