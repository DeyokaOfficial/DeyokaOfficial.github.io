let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  allImages= document.querySelectorAll(".slide"),
  current = 0;


//added this to display arrow when hoovered on
allImages.forEach(item => {
  item.addEventListener("mouseover", function(){
    arrowLeft.style.display="block";
    arrowRight.style.display="block";
  });
});


//Arrows disappeared when off images
allImages.forEach(item => {
  item.addEventListener("mouseout", function(){
    arrowLeft.style.display="none";
    arrowRight.style.display="none";
  });
});


//added this to display left arrow when hoovered on
arrowLeft.addEventListener("mouseover", function(){
  arrowLeft.style.display="block";
  arrowRight.style.display="block";
});


//added this to display right arrow when hoovered on
arrowRight.addEventListener("mouseover", function(){
  arrowLeft.style.display="block";
  arrowRight.style.display="block";
});
// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}


// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}
// preview previous
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// preview next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();