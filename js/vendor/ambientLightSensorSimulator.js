(function() {
  const infoBanner = document.querySelector(".js-info-banner");
  infoBanner.classList.add(
    "AmbientLightSensor" in window ? "is-success" : "is-error"
  );
  infoBanner.removeAttribute("aria-hidden");
  infoBanner.setAttribute("role", "status");
  infoBanner.setAttribute("aria-live", "polite");
  infoBanner.classList.add("is-visible");
})();
