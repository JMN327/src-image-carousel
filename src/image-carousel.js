import "./image-carousel.css";

//basic structure ripped from w3s and reshaped for a module.  credit to them due.

export default function imageCarousel(div = document.createElement("div")) {
  console.log("Image carousel initiated");
  let images = [];
  let slides = [];

  div.classList.add("slideshow-container");

  // Initiation
  getImages();
  makeSlides();
  getWrappers();
  addImageNumbersAndCaptionsWithinWrappers();
  addNextAndPrevButtons();
  addDots();

  //Functionality
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slides");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  function getImages() {
    images = Array.from(div.querySelectorAll("img"));
    /* images.forEach((img) => {
      img.style.width = "100%";
    }); */

    console.log("image Array Length: " + images.length);
  }

  function makeSlides() {
    images.forEach((img) => {
      let slide = document.createElement("div");
      slide.classList.add("slides");
      slide.classList.add("fade");
      div.appendChild(slide);
      slide.appendChild(img);
    });
  }

  function getWrappers() {
    slides = Array.from(div.querySelectorAll(".slides"));
    console.log("wrapper Array Length: " + slides.length);
  }

  function addImageNumbersAndCaptionsWithinWrappers() {
    slides.forEach((slide, index) => {
      let numberText = document.createElement("div");
      numberText.classList.add("numbertext");
      numberText.textContent = `${index + 1} / ${slides.length}`;
      slide.appendChild(numberText);

      let caption = document.createElement("div");
      caption.classList.add("text");
      caption.textContent = `Caption ${index + 1}`;
      slide.appendChild(caption);
    });
  }

  function addNextAndPrevButtons() {
    let prevButton = document.createElement("a");
    prevButton.classList.add("prev");
    let buttonText = document.createElement("div");
    buttonText.textContent = "❮";
    prevButton.appendChild(buttonText);
    prevButton.addEventListener("mouseup", () => plusSlides(-1));
    div.appendChild(prevButton);

    let nextButton = document.createElement("a");
    nextButton.classList.add("next");
    buttonText = document.createElement("div");
    buttonText.textContent = "❯";
    nextButton.appendChild(buttonText);
    nextButton.addEventListener("mouseup", () => plusSlides(1));
    div.appendChild(nextButton);
  }

  function addDots() {
    let dotContainer = document.createElement("div");
    dotContainer.classList.add("dot-container");
    div.appendChild(dotContainer);

    for (let i = 0; i < images.length; i++) {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("mouseup", () => currentSlide(i + 1));
      dotContainer.appendChild(dot);
    }
  }

  return {};
}
