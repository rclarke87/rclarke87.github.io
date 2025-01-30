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