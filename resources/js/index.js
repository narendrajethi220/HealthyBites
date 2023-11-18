// Scrolling Effect
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling to all links
  var links = document.querySelectorAll("a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using vanilla JavaScript's scrollIntoView() method to add smooth page scroll
        document.querySelector(hash).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
