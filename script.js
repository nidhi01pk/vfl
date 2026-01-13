document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  // Function to check if an element is in viewport and reveal it
  const reveal = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
      // Get the position of the element
      const elementTop = el.getBoundingClientRect().top + scrollY;

      // Check if the element is in the viewport (with a small offset)
      if (scrollY + windowHeight - 100 > elementTop) {
        el.classList.add("visible");
      } else {
        // Optional: Remove 'visible' class if element scrolls out of view
        // el.classList.remove("visible");
      }
    });
  };

  // Run reveal on initial load
  reveal();

  // Run reveal on scroll
  document.addEventListener("scroll", reveal);

  // Smooth scroll for anchor links (e.g., "Learn More" button)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});