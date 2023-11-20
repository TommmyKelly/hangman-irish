function handleOrientationChange() {
  // Lock the screen orientation to portrait
  if (window.matchMedia("(orientation: landscape)").matches) {
    // Landscape orientation, lock to portrait
    document.body.style.transform = "rotate(0deg)";
  }
}

// Add event listener for orientation change
window.addEventListener("resize", handleOrientationChange);

// Initial check and lock on page load
handleOrientationChange();
