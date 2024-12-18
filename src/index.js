import "./styles.css";
import storageAvailable from "./local-storage.js";
import imageCarousel from "./image-carousel.js";

console.log("Hello World!)");
console.log(`Storage available: ${storageAvailable("localStorage")}`);

const carouselDiv = document.querySelector("#image-carousel");
const ic = imageCarousel(carouselDiv);
