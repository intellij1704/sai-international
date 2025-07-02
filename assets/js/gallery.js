document.addEventListener("DOMContentLoaded", () => {
  // Import Bootstrap and Swiper
  const bootstrap = window.bootstrap;
  const Swiper = window.Swiper;

  // All gallery images data with sequential slideIndex starting from 0
  const allGalleryImages = [
    {
      src: "./assets/images/gallery/exterior/sai-international-exterior-view.avif",
      slideIndex: 0,
      type: "exterior",
      alt: "Exterior view",
    },
    {
      src: "./assets/images/gallery/interior/guest-house-interior-space.avif",
      slideIndex: 1,
      type: "interior",
      alt: "Interior design",
    },
    {
      src: "./assets/images/gallery/dining/guest-house-dining-area.avif",
      slideIndex: 2,
      type: "dining",
      alt: "Dining area",
    },
    {
      src: "./assets/images/gallery/dining/guest-house-dining-image.avif",
      slideIndex: 3,
      type: "dining",
      alt: "Dining image",
    },
    {
      src: "./assets/images/gallery/dining/large-dining-space-sai-international.avif",
      slideIndex: 4,
      type: "dining",
      alt: "Large dining space",
    },
    {
      src: "./assets/images/gallery/exterior/modern-guest-house-sai-international.avif",
      slideIndex: 5,
      type: "exterior",
      alt: "Modern guest house",
    },
    {
      src: "./assets/images/gallery/exterior/premium-guest-house.avif",
      slideIndex: 6,
      type: "exterior",
      alt: "Premium guest house",
    },
    {
      src: "./assets/images/gallery/exterior/saiinternational-guest-house.avif",
      slideIndex: 7,
      type: "exterior",
      alt: "Sai international guest house",
    },
    {
      src: "./assets/images/gallery/exterior/sai-international-guest-house.avif",
      slideIndex: 8,
      type: "exterior",
      alt: "Sai international guest house",
    },
    {
      src: "./assets/images/gallery/exterior/sai-international-guest-house-entry.avif",
      slideIndex: 9,
      type: "exterior",
      alt: "Guest house entry",
    },
    {
      src: "./assets/images/gallery/exterior/sai-international-guest-house-exterior.avif",
      slideIndex: 10,
      type: "exterior",
      alt: "Guest house exterior",
    },
    {
      src: "./assets/images/gallery/exterior/sai-international-guest-house-services.avif",
      slideIndex: 11,
      type: "exterior",
      alt: "Guest house services",
    },
    {
      src: "./assets/images/gallery/exterior/sai-international-guest-stay.avif",
      slideIndex: 12,
      type: "exterior",
      alt: "Guest stay",
    },
    {
      src: "./assets/images/gallery/exterior/sai-international-parking-area.avif",
      slideIndex: 13,
      type: "exterior",
      alt: "Parking area",
    },
    {
      src: "./assets/images/gallery/exterior/sai-international-parking-space.avif",
      slideIndex: 14,
      type: "exterior",
      alt: "Parking space",
    },
    {
      src: "./assets/images/gallery/interior/guest-house-ambience.avif",
      slideIndex: 15,
      type: "interior",
      alt: "Guest house ambience",
    },
    {
      src: "./assets/images/gallery/interior/guest-house-balcony-area.avif",
      slideIndex: 16,
      type: "interior",
      alt: "Balcony area",
    },
    {
      src: "./assets/images/gallery/interior/guest-house-common-area.avif",
      slideIndex: 17,
      type: "interior",
      alt: "Common area",
    },
    {
      src: "./assets/images/gallery/interior/guest-house-interiors.avif",
      slideIndex: 18,
      type: "interior",
      alt: "Guest house interiors",
    },
    {
      src: "./assets/images/gallery/rooms/aminities-in-guest-house-rooms.avif",
      slideIndex: 19,
      type: "rooms",
      alt: "Room amenities",
    },
    {
      src: "./assets/images/gallery/rooms/best-guest-house-services.avif",
      slideIndex: 20,
      type: "rooms",
      alt: "Best guest house services",
    },
    {
      src: "./assets/images/gallery/rooms/best-suite-room-in-kolkata.avif",
      slideIndex: 21,
      type: "rooms",
      alt: "Best suite room",
    },
    {
      src: "./assets/images/gallery/rooms/best-super-delux-room-kolkata.avif",
      slideIndex: 22,
      type: "rooms",
      alt: "Super delux room",
    },
    {
      src: "./assets/images/gallery/rooms/clean-wahroom-guest-house.avif",
      slideIndex: 23,
      type: "rooms",
      alt: "Clean washroom",
    },
    {
      src: "./assets/images/gallery/rooms/complimentary-service-sai-international.avif",
      slideIndex: 24,
      type: "rooms",
      alt: "Complimentary service",
    },
    {
      src: "./assets/images/gallery/rooms/cozy-guest-house-stay.avif",
      slideIndex: 25,
      type: "rooms",
      alt: "Cozy guest house stay",
    },
    {
      src: "./assets/images/gallery/rooms/gold-rooms-sai-international.avif",
      slideIndex: 26,
      type: "rooms",
      alt: "Gold rooms",
    },
    {
      src: "./assets/images/gallery/rooms/guest-house-cozy-rooms.avif",
      slideIndex: 27,
      type: "rooms",
      alt: "Cozy rooms",
    },
    {
      src: "./assets/images/gallery/rooms/guest-house-salt-lake.avif",
      slideIndex: 28,
      type: "rooms",
      alt: "Guest house salt lake",
    },
    {
      src: "./assets/images/gallery/rooms/hygienic-guest-house-salt-lake.avif",
      slideIndex: 29,
      type: "rooms",
      alt: "Hygienic guest house",
    },
    {
      src: "./assets/images/gallery/rooms/inside-sai-international.avif",
      slideIndex: 30,
      type: "rooms",
      alt: "Inside sai international",
    },
    {
      src: "./assets/images/gallery/rooms/premium-guest-house-rooms.avif",
      slideIndex: 31,
      type: "rooms",
      alt: "Premium guest house rooms",
    },
    {
      src: "./assets/images/gallery/rooms/sai-international-bathroom.avif",
      slideIndex: 32,
      type: "rooms",
      alt: "Bathroom",
    },
    {
      src: "./assets/images/gallery/rooms/sai-international-bathroom-view.avif",
      slideIndex: 33,
      type: "rooms",
      alt: "Bathroom view",
    },
    {
      src: "./assets/images/gallery/rooms/sai-international-salt-lake.avif",
      slideIndex: 34,
      type: "rooms",
      alt: "Sai international salt lake",
    },
    {
      src: "./assets/images/gallery/rooms/sai-international-toilery-kit.avif",
      slideIndex: 35,
      type: "rooms",
      alt: "Toiletry kit",
    },
    {
      src: "./assets/images/gallery/rooms/sai-internation-washroom.avif",
      slideIndex: 36,
      type: "rooms",
      alt: "Washroom",
    },
    {
      src: "./assets/images/gallery/rooms/suite-room-for-couples.avif",
      slideIndex: 37,
      type: "rooms",
      alt: "Suite room for couples",
    },
    {
      src: "./assets/images/gallery/rooms/suite-room-guest-house-kolkata.avif",
      slideIndex: 38,
      type: "rooms",
      alt: "Suite room guest house",
    },
    {
      src: "./assets/images/gallery/rooms/suite-room-kolkata.avif",
      slideIndex: 39,
      type: "rooms",
      alt: "Suite room kolkata",
    },
    {
      src: "./assets/images/gallery/rooms/suite-room-kolkata-sai-international.avif",
      slideIndex: 40,
      type: "rooms",
      alt: "Suite room sai international",
    },
    {
      src: "./assets/images/gallery/rooms/super-delux-room.avif",
      slideIndex: 41,
      type: "rooms",
      alt: "Super delux room",
    },
    {
      src: "./assets/images/gallery/rooms/super-delux-room-kolkata.avif",
      slideIndex: 42,
      type: "rooms",
      alt: "Super delux room kolkata",
    },
    {
      src: "./assets/images/gallery/dining/dining-image.avif",
      slideIndex: 43,
      type: "dining",
      alt: "Dining image",
    },
  ];

  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  let currentFilter = urlParams.get("type") || "all";

  // Gallery row elements
  const galleryRows = {
    all: document.getElementById("gridGalleryRow"),
    rooms: document.getElementById("roomsGalleryRow"),
    interior: document.getElementById("interiorGalleryRow"),
    dining: document.getElementById("diningGalleryRow"),
    exterior: document.getElementById("exteriorGalleryRow"),
  };

  // Populate grid galleries
  function populateGalleries() {
    Object.entries(galleryRows).forEach((entry) => {
      const type = entry[0];
      const row = entry[1];
      if (!row) return;

      const images =
        type === "all"
          ? allGalleryImages
          : allGalleryImages.filter((img) => img.type === type);

      images.forEach((img) => {
        const item = document.createElement("div");
        item.className = "grid-item gallery-item";
        item.setAttribute("data-slide-index", img.slideIndex);
        item.setAttribute("data-type", img.type);

        const imageWrapper = document.createElement("div");
        imageWrapper.className = "image-wrapper";

        const image = document.createElement("img");
        image.setAttribute("data-src", img.src);
        image.alt = img.alt || "Gallery Image";
        image.loading = "lazy";

        imageWrapper.appendChild(image);
        item.appendChild(imageWrapper);
        row.appendChild(item);
      });
    });
  }

  // Initialize galleries
  populateGalleries();

  // Handle tab clicks
  const tabLinks = document.querySelectorAll("#galleryTabs .nav-link");
  tabLinks.forEach((tab) => {
    tab.addEventListener("click", () => {
      currentFilter = tab.getAttribute("data-filter");
      updateUrl(currentFilter);
    });
  });

  // Set active tab based on URL
  if (currentFilter !== "all") {
    const activeTab = document.querySelector("#" + currentFilter + "-tab");
    if (activeTab) {
      const bsTab = new bootstrap.Tab(activeTab);
      bsTab.show();
    }
  }

  // Update URL function
  function updateUrl(filter) {
    const newUrl =
      filter === "all"
        ? window.location.pathname
        : window.location.pathname + "?type=" + filter;
    window.history.pushState({}, "", newUrl);
  }

  // Lazy loading observer
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-src");
          if (src) {
            img.src = src;
            img.classList.add("loaded");
            obs.unobserve(img);
          }
        }
      });
    },
    {
      rootMargin: "50px",
      threshold: 0.1,
    }
  );

  // Observe all gallery images
  setTimeout(() => {
    const allImages = document.querySelectorAll(".grid-gallery img");
    allImages.forEach((img) => {
      observer.observe(img);
    });
  }, 100);

  // Initialize Bootstrap modal
  const lightboxModal = new bootstrap.Modal(
    document.getElementById("galleryLightbox"),
    {
      backdrop: true,
      keyboard: true,
    }
  );

  // Swiper instance
  let lightboxSwiper = null;

  // Initialize Swiper
  function initializeSwiper(filteredImages, initialIndex) {
    const swiperWrapper = document.querySelector(
      ".lightbox-swiper .swiper-wrapper"
    );
    swiperWrapper.innerHTML = "";

    filteredImages.forEach((image) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";

      const imageSrc = image.src || "";
      const imageAlt = image.alt || "Gallery Image";

      slide.innerHTML =
        '<div class="lightbox-slide-content"><img src="' +
        imageSrc +
        '" alt="' +
        imageAlt +
        '" loading="lazy"></div>';
      swiperWrapper.appendChild(slide);
    });

    if (lightboxSwiper) {
      lightboxSwiper.destroy(true, true);
    }

    lightboxSwiper = new Swiper(".lightbox-swiper", {
      loop: false,
      initialSlide: initialIndex,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: (number) => number,
        formatFractionTotal: () => filteredImages.length,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      grabCursor: true,
      effect: "slide",
      speed: 500,
      slidesPerView: 1,
      slidesPerGroup: 1,
    });

    lightboxSwiper.on("slideChange", () => {
      const currentImage = filteredImages[lightboxSwiper.activeIndex];
      if (currentImage) {
        updateHash("gallery-" + currentImage.slideIndex);
      }
    });
  }

  // Open lightbox function
  function openLightbox(slideIndex) {
    const filteredImages =
      currentFilter === "all"
        ? allGalleryImages
        : allGalleryImages.filter((img) => img.type === currentFilter);

    const targetIndex = filteredImages.findIndex(
      (img) => img.slideIndex === slideIndex
    );

    if (targetIndex !== -1) {
      const validImages = filteredImages.map((img) => ({
        ...img,
        src: img.src || "",
        alt: img.alt || "Gallery Image",
      }));

      initializeSwiper(validImages, targetIndex);
      lightboxModal.show();
      updateHash("gallery-" + slideIndex);
    }
  }

  // Add click events to all gallery items
  function addGalleryClickEvents() {
    const allGalleryItems = document.querySelectorAll(".gallery-item");
    allGalleryItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const slideIndex = Number.parseInt(
          item.getAttribute("data-slide-index")
        );
        if (!isNaN(slideIndex)) {
          openLightbox(slideIndex);
        }
      });
    });
  }

  // Initialize click events
  setTimeout(addGalleryClickEvents, 200);

  // Update hash function
  function updateHash(hash) {
    history.pushState(null, null, "#" + hash);
  }

  // Clear hash function
  function clearHash() {
    history.pushState(
      null,
      null,
      window.location.pathname +
        (currentFilter !== "all" ? "?type=" + currentFilter : "")
    );
  }

  // Handle modal close
  const closeBtn = document.querySelector("#galleryLightbox .btn-close");
  closeBtn.addEventListener("click", () => {
    lightboxModal.hide();
    clearHash();
  });

  // Close modal on click outside
  document.getElementById("galleryLightbox").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      lightboxModal.hide();
      clearHash();
    }
  });

  // Handle modal hide
  document
    .getElementById("galleryLightbox")
    .addEventListener("hidden.bs.modal", () => {
      clearHash();
      if (lightboxSwiper) {
        lightboxSwiper.destroy(true, true);
        lightboxSwiper = null;
      }
    });

  // Handle keyboard navigation
  document.addEventListener("keydown", (e) => {
    const modalElement = document.getElementById("galleryLightbox");
    if (modalElement.classList.contains("show")) {
      if (e.key === "ArrowRight") {
        lightboxSwiper.slideNext();
      } else if (e.key === "ArrowLeft") {
        lightboxSwiper.slidePrev();
      } else if (e.key === "Escape") {
        lightboxModal.hide();
        clearHash();
      }
    }
  });

  // Handle hash navigation on page load
  if (window.location.hash.startsWith("#gallery-")) {
    const index = Number.parseInt(window.location.hash.split("-")[1]);
    if (
      !isNaN(index) &&
      allGalleryImages.some((img) => img.slideIndex === index)
    ) {
      setTimeout(() => {
        openLightbox(index);
      }, 500);
    }
  }

  // Handle hash changes
  window.addEventListener("hashchange", () => {
    if (window.location.hash.startsWith("#gallery-")) {
      const index = Number.parseInt(window.location.hash.split("-")[1]);
      if (
        !isNaN(index) &&
        allGalleryImages.some((img) => img.slideIndex === index)
      ) {
        const modalElement = document.getElementById("galleryLightbox");
        if (!modalElement.classList.contains("show")) {
          openLightbox(index);
        } else if (lightboxSwiper) {
          const filteredImages =
            currentFilter === "all"
              ? allGalleryImages
              : allGalleryImages.filter((img) => img.type === currentFilter);
          const newIndex = filteredImages.findIndex(
            (img) => img.slideIndex === index
          );
          if (newIndex !== -1) {
            lightboxSwiper.slideTo(newIndex, 0);
          }
        }
      }
    } else {
      const modalElement = document.getElementById("galleryLightbox");
      if (modalElement.classList.contains("show")) {
        lightboxModal.hide();
      }
    }
  });
});
