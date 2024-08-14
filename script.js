var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");

// Array to store image sources
var images = [];

// Populate the thumbnails and the images array
for (var i = 1; i <= 10; i++) {
  var thumb = document.createElement("img");
  var imageSrc = "images/image" + i + ".jpg";
  
  thumb.src = imageSrc;
  thumb.alt = "Image " + i;
  thumb.classList.add("thumb");
  
  images.push(imageSrc); // Add image source to the array
  imageThumbs.appendChild(thumb);
  
  thumb.addEventListener("click", function() {
    currentImage.src = this.src;
    currentIndex = images.indexOf(this.src); // Update currentIndex when thumbnail is clicked
  });
}

var currentIndex = 0;

// Function to update the displayed image
function updateImage() {
  currentImage.src = images[currentIndex];
}

// Event listener for the previous button
document.getElementById("prev-btn").addEventListener("click", function() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  updateImage();
});

// Event listener for the next button
document.getElementById("next-btn").addEventListener("click", function() {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  updateImage();
});
