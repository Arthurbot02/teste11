document.addEventListener("DOMContentLoaded", () => {
  const continuarBtn = document.getElementById("continuarBtn");

  if (continuarBtn) {
    continuarBtn.addEventListener("click", () => {
      window.location.href = "pg1.html";
    });
  }
});
