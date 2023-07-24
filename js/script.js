// const sliderLinks = document.querySelectorAll('.slider-link');
// const slider = document.querySelector('.slider');

// sliderLinks.forEach((link, index) => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();
//     slider.style.transform = `translateX(-${index * 100}%)`;
//   });
// });






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












