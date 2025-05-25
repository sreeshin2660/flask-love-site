document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const body = document.body;

  startBtn.addEventListener("click", () => {
    // Add fade-out class to body for smooth transition
    body.classList.add("fade-out");

    // Wait for animation to finish (duration 600ms here)
    setTimeout(() => {
      // Redirect to about.html after fade-out
      window.location.href = "/about";
    }, 600);
  });
});

