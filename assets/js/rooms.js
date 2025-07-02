// Slugify the title for SEO-friendly URLs
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/-+/g, "-"); // Avoid double hyphens
}

// Room data
const rooms = [
  {
    id: 1,
    title: "Suite Room - Elegant and Most Spacious",
    shortDescription:
      "Make your stay truly unforgettable — where luxury feels like home.",
    description:
      "Step into refined comfort with our spacious Suite Room — a perfect blend of elegance and functionality, spanning 231 sq.ft. with an attached 43 sq.ft. private bathroom. This room features a plush king-size bed, a cozy 2-seater sofa, and a tea table to unwind in style.",
    description2:
      "Whether you're planning a romantic getaway or a relaxing escape, this suite offers the sophistication of a premium guest house in Salt Lake, Kolkata — ideal for those who appreciate space, serenity, and modern comfort.",
    images: [
      "./assets/images/rooms/suite/suite-room1.avif",
      "./assets/images/rooms/suite/suite-room2.avif",
      "./assets/images/rooms/suite/suite-room3.avif",
      "./assets/images/rooms/suite/suite-room4.avif",
      "./assets/images/rooms/suite/suite-room5.avif",
      "./assets/images/rooms/suite/suite-room6.avif",
      "./assets/images/rooms/suite/suite-room7.avif",
      "./assets/images/rooms/suite/suite-room8.avif",
      "./assets/images/rooms/suite/suite-room9.avif",
    ],
  },
  {
    id: 2,
    title: "Super Deluxe Room - With Private Balcony",
    shortDescription:
      "Make every moment memorable — where warmth, privacy, and charm come together.",
    description:
      "Unwind in elegance with our Super Deluxe Room, offering 225 sq.ft. of thoughtfully designed space and your own private balcony — perfect for soaking in fresh air and tranquility. Tailored for couples, the room features a luxurious king-size bed, a comfortable 2-seater sofa, and a tea table, blending comfort and sophistication effortlessly.",
    description2:
      "Whether you're celebrating a special moment or simply escaping the everyday, this room is ideal for a serene and romantic retreat. If you're looking for the best guest house service in Kolkata, your search ends here.",
    images: [
      "./assets/images/rooms/super-delux/super-delux1.avif",
      "./assets/images/rooms/super-delux/super-delux2.avif",
      "./assets/images/rooms/super-delux/super-delux3.avif",
      "./assets/images/rooms/super-delux/super-delux4.avif",
      "./assets/images/rooms/super-delux/super-delux5.avif",
      "./assets/images/rooms/super-delux/super-delux6.avif",
      "./assets/images/rooms/super-delux/super-delux7.avif",
    ],
  },
  {
    id: 3,
    title: "Deluxe Room – Smart Stays, Seamless Comfort",
    shortDescription:
      "Your ideal retreat awaits—compact, calm, and curated for comfort.",
    description:
      "Experience smart luxury in our Deluxe Room — a 195 sq.ft. haven designed to deliver everything you need for a restful and cozy stay. Whether you're visiting for business or a quick city escape, this room delivers an effortless stay with a king-size bed, a cozy 2-seater sofa, and a tea table thoughtfully placed for your convenience.",
    description2:
      "Perfect for those searching for a budget-friendly guest house in Kolkata, this room proves that affordability and relaxation can go hand in hand.",
    images: [
      "./assets/images/rooms/delux/delux-room1.avif",
      "./assets/images/rooms/delux/delux-room2.avif",
      "./assets/images/rooms/delux/delux-room3.avif",
      "./assets/images/rooms/delux/delux-room4.avif",
      "./assets/images/rooms/delux/delux-room5.avif",
    ],
  },
  {
    id: 4,
    title: "Gold Room – Comfort Meets Simplicity",
    shortDescription:
      "Simple. Efficient. Comfortable — the Gold Room delivers everything you expect from a well-kept, affordable guest house.",
    description:
      "Our Gold Room (175 sq.ft.) is thoughtfully designed to offer maximum comfort within a compact space. Featuring a king-size bed, a 2-seater sofa, and a tea table, it brings together functionality and relaxation in a clean, modern setting.",
    description2:
      "Ideal for those who value quality and convenience, this room is perfect for a peaceful stay with all the essentials you need — without overpaying.",
    images: [
      "./assets/images/rooms/gold/gold-room1.avif",
      "./assets/images/rooms/gold/gold-room2.avif",
      "./assets/images/rooms/gold/gold-room3.avif",
      "./assets/images/rooms/gold/gold-room4.avif",
    ],
  },
];

