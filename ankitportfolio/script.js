
// smooth-srolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// scroll-to-top
document.addEventListener('scroll', () => {
  const button = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 200) { // Show button after scrolling down 200px
      button.classList.add('show');
  } else {
      button.classList.remove('show');
  }
});

document.getElementById('scrollToTopBtn').addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// scroll-to-top

// subscription-popup

// subscription-popup

// circular-nav-menu
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const navButton = document.getElementById('circular-navButton');
  const navMenu = document.getElementById('circular-navMenu');

  navButton.addEventListener('click', () => {
      navMenu.classList.toggle('show');
  });
});


// circular-nav-menu

// project-section-starts

// Function to show the 'View Details' popup after 4 seconds when scrolling to the project section
function showProjectPopup() {
  const projectSection = document.querySelector('.project-section');
  const projectItems = document.querySelectorAll('.project-item');
  const sectionPosition = projectSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    setTimeout(() => {
      projectItems.forEach(item => {
        item.classList.add('show-popup');
      });
    }, 4000); // 4 seconds delay before showing popup
  }
}

// Add scroll event listener to trigger the popup when the user scrolls
window.addEventListener('scroll', showProjectPopup);

// Open the modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'flex'; // Display the modal
}

// Close the modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none'; // Hide the modal
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}


// project-section-ends

// contact-section-starts
// Initialize EmailJS
(function() {
  emailjs.init("H6j5pn7onruWSiPQ3");  // Replace 'your_user_id' with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Send form data using EmailJS
  emailjs.sendForm('service_3zgwpol', 'template_u8g17lb', this)
      .then(function(response) {
         alert('Message sent successfully!', response.status, response.text);
      }, function(error) {
         alert('Failed to send message. Please try again later.', error);
      });

  // Clear the form after submission
  document.getElementById('contact-form').reset();
});

// contact-section-ends

// footer-section-starts
function subscribe() {
  const email = document.getElementById('email').value;
  if (validateEmail(email)) {
      alert('Subscription successful!');
  } else {
      alert('Please enter a valid email address.');
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// footer-section-ends


// Wait for the page to load completely
window.addEventListener('load', function() {
  // Set a delay of 7 seconds before hiding the preloader
  setTimeout(function() {
      // Hide the preloader after 7 seconds
      document.getElementById('preloader').style.display = 'none';
      // Show the main content of the website
      document.getElementById('content').style.display = 'block';
  }, 5000); // 7000 milliseconds = 7 seconds
});
