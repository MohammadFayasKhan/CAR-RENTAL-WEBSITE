// Selecting elements from the DOM (Document Object Model)
const menuBtn = document.getElementById("menu-btn"); // The button that toggles the navigation menu
const navLinks = document.getElementById("nav-links"); // The navigation menu containing links
const menuBtnIcon = menuBtn.querySelector("i"); // The icon inside the menu button (either a 'menu' or 'close' icon)

// Adding a click event listener to the menu button
menuBtn.addEventListener("click", (e) => {
  // Toggle the 'open' class on the navigation menu to show/hide it
  navLinks.classList.toggle("open");

  // Check if the menu is currently open by checking the presence of the 'open' class
  const isOpen = navLinks.classList.contains("open");

  // Update the icon based on the menu state (switch between 'menu' and 'close' icons)
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Adding an event listener to the navigation menu itself
navLinks.addEventListener("click", (e) => {
  // Remove the 'open' class when a link inside the menu is clicked (to close the menu)
  navLinks.classList.remove("open");
  // Reset the icon back to the 'menu' icon when the menu is closed
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Setting options for the ScrollReveal animation
const scrollRevealOption = {
  origin: "bottom", // Animation will start from the bottom
  distance: "50px", // Elements will move 50px during the reveal
  duration: 1000, // Animation duration will be 1 second (1000ms)
};

// Using ScrollReveal to animate the header's main title (h1)
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption, // Spread operator applies all properties from scrollRevealOption
});

// Using ScrollReveal to animate the header's form, with a delay of 500ms
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 500, // Delay of 500ms before the animation starts
});

// Using ScrollReveal to animate the header's image, with a delay of 1 second
ScrollReveal().reveal(".header__container img", {
  ...scrollRevealOption,
  delay: 1000, // Delay of 1 second (1000ms)
});

// Revealing each range card (for vehicle types) with a 1-second duration and 500ms interval between cards
ScrollReveal().reveal(".range__card", {
  duration: 1000, // Each card's animation lasts 1 second
  interval: 500, // 500ms interval between the animations of each card
});

// Using ScrollReveal to animate the image in the location section, starting from the right
ScrollReveal().reveal(".location__image img", {
  ...scrollRevealOption,
  origin: "right", // Animation comes from the right side
});

// Using ScrollReveal to animate the location section's header with a 500ms delay
ScrollReveal().reveal(".location__content .section__header", {
  ...scrollRevealOption,
  delay: 500, // Delay of 500ms before the animation starts
});

// Using ScrollReveal to animate the location section's paragraph with a 1-second delay
ScrollReveal().reveal(".location__content p", {
  ...scrollRevealOption,
  delay: 1000, // Delay of 1 second (1000ms)
});

// Using ScrollReveal to animate the location section's button with a 1.5-second delay
ScrollReveal().reveal(".location__content .location__btn", {
  ...scrollRevealOption,
  delay: 1500, // Delay of 1.5 seconds (1500ms)
});

// Selecting all elements with the class '.select__card' (each car selection card)
const selectCards = document.querySelectorAll(".select__card");
// Add the 'show__info' class to the first card to show its info by default
selectCards[0].classList.add("show__info");

// Array of prices for each car
const price = ["225", "455", "275", "625", "395"];

// Selecting the element that shows the car's price
const priceEl = document.getElementById("select-price");

// Function to update the displayed price and car info based on the current slide
function updateSwiperImage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    // Get the current slide index
    const index = args && args[0].realIndex;
    
    // Update the displayed price based on the current slide
    priceEl.innerText = price[index];

    // Remove 'show__info' class from all car cards (to hide all info)
    selectCards.forEach((item) => {
      item.classList.remove("show__info");
    });

    // Add 'show__info' class to the currently active card (to show the info)
    selectCards[index].classList.add("show__info");
  }
}

// Initializing the Swiper slider
const swiper = new Swiper(".swiper", {
  loop: true, // Allows the slider to loop infinitely
  effect: "coverflow", // Uses the coverflow effect for sliding
  grabCursor: true, // Changes the cursor to a grabbing hand when interacting
  centeredSlides: true, // Centers the current slide
  slidesPerView: "auto", // Allows multiple slides to be visible
  coverflowEffect: {
    rotate: 0, // No rotation effect on the slides
    depth: 500, // Adds a 3D depth effect to the slides
    modifier: 1, // Adjusts the overall effect strength
    scale: 0.75, // Scales slides to 75% of their original size
    slideShadows: false, // Disables shadow effects on the slides
    stretch: -100, // Stretches the slides to create spacing between them
  },
  // Event listener to handle changes when the slide changes
  onAny(event, ...args) {
    updateSwiperImage(event, args); // Call the function to update price and car info
  },
});

// Using ScrollReveal to animate the customer story cards, with a 500ms interval between each card
ScrollReveal().reveal(".story__card", {
  ...scrollRevealOption,
  interval: 500, // 500ms interval between animations of each story card
});

// Selecting the banner wrapper that contains the banner images
const banner = document.querySelector(".banner__wrapper");

// Converting the banner wrapper's child elements (banner images) into an array
const bannerContent = Array.from(banner.children);

// Looping through each banner image
bannerContent.forEach((item) => {
  // Create a duplicate of the banner image
  const duplicateNode = item.cloneNode(true);
  
  // Set the duplicated node as hidden for accessibility
  duplicateNode.setAttribute("aria-hidden", true);
  
  // Append the duplicated banner image to the wrapper
  banner.appendChild(duplicateNode);
});

// Using ScrollReveal to animate the download section's image, starting from the right
ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right", // Animation comes from the right
});

// Using ScrollReveal to animate the download section's header with a 500ms delay
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500, // Delay of 500ms before the animation starts
});

// Using ScrollReveal to animate the download section's app links with a 1-second delay
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1000, // Delay of 1 second (1000ms)
});

// Display the login modal on page load
window.onload = function() {
  const modal = document.getElementById("login-modal");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Show the modal
  modal.style.display = "block";

  // Close the modal when the user clicks on <span> (x)
  closeBtn.onclick = function() {
      modal.style.display = "none";
  };

  // Close the modal when the user clicks anywhere outside of the modal
  window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  };

  // Handle login form submission
  const loginForm = document.getElementById("login-form");
  loginForm.onsubmit = function(e) {
      e.preventDefault(); // Prevent form submission
      modal.style.display = "none"; // Close modal after login
      // Here you can add further login logic (e.g., authentication)
  };

  // Toggle between Sign In and Sign Up
  const toggleForm = document.getElementById("toggle-form");
  toggleForm.onclick = function(e) {
      e.preventDefault();
      // Toggle form logic goes here
      // For example, you could switch between two forms (login and signup)
      alert("Switch to Sign Up form (not implemented).");
  };
};

function login() {
  // You can add validation logic here if needed
  window.location.href = 'index.html'; // Redirect to index.html
}