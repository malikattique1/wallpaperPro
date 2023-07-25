// const sliderLinks = document.querySelectorAll('.slider-link');
// const slider = document.querySelector('.slider');

// sliderLinks.forEach((link, index) => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();
//     slider.style.transform = `translateX(-${index * 100}%)`;
//   });
// });





// const imageContainer = $('#imageContainer');
// const imagePopup = $('#imagePopup');
// const popupImage = $('#popupImage');

// imageContainer.on('click', '.image', function() {
//   const imageUrl = $(this).attr('src');
//   popupImage.attr('src', imageUrl);
//   imagePopup.fadeIn('fast');
// });




// Close the pop-up when clicking outside the image
// $(document).on('click', function(event) {
//   if (!imagePopup.is(event.target) && imagePopup.has(event.target).length === 0) {
//     imagePopup.fadeOut('fast');
//   }
// });



// $(document).ready(function() {
//   const imageContainer = $('#imageContainer');
//   const imagePopup = $('#imagePopup');
//   const popupImage = $('#popupImage');
//   let isImageOpen = false;

//   // Show the pop-up with the clicked image
//   imageContainer.on('click', '.image', function() {
//     const imageUrl = $(this).attr('src');
//     popupImage.attr('src', imageUrl);
//     imagePopup.fadeIn('fast');
//     isImageOpen = true;
//   });

//   // Close the pop-up when clicking outside the image or pop-up
//   $(document).on('click', function(event) {
//     if (isImageOpen && !imagePopup.is(event.target) && imagePopup.has(event.target).length === 0) {
//       imagePopup.fadeOut('fast');
//       isImageOpen = false;
//     }
//   });
// });


$(document).ready(function() {



  $('.like-btn2').on('click', function() {
    // Toggle the classes "like-btn" and "liked-btn" for the clicked save button
    $(this).toggleClass('like-btn2 liked-btn');
    // Get the current source of the image
    const currentSrc = $(this).attr('src');
    // Check if the button is now in liked state (has class "liked-btn")
    if ($(this).hasClass('liked-btn')) {
      // Change the source of the image to the new image path for liked state
      $(this).attr('src', 'img/liked.png');
    } else {
      // Change the source of the image back to the original image path
      $(this).attr('src', 'img/like2.png');
    }
  });




  $('.save-btn').on('click', function() {
    // Toggle the classes "like-btn" and "liked-btn" for the clicked save button
    $(this).toggleClass('like-btn liked-btn');
    // Get the current source of the image
    const currentSrc = $(this).attr('src');
    // Check if the button is now in liked state (has class "liked-btn")
    if ($(this).hasClass('liked-btn')) {
      // Change the source of the image to the new image path for liked state
      $(this).attr('src', 'img/liked.png');
    } else {
      // Change the source of the image back to the original image path
      $(this).attr('src', 'img/like.png');
    }
  });






  $('.download-btn').on('click', function() {
    // Get the URL of the image to be downloaded
    const imageUrl = $(this).closest('.image-item').find('.image').attr('src');

    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;

    // Set the download attribute to the image file name
    downloadLink.download = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);

    // Trigger the download action
    downloadLink.click();
  });


  $('#freeDownload').on('click', function() {
    // Get the URL of the image to be downloaded
    const imageUrl = $('#popupImage').attr('src');

    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;

    // Set the download attribute to the image file name
    downloadLink.download = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);

    // Trigger the download action
    downloadLink.click();
  });














  const slider = $('.slider');
  const sliderArrowLeft = $('#sliderArrowLeft');
  const sliderArrowRight = $('#sliderArrowRight');
  const sliderLinks = $('.slider-link');
  let linksToShow = 9; // Default value for desktop screens
  let currentIndex = 0;

  function updateSlider() {
    sliderLinks.hide(); // Hide all links

    // Show the next batch of links starting from currentIndex
    sliderLinks.slice(currentIndex, currentIndex + linksToShow).show();

    // Show/hide the arrows based on the current index
    sliderArrowLeft.toggleClass('hidden', currentIndex === 0);
    sliderArrowRight.toggleClass('hidden', currentIndex >= sliderLinks.length - linksToShow);

    // Prevent moving further right when no links left
    if (currentIndex > sliderLinks.length - linksToShow) {
      currentIndex = sliderLinks.length - linksToShow;
      updateSlider();
    }
  }

  // Show the initial set of links based on screen size
  function showInitialLinks() {
    const screenWidth = $(window).width();
    if (screenWidth <= 1424 && screenWidth >= 968) {
      linksToShow = 6; // Show 3 links on ipad screens
    } else if(screenWidth <= 968 && screenWidth >= 768) {
      linksToShow = 4; // Show 3 links on mobile screens
    }
     else if(screenWidth <= 768) {
      linksToShow = 3; // Show 3 links on mobile screens
    }
    else {
      linksToShow = 9; // Show 9 links on desktop screens
    }
    updateSlider();
  }

  // Call the function to show initial links
  showInitialLinks();

  // Recalculate the number of links to show on window resize
  $(window).resize(function() {
    showInitialLinks();
  });

  // Clicking on the right arrow advances the slider
  sliderArrowRight.on('click', function() {
    currentIndex += linksToShow;
    updateSlider();
  });

  // Clicking on the left arrow goes back in the slider
  sliderArrowLeft.on('click', function() {
    currentIndex -= linksToShow;
    if (currentIndex < 0) {
      currentIndex = 0;
    }
    updateSlider();
  });



















  const imageContainer = $('#imageContainer');
  const imagePopup = $('#imagePopup');
  const popupImage = $('#popupImage');
  let isImageOpen = false;

  // Show the pop-up with the clicked image
  imageContainer.on('click', '.image', function(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    const imageUrl = $(this).attr('src');
    popupImage.attr('src', imageUrl);
    imagePopup.fadeIn('fast');
    isImageOpen = true;
  });

  // Close the pop-up when clicking outside the image or pop-up
  $(document).on('click', function(event) {
    if (isImageOpen && !imagePopup.is(event.target) && imagePopup.has(event.target).length === 0) {
      imagePopup.fadeOut('fast');
      isImageOpen = false;
    }
  });




















});













