// Banner Auto Slide
let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("banner-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides();

// Form Contact Us Validation
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const destination = document.getElementById("destination").value;

  if (name.trim() === "" || email.trim() === "" || destination.trim() === "") {
    alert("Please fill in all fields");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address");
    return false;
  }

  return true;
}