// Generate room cards (for rooms.html)
function generateRoomCards() {
  const container = document.getElementById("sai-room-container");
  if (!container) return;

  rooms.forEach((room) => {
    const slug = slugify(room.title);
    const card = document.createElement("div");
    card.className = "col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-4";

    const slides = room.images
      .map(
        (img, i) => `
        <div class="swiper-slide">
          <img loading="lazy" src="${img}" alt="${room.title} Image ${
          i + 1
        }" class="sai-room-image img-fluid">
        </div>
      `
      )
      .join("");

    card.innerHTML = `
      <div class="sai-room-card">
        <div class="swiper-container sai-image-slider swiper" id="sai-slider-${room.id}">
          <div class="swiper-wrapper">${slides}</div>
          <div class="swiper-button-prev sai-image-prev"></div>
          <div class="swiper-button-next sai-image-next"></div>
        </div>
        <div class="sai-room-content">
          <h3 class="sai-room-title">
            <a href="/room-details.html?room=${slug}&id=${room.id}">${room.title}</a>
          </h3>
          <p class="sai-room-description">${room.shortDescription}</p>
          <button class="sai-book-btn" data-bs-toggle="modal" data-bs-target="#saiBookingModal">BOOK NOW</button>
          <a class="btn btn-outline-dark rounded-5" href="/room-details.html?room=${slug}&id=${room.id}">View Details</a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  rooms.forEach((room) => {
    new Swiper(`#sai-slider-${room.id}`, {
      loop: true,
      navigation: {
        nextEl: `#sai-slider-${room.id} .sai-image-next`,
        prevEl: `#sai-slider-${room.id} .sai-image-prev`,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  });
}

// Load room details (for room-details.html)
function loadRoomDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"));
  const slug = urlParams.get("room");

  const room = rooms.find((r) => r.id === id && slugify(r.title) === slug);

  const titleEl = document.getElementById("room-title");
  const titleDetailsEl = document.getElementById("room-title-details");
  const descDetailsEl = document.getElementById("room-description-details");
  const descDetailsEl2 = document.getElementById("room-description-details2");
  const shortDescEl = document.getElementById("short-description");
  const swiperWrapper = document.getElementById("room-images");

  if (!room) {
    // Redirect if invalid room or slug
    window.location.href = "/rooms.html";
    return;
  }

  document.title = `${room.title} | Sai International Guest House | Salt Lake, Kolkata`;

  // Update description meta
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", room.shortDescription);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute(
      "content",
      `${room.title} - Sai International Guest House`
    );
  }

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute("content", room.description);
  }
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage && room.images.length > 0) {
    ogImage.setAttribute("content", room.images[0]);
  }
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute("content", window.location.href);
  }

  if (titleEl) titleEl.textContent = room.title;
  if (titleDetailsEl) titleDetailsEl.textContent = room.title;
  if (descDetailsEl) descDetailsEl.textContent = room.description;
  if (descDetailsEl2) descDetailsEl2.textContent = room.description2;
  if (shortDescEl) shortDescEl.textContent = room.shortDescription;

  if (swiperWrapper) {
    swiperWrapper.innerHTML = room.images
      .map(
        (img, i) => `
      <div class="swiper-slide">
        <img loading="lazy" src="${img}" alt="${room.title} Image ${
          i + 1
        }" class="img-fluid">
      </div>
    `
      )
      .join("");

    new Swiper("#room-image-slider", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }
}

// Run only relevant function based on current page
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("rooms.html") || path.endsWith("/rooms")) {
    generateRoomCards();
  } else if (
    path.includes("room-details.html") ||
    path.endsWith("/room-details")
  ) {
    loadRoomDetails();
  }
});
