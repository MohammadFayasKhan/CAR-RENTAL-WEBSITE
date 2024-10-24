# Fayas | Car Rental Web Page
Here’s a more elaborate version of the `README` file for your car rental website:

---

# Premium Car Rental Website

This project is a **Premium Car Rental Website** that provides a user-friendly and modern interface for renting cars. The website is fully responsive, interactive, and designed with mobile-first principles. It allows users to explore a wide variety of vehicles, search for available cars based on location and dates, and even read testimonials from previous customers. The site also includes animations and dynamic content to enhance the overall user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [How to Use](#how-to-use)
- [Detailed Sections](#detailed-sections)
  - [1. Header Section](#1-header-section)
  - [2. Vehicle Range Section](#2-vehicle-range-section)
  - [3. Swiper Slider for Car Selection](#3-swiper-slider-for-car-selection)
  - [4. Customer Stories Section](#4-customer-stories-section)
  - [5. App Download Section](#5-app-download-section)
  - [6. Newsletter Subscription](#6-newsletter-subscription)
  - [7. Footer Section](#7-footer-section)
- [Local Development](#local-development)
- [Credits](#credits)

## Features

This car rental website offers the following features:

- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop) using CSS media queries and flexible layouts.
- **Interactive Navigation**: Includes a collapsible navigation menu for mobile users and a full horizontal navigation bar for larger screens.
- **Car Search Functionality**: Allows users to search for cars by entering a pickup and return location, along with start and stop dates.
- **Vehicle Categories Display**: Displays different vehicle categories (cars, SUVs, vans, and electric) using a card-based layout with hover effects.
- **Swiper.js Car Slider**: A carousel slider that allows users to swipe through different cars, with real-time updates for car details (speed, seats, mileage) and rental prices.
- **Scroll Animations**: Smooth animations for different sections as they appear while scrolling, powered by ScrollReveal.js.
- **Customer Testimonials**: A dedicated section that shares stories and experiences from previous customers.
- **Mobile App Promotion**: Encourages users to download the car rental app via links to the Apple App Store and Google Play Store.
- **Newsletter Subscription**: A subscription form where users can enter their email to receive the latest news and updates.
- **Footer with Important Links**: A detailed footer that provides company information, resources, and social media links for easy access.

## Technologies Used

The website is built using the following technologies:

- **HTML5**: Used to structure the content of the website in a semantic and accessible way.
- **CSS3**: Responsible for the visual styling, layout, and responsive behavior of the website.
  - **Flexbox and CSS Grid**: For arranging elements in a flexible and grid-based layout.
  - **Custom CSS Variables**: For defining reusable color schemes, fonts, and other design constants.
  - **CSS Media Queries**: To ensure the site adapts to various screen sizes and devices.
  - **CSS Animations**: Used for hover effects and smooth transitions between states.
- **JavaScript (ES6)**: Adds interactivity and dynamic content handling on the website.
  - **Event Listeners**: For handling user actions like opening and closing the mobile navigation menu.
  - **Swiper.js**: To create the interactive car selection slider with animations and slide transitions.
  - **ScrollReveal.js**: For adding reveal animations to different sections as the user scrolls through the site.
- **External Libraries**:
  - **RemixIcon**: Provides a range of icons for buttons, links, and other UI elements.
  - **Google Fonts**: Custom typography using fonts from Google Fonts (`Poppins` and `Syncopate`).

## File Structure

```
|-- index.html          # Main HTML file containing the website structure
|-- styles.css          # Main CSS file for styling the website
|-- main.js             # JavaScript file for interactivity and animations
|-- assets/             # Folder containing images and other assets
    |-- header-bg.png
    |-- range-1.jpg
    |-- range-2.jpg
    |-- select-1.png
    |-- ...
```

### Key Files:

- **index.html**: Contains the structure of the website, including navigation, sections, and content blocks.
- **styles.css**: Handles all the visual aspects of the website, including layout, color schemes, typography, responsiveness, and animations.
- **main.js**: Adds interactive elements like the mobile menu toggle, Swiper.js integration, and ScrollReveal animations.
- **assets/**: A folder containing all image files used throughout the website (e.g., vehicle images, background images, app icons).

## How to Use

### Viewing the Website

1. Download or clone this repository to your local machine.
2. Open the `index.html` file in any modern web browser (Chrome, Firefox, Safari, Edge).
3. You should now see the fully functional car rental website with all features accessible.

### Live Demo

- Use the navigation menu to explore the homepage, browse different vehicle categories, and test the interactive car selection slider.
- Scroll down to see the customer stories and mobile app download section.
- Test the form inputs for searching rental cars by location and dates.

## Detailed Sections

### 1. Header Section

The header includes the logo, a mobile-friendly navigation menu, and a search form where users can enter their pickup and return locations, along with the rental start and end dates. It features an animated button for mobile devices that toggles the menu visibility.

- **Interactive Form**: Allows users to input rental details.
- **Scroll Button**: Prompts users to scroll down and explore more content on the page.

### 2. Vehicle Range Section

Displays a wide variety of available vehicle categories (cars, SUVs, vans, electric cars) using cards. Each card is interactive with hover-zoom effects and links to more detailed vehicle information.

- **Hover Effects**: Each card zooms in when hovered, giving a dynamic look and feel.

### 3. Swiper Slider for Car Selection

This section features a Swiper.js-powered slider that allows users to swipe through different cars. As users slide, the details of the selected car (speed, seats, mileage) and the rental price update dynamically.

- **Dynamic Price Updates**: Prices change based on the selected car.
- **Slide Transitions**: Smooth transitions between cars, offering a seamless browsing experience.

### 4. Customer Stories Section

Shares testimonials and real-life experiences from previous customers who have rented cars through the service. This section is designed with a grid layout, and each story is presented as a card with a date, title, and description.

- **Card Layout**: Each story is shown in an easily digestible card format.
- **Scrolling Animations**: Cards are revealed as the user scrolls down.

### 5. App Download Section

Encourages users to download the mobile app, providing download links for both iOS and Android platforms. It features an image of the app interface and a clear call to action.

- **App Promotion**: Links to the App Store and Google Play Store.
- **Centered Layout**: Ensures the download buttons are prominently displayed.

### 6. Newsletter Subscription

This section contains a simple form where users can input their email address to subscribe to the latest news and updates from the car rental service.

- **Interactive Form**: Includes placeholder text and a clean button design for submitting the form.

### 7. Footer Section

The footer provides links to important resources such as the installation manual, company information, and social media accounts. It also includes a copyright notice.

- **Social Media Links**: Icons for Facebook, Twitter, LinkedIn, etc., link to the company's profiles.

## Local Development

### Prerequisites

To make changes and run the website locally:

1. Make sure you have a modern web browser installed (Chrome, Firefox, Edge, Safari).
2. No external server is required—simply open the `index.html` file to view the website locally.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/car-rental-website.git
   cd car-rental-website
   ```
2. **Edit the HTML, CSS, or JavaScript** as per your needs. The `styles.css` file controls the design, and `main.js` controls the interactive elements like the slider and animations.
3. **View your changes** by opening the `index.html` file in a web browser.

### Testing Changes

- Use responsive developer tools (e.g., Chrome DevTools) to test how the site behaves on various screen sizes and devices.
- Ensure the animations and interactive elements (such as the Swiper slider and ScrollReveal effects) work as expected.

## Credits

This website uses several external libraries and assets:

- **Icons**: [RemixIcon](https://remixicon.com/)
- **Car Slider**: [Swiper.js](https://swiperjs.com/)
- **Scroll Animations**: [ScrollReveal.js](https://scrollrevealjs.org/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
