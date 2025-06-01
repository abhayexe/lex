// Add click interactions to app icons
document.querySelectorAll(".app-icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1.1)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 100);
    }, 100);
  });
});

// Add functionality to window controls
document.querySelector(".close").addEventListener("click", () => {
  alert("Close window clicked");
});

document.querySelector(".minimize").addEventListener("click", () => {
  alert("Minimize window clicked");
});

document.querySelector(".maximize").addEventListener("click", () => {
  alert("Maximize window clicked");
});

// Simulate typing effect for the cursor
setInterval(() => {
  const cursor = document.querySelector(".cursor");
  if (cursor) {
    cursor.style.visibility =
      cursor.style.visibility === "hidden" ? "visible" : "hidden";
  }
}, 500);

// Handle fullscreen with FFF keypress
let fKeyPressCount = 0;
let lastFKeyPressTime = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "f") {
    const currentTime = new Date().getTime();

    // Reset counter if too much time has passed since last press
    if (currentTime - lastFKeyPressTime > 500) {
      // 500ms threshold
      fKeyPressCount = 0;
    }

    fKeyPressCount++;
    lastFKeyPressTime = currentTime;

    if (fKeyPressCount === 3) {
      // Reset counter
      fKeyPressCount = 0;

      // Get the fat-border element
      const fatBorder = document.querySelector(".fat-border");

      // Toggle fullscreen
      if (
        !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        // Request fullscreen on the fat-border element
        if (fatBorder.requestFullscreen) {
          fatBorder.requestFullscreen();
        } else if (fatBorder.webkitRequestFullscreen) {
          // Chrome, Safari
          fatBorder.webkitRequestFullscreen();
        } else if (fatBorder.msRequestFullscreen) {
          // IE/Edge
          fatBorder.msRequestFullscreen();
        }
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          // Chrome, Safari
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          // IE/Edge
          document.msExitFullscreen();
        }
      }
    }
  }
});

// Handle notification close button
document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".close-btn");
  const notification = document.querySelector(".notification-message");

  if (closeBtn && notification) {
    closeBtn.addEventListener("click", function () {
      notification.style.opacity = "0";
      notification.style.transform = "translateY(-20px)";
      setTimeout(() => {
        notification.remove();
      }, 300);
    });
  }
});
