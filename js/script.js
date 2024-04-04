document.addEventListener("DOMContentLoaded", function () {
  // Get all the navigation links
  const navLinks = document.querySelectorAll(".nav-custom-link");

  // Add click event listener to each navigation link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Prevent default behavior of anchor links
      event.preventDefault();

      // Get the target section id from the href attribute
      const targetId = link.getAttribute("href").substring(1);

      // Scroll to the target section smoothly
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch the form data
    const formData = new FormData(this);

    // Send the form data asynchronously using fetch API
    fetch("https://formspree.io/f/xdoqwrqz", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Display a success message
            alert("Thank you! Your message has been sent.");
            // Optionally, clear the form fields
            this.reset();
        } else {
            // Display an error message
            alert("Oops! Something went wrong. Please try again later.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Display an error message
        alert("Oops! Something went wrong. Please try again later.");
    });
});
