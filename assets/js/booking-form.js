function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all booking forms on the page
  document.querySelectorAll(".inquiry-form").forEach((form) => {
    initBookingForm(form);
  });
});

function initBookingForm(form) {
  // Set min dates for this form's date inputs
  const checkInInput = form.querySelector(".check-in-date");
  const checkOutInput = form.querySelector(".check-out-date");
  const checkInBtn = form.querySelector(".check-in-btn");
  const checkOutBtn = form.querySelector(".check-out-btn");
  const checkInText = form.querySelector(".check-in-text");
  const checkOutText = form.querySelector(".check-out-text");

  // Set min dates
  const today = getTodayDate();
  checkInInput.setAttribute("min", today);
  checkOutInput.setAttribute("min", today);

  // Check-in button click handler
  checkInBtn.addEventListener("click", function () {
    checkInInput.showPicker();
  });

  // Check-out button click handler
  checkOutBtn.addEventListener("click", function () {
    checkOutInput.showPicker();
  });

  // Check-in date change handler
  checkInInput.addEventListener("change", function () {
    const selectedDate = this.value;
    checkInText.textContent = formatDate(selectedDate) || "Check-in Date";

    // Update check-out min date
    if (selectedDate) {
      checkOutInput.setAttribute("min", selectedDate);

      // If current check-out is before new check-in, reset it
      if (
        checkOutInput.value &&
        new Date(checkOutInput.value) <= new Date(selectedDate)
      ) {
        checkOutInput.value = "";
        checkOutText.textContent = "Check-out Date";
      }
    }
  });

  // Check-out date change handler
  checkOutInput.addEventListener("change", function () {
    const selectedDate = this.value;
    checkOutText.textContent = formatDate(selectedDate) || "Check-out Date";
  });

  // Initialize form validation
  initFormValidation(form);
}

function initFormValidation(form) {
  const nameInput = form.querySelector(".user-name");
  const phoneInput = form.querySelector(".user-phone");
  const checkInInput = form.querySelector(".check-in-date");
  const checkOutInput = form.querySelector(".check-out-date");
  const guestCountInput = form.querySelector(".guest-count");
  const guestHouseSelect = form.querySelector(".guest-house");
  const successMessage = form.querySelector(".success-message");

  // Initialize error messages as hidden
  form.querySelectorAll(".error-message").forEach((el) => {
    el.style.display = "none";
  });

  // Name validation - only letters and spaces
  nameInput?.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
  });

  // Phone validation - only numbers, max 10 digits
  phoneInput?.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "").substring(0, 10);
  });

  // Guest count validation - only numbers, min 1, max 20
  guestCountInput?.addEventListener("input", function () {
    let value = parseInt(this.value.replace(/\D/g, ""));
    if (isNaN(value)) value = "";
    if (value < 1) value = 1;
    if (value > 20) value = 20;
    this.value = value === "" ? "" : value;
  });

  // Date validation - check-out must be after check-in, no past dates
  function validateDates() {
    let isValid = true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkInInput.value) {
      const checkIn = new Date(checkInInput.value);
      if (checkIn < today) {
        checkInInput.classList.add("is-invalid");
        form.querySelector(".check-in-error").textContent =
          "Check-in date cannot be in the past.";
        form.querySelector(".check-in-error").style.display = "block";
        isValid = false;
      } else {
        checkInInput.classList.remove("is-invalid");
        form.querySelector(".check-in-error").style.display = "none";
      }
    }

    if (checkInInput.value && checkOutInput.value) {
      const checkIn = new Date(checkInInput.value);
      const checkOut = new Date(checkOutInput.value);
      if (checkOut <= checkIn) {
        checkOutInput.classList.add("is-invalid");
        form.querySelector(".check-out-error").textContent =
          "Check-out date must be after check-in date.";
        form.querySelector(".check-out-error").style.display = "block";
        isValid = false;
      } else {
        checkOutInput.classList.remove("is-invalid");
        form.querySelector(".check-out-error").style.display = "none";
      }
    }

    return isValid;
  }

  checkInInput?.addEventListener("change", validateDates);
  checkOutInput?.addEventListener("change", validateDates);

  // Form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Validate name (2-50 letters and spaces)
    if (
      !nameInput.value.trim() ||
      !/^[a-zA-Z\s]{2,50}$/.test(nameInput.value.trim())
    ) {
      nameInput.classList.add("is-invalid");
      form.querySelector(".name-error").style.display = "block";
      isValid = false;
    } else {
      nameInput.classList.remove("is-invalid");
      form.querySelector(".name-error").style.display = "none";
    }

    // Validate phone (exactly 10 digits)
    if (!phoneInput.value || !/^\d{10}$/.test(phoneInput.value)) {
      phoneInput.classList.add("is-invalid");
      form.querySelector(".phone-error").style.display = "block";
      isValid = false;
    } else {
      phoneInput.classList.remove("is-invalid");
      form.querySelector(".phone-error").style.display = "none";
    }

    // Validate check-in date
    if (!checkInInput.value) {
      checkInInput.classList.add("is-invalid");
      form.querySelector(".check-in-error").textContent =
        "Please select a check-in date.";
      form.querySelector(".check-in-error").style.display = "block";
      isValid = false;
    } else if (!validateDates()) {
      isValid = false;
    }

    // Validate check-out date
    if (!checkOutInput.value) {
      checkOutInput.classList.add("is-invalid");
      form.querySelector(".check-out-error").textContent =
        "Please select a check-out date.";
      form.querySelector(".check-out-error").style.display = "block";
      isValid = false;
    }

    // Validate guest count (1-20)
    const guestCount = parseInt(guestCountInput.value);
    if (isNaN(guestCount) || guestCount < 1 || guestCount > 20) {
      guestCountInput.classList.add("is-invalid");
      form.querySelector(".guest-error").style.display = "block";
      isValid = false;
    } else {
      guestCountInput.classList.remove("is-invalid");
      form.querySelector(".guest-error").style.display = "none";
    }

    // Validate guest house selection
    if (!guestHouseSelect.value) {
      guestHouseSelect.classList.add("is-invalid");
      form.querySelector(".guest-house-error").style.display = "block";
      isValid = false;
    } else {
      guestHouseSelect.classList.remove("is-invalid");
      form.querySelector(".guest-house-error").style.display = "none";
    }

    // Process submission if valid
    if (isValid) {
      const formData = {
        name: nameInput.value.trim(),
        phone: phoneInput.value,
        checkIn: checkInInput.value,
        checkOut: checkOutInput.value,
        guests: guestCountInput.value,
        guestHouse:
          guestHouseSelect.options[guestHouseSelect.selectedIndex].text,
      };

      console.log("Form submitted:", formData);

      // Show success message
      successMessage.style.display = "block";
      form.reset();

      // Reset date display text
      form.querySelector(".check-in-text").textContent = "Check-in Date";
      form.querySelector(".check-out-text").textContent = "Check-out Date";

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    }
  });
}