const searchContainer = $('.search-container');
const searchesContainer = $('.searches-container');

searchContainer.on('click', function(event) {
  searchesContainer.slideDown('fast');
  searchContainer.addClass('no-border-radius');
  event.stopPropagation();
});

$(document).on('click', function(event) {
  if (!searchContainer.is(event.target) && !searchesContainer.is(event.target) && searchesContainer.has(event.target).length === 0) {
    searchesContainer.slideUp('fast');
    searchContainer.removeClass('no-border-radius');
  }
});








const filterPicker = document.getElementById('filterPicker');
const filterPickerIcon = document.getElementById('filterPickerIcon');

const selectTriggerFilter = filterPicker.querySelector('.select-trigger-filter');
const selectOptionsFilter = filterPicker.querySelector('.select-options-filter');
const optionItemsFilter = filterPicker.querySelectorAll('.option-filter');

// Function to toggle the select options visibility
function toggleOptionsFilter() {
  selectOptionsFilter.classList.toggle('open');
}

// Function to handle the selection of an option
function selectOptionFilter(option) {
  const selectedFilter = option.dataset.value;
  selectTriggerFilter.textContent = selectedFilter;
}

// Function to close the select options
function closeOptionsFilter() {
  selectOptionsFilter.classList.remove('open');
}

// Event listener for clicking the select trigger
selectTriggerFilter.addEventListener('click', () => {
  toggleOptionsFilter();
});
filterPickerIcon.addEventListener('click', () => {
  toggleOptionsFilter();
});


// Event listeners for clicking each option
optionItemsFilter.forEach(option => {
  option.addEventListener('click', () => {
    selectOptionFilter(option);
    closeOptionsFilter();
  });
});

