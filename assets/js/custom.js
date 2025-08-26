document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".popup-trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      var targetId = this.getAttribute("data-target");
      var modal = document.getElementById(targetId);
      if (modal) modal.style.display = "block";
    });
  });

  document.querySelectorAll(".custom-close").forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      this.closest(".custom-modal").style.display = "none";
    });
  });

  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("custom-modal")) {
      event.target.style.display = "none";
    }
  });
});
