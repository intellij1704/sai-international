// Main Navbar Active & Offcanvas Open Logic Here
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".main_navbar");
  const scrollThreshold = 100;

  // Sticky header functionality
  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");
  const offcanvasOverlay = document.getElementById("offcanvasOverlay");
  const body = document.body;

  function toggleMenu() {
    mobileMenu.classList.toggle("active");
    offcanvasOverlay.classList.toggle("active");
    body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "auto";
  }

  menuToggle.addEventListener("click", toggleMenu);
  menuClose.addEventListener("click", toggleMenu);
  offcanvasOverlay.addEventListener("click", toggleMenu);

  document.querySelectorAll(".offcanvas-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      toggleMenu();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// Review Slider
document.addEventListener("DOMContentLoaded", () => {
  const reviewSwiper = new Swiper(".sai-swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
});

// Hero Section Booking Form
document.addEventListener("DOMContentLoaded", () => {
  // Get elements
  const checkInBtn = document.getElementById("checkInBtn");
  const checkOutBtn = document.getElementById("checkOutBtn");
  const checkInInput = document.getElementById("checkInInput");
  const checkOutInput = document.getElementById("checkOutInput");
  const checkInText = document.getElementById("checkInText");
  const checkOutText = document.getElementById("checkOutText");
  const bookingForm = document.getElementById("bookingForm");
  const numRoomsInput = document.querySelector('input[name="numRooms"]');
  const numPeopleInput = document.querySelector('input[name="numPeople"]');
  const successMsg = document.querySelector(".success-msg");

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0];
  if (checkInInput) {
    checkInInput.min = today;
  }
  if (checkOutInput) {
    checkOutInput.min = today;
  }

  // Format date for display
  function formatDateForDisplay(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  // Number input validation
  function restrictToNumbers(input) {
    if (!input) return; // Prevent error if input is null
    input.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
      if (this.value === "0") this.value = "";
    });
  }

  // Apply number validation to numRooms and numPeople
  restrictToNumbers(numRoomsInput);
  restrictToNumbers(numPeopleInput);

  // Check-in date functionality
  if (checkInBtn && checkInInput) {
    checkInBtn.addEventListener("click", () => {
      checkInInput.showPicker();
      checkInBtn.classList.add("active");
    });

    checkInInput.addEventListener("change", function () {
      const selectedDate = this.value;
      if (selectedDate) {
        checkInText.textContent = formatDateForDisplay(selectedDate);
        checkInBtn.classList.add("active");

        // Set minimum checkout date to day after check-in
        const checkInDate = new Date(selectedDate);
        checkInDate.setDate(checkInDate.getDate() + 1);
        checkOutInput.min = checkInDate.toISOString().split("T")[0];

        // Clear checkout if it's before new minimum
        if (
          checkOutInput.value &&
          new Date(checkOutInput.value) <= new Date(selectedDate)
        ) {
          checkOutInput.value = "";
          checkOutText.textContent = "Check-out Date";
          checkOutBtn.classList.remove("active");
        }
      } else {
        checkInText.textContent = "Check-in Date";
        checkInBtn.classList.remove("active");
      }
    });
  }

  // Check-out date functionality
  if (
    checkOutBtn &&
    checkOutInput &&
    checkInInput &&
    checkInText &&
    checkOutText
  ) {
    checkOutBtn.addEventListener("click", () => {
      if (!checkInInput.value) {
        alert("Please select check-in date first");
        checkInInput.showPicker();
        return;
      }
      checkOutInput.showPicker();
      checkOutBtn.classList.add("active");
    });

    checkOutInput.addEventListener("change", function () {
      const selectedDate = this.value;
      if (selectedDate) {
        checkOutText.textContent = formatDateForDisplay(selectedDate);
        checkOutBtn.classList.add("active");
      } else {
        checkOutText.textContent = "Check-out Date";
        checkOutBtn.classList.remove("active");
      }
    });
  }

  // Form submission
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Add submitting animation
      const submitBtn = this.querySelector(".booking-submit-btn");
      submitBtn.classList.add("submitting");

      // Validate number inputs
      if (!numRoomsInput.value || !numPeopleInput.value) {
        alert("Please enter valid numbers for rooms and people");
        submitBtn.classList.remove("submitting");
        return;
      }

      // Collect form data
      const formData = new FormData(this);
      const bookingData = {};

      for (const [key, value] of formData.entries()) {
        bookingData[key] = value;
      }

      // Simulate form submission
      setTimeout(() => {
        submitBtn.classList.remove("submitting");
        successMsg.style.display = "block";
        console.log(bookingData);
        // Reset form after successful submission
        bookingForm.reset();
        checkInText.textContent = "Check-in Date";
        checkOutText.textContent = "Check-out Date";
        checkInBtn.classList.remove("active");
        checkOutBtn.classList.remove("active");
        // Hide success message after 5 seconds
        setTimeout(() => {
          successMsg.style.display = "none";
        }, 5000);
      }, 1000);
    });
  }

  // Add smooth focus transitions
  const inputs = document.querySelectorAll(".booking-input");
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.style.transform = "translateY(-1px)";
    });

    input.addEventListener("blur", function () {
      this.style.transform = "translateY(0)";
    });
  });
});

// ===================== Scroll to top button start ======================
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const scrollToTopContainer = document.querySelector(".scroll-to-top");
  const progressCircle = document.getElementById("progressCircle");

  // Throttle scroll event for better performance
  let isScrolling = false;

  window.addEventListener("scroll", function () {
    if (!isScrolling) {
      window.requestAnimationFrame(function () {
        const scrollTotal =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrollPosition = window.scrollY;
        const scrollPercent = Math.min(
          (scrollPosition / scrollTotal) * 100,
          100
        );

        // Update progress circle
        progressCircle.style.strokeDashoffset = 100 - scrollPercent;

        // Show/hide button
        scrollToTopContainer.classList.toggle("show", scrollPosition > 300);

        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  // Smooth scroll to top
  scrollToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
// ===================== Scroll to top button end ======================

// Complementory slider

const swiper = new Swiper(".complimentarySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// Youtube Video Modal
const youtubeModal = document.getElementById("youtubeModal");
const youtubeVideo = document.getElementById("youtubeVideo");
const videoURL = "https://www.youtube.com/embed/hTJMlwn28G4?autoplay=1";

youtubeModal.addEventListener("show.bs.modal", () => {
  youtubeVideo.src = videoURL;
});

youtubeModal.addEventListener("hidden.bs.modal", () => {
  youtubeVideo.src = "";
});