// Event listener to close the select options when clicking outside the dropdown
document.addEventListener('click', event => {
  if (!filterPicker.contains(event.target)) {
    closeOptionsFilter();
  }
});












const orientationPicker = document.getElementById('orientationPicker');
const orientationPickerIcon = document.getElementById('orientationPickerIcon');

const selectTriggerOrientation = orientationPicker.querySelector('.select-trigger-orientation');
const selectOptionsOrientation = orientationPicker.querySelector('.select-options-orientation');
const optionItemsOrientation = orientationPicker.querySelectorAll('.option-orientation');

// Function to toggle the select options visibility
function toggleOptionsOrientation() {
  selectOptionsOrientation.classList.toggle('open');
}

// Function to handle the selection of an option
function selectOptionOrientation(option) {
  const selectedOrientation = option.dataset.value;
  selectTriggerOrientation.textContent = selectedOrientation;
}

// Function to close the select options
function closeOptionsOrientation() {
  selectOptionsOrientation.classList.remove('open');
}

// Event listener for clicking the select trigger
selectTriggerOrientation.addEventListener('click', () => {
  toggleOptionsOrientation();
});
orientationPickerIcon.addEventListener('click', () => {
  toggleOptionsOrientation();
});


// Event listeners for clicking each option
optionItemsOrientation.forEach(option => {
  option.addEventListener('click', () => {
    selectOptionOrientation(option);
    closeOptionsOrientation();
  });
});

// Event listener to close the select options when clicking outside the dropdown
document.addEventListener('click', event => {
  if (!orientationPicker.contains(event.target)) {
    closeOptionsOrientation();
  }
});










const sizePicker = document.getElementById('sizePicker');
const sizePickerIcon = document.getElementById('sizePickerIcon');

const selectTriggerSize = document.querySelector('.select-trigger-size');
const selectOptionsSize = document.querySelector('.select-options-size');
const optionItemsSize = document.querySelectorAll('.option-size');

// Function to toggle the select options visibility
function toggleOptionsSize() {
  selectOptionsSize.classList.toggle('open');
}

// Function to handle the selection of an option
function selectOptionSize(option) {
  const selectedOptionText = option.textContent;
  selectTriggerSize.textContent = selectedOptionText;
}

// Function to close the select options
function closeOptionsSize() {
  selectOptionsSize.classList.remove('open');
}

// Event listener for clicking the select trigger
selectTriggerSize.addEventListener('click', () => {
  toggleOptionsSize();
});
sizePickerIcon.addEventListener('click', () => {
  toggleOptionsSize();
});

// Event listeners for clicking each option
optionItemsSize.forEach(option => {
  option.addEventListener('click', () => {
    selectOptionSize(option);
    closeOptionsSize();
  });
});

document.addEventListener('click', event => {
  if (!sizePicker.contains(event.target)) {
    closeOptionsSize();
  }
});
















const colorPicker = document.getElementById('colorPicker');
const colorPickerIcon = document.getElementById('colorPickerIcon');

const selectTrigger = colorPicker.querySelector('.select-trigger');
const selectOptions = colorPicker.querySelector('.select-options');
const optionItems = colorPicker.querySelectorAll('.option');

// Function to toggle the select options visibility
function toggleOptions() {
  selectOptions.classList.toggle('open');
}

// Function to handle the selection of an option
function selectOption(option) {
  const selectedColor = option.dataset.value;
  selectTrigger.textContent = selectedColor;
}

// Function to close the select options
function closeOptions() {
  selectOptions.classList.remove('open');
}

// Event listener for clicking the select trigger
selectTrigger.addEventListener('click', () => {
  toggleOptions();
});
colorPickerIcon.addEventListener('click', () => {
  toggleOptions();
});

// Event listeners for clicking each option
optionItems.forEach(option => {
  option.addEventListener('click', () => {
    selectOption(option);
    closeOptions();
  });
});

// Event listener to close the select options when clicking outside the dropdown
document.addEventListener('click', event => {
  if (!colorPicker.contains(event.target)) {
    closeOptions();
  }
});












