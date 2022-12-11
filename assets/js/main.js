console.clear();
document.getElementById('current-year').innerHTML = new Date().getFullYear();
var scroll = new SmoothScroll('a[href*="#"]');

const shieldNumber1 = document.querySelector("#shield-number-1");
const shieldNumber2 = document.querySelector("#shield-number-2");
const submitButton = document.querySelector("#form-submit");
const userInput = document.querySelector("#spam-shield-input");
const emailInput = document.querySelector("#con-form-email");

function create(tag, parent, text, classs = null, id = null) {
  let temp = document.createElement(tag);
  parent.appendChild(temp);
  temp.innerHTML = text;
  if (classs) temp.classList.add(classs);
  if (id) temp.id = id;
  return temp;
}

var result = -1;

function shieldGenerator() {
  let shieldNumber = Math.floor(Math.random() * 10) + 1;
  shieldNumber1.innerHTML = shieldNumber;
  result = shieldNumber;
  shieldNumber = Math.floor(Math.random() * 10) + 1;
  shieldNumber2.innerHTML = shieldNumber;
  result += shieldNumber;
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function checkResult() {
  if (userInput.value == result && validateEmail(emailInput.value)) {
    submitButton.style.cursor = "pointer";
    submitButton.style.opacity = "1";
    console.log("true");
  } else if (userInput.value != result || !validateEmail(emailInput.value)) {
    submitButton.style.cursor = "not-allowed";
    submitButton.style.opacity = "0.5";
  }

  if (userInput.value == result) {    
    userInput.style.borderColor = "#969696";
  }

  if (validateEmail(emailInput.value)) {
    emailInput.style.borderColor = "#969696";
  }
}

shieldGenerator();
checkResult();

userInput.addEventListener("input", () => {
  checkResult();
});

emailInput.addEventListener("input", () => {
  checkResult();
});

submitButton.addEventListener("click", () => {
  if (submitButton.style.cursor == "pointer") {
    submitButton.innerHTML = "Email envoyé !";
  } else if(userInput.value != result && !validateEmail(emailInput.value)){
    submitButton.classList.add("squeeze");
    userInput.style.borderColor = "red";
    emailInput.style.borderColor = "red";
    setTimeout(() => {
      submitButton.classList.remove("squeeze");
    }, 400);
  }
  else if (userInput.value != result) {
    submitButton.classList.add("squeeze");
    userInput.style.borderColor = "red";
    setTimeout(() => {
      submitButton.classList.remove("squeeze");
    }, 400);
  } else if (!validateEmail(emailInput.value)) {
    submitButton.classList.add("squeeze");
    emailInput.style.borderColor = "red";
    setTimeout(() => {
      submitButton.classList.remove("squeeze");
    }, 400);
  }
});

let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function createPopup(html) {
  // Create the popup container
  var popup = document.createElement("div");
  popup.classList.add("popup");

  // Create the popup content
  var content = document.createElement("div");
  content.classList.add("popup-content");
  content.innerHTML = html;
  popup.appendChild(content);

  // Create the close button
  var button = document.createElement("button");
  button.classList.add("popup-close");
  button.innerText = "Close";
  button.addEventListener("click", function() {
    // Add the "fade-out" class to the popup
    popup.classList.add("fade-out");

    // Remove the popup from the document after the fade out animation is complete
    setTimeout(function() {
      popup.remove();
    }, 500);
  });
  content.appendChild(button);

  // Add the popup to the document body
  document.body.appendChild(popup);

  // Add the "fade-in" class to the popup
  setTimeout(function() {
    popup.classList.add("fade-in");
  }, 10);
}

function singleItem(title, description, image, link, author, date) {
  return `<div class="single-item">
  <div class="single-item-image">
    <img src="${image}" alt="">
  </div>
  <div class="single-item-content">
    <h3>${title}</h3>
    <p>${description}</p>
    <a href="${link}">Voir le projet</a>
  </div>
  <div class="single-item-author">
    <p>Par ${author}</p>
    <p>Le ${date}</p>
  </div>
</div>`;
}

function previewItem(title, description, image, link, author, date, classe=null) {
  return `<div class="preview-item single-xp ${classe ? classe : ''}">
  <div class="preview-item-image">
    <img src="${image}" alt="${title + ' image'}">
  </div>
  <div class="preview-item-content">
    <h3>${title}</h3>
    <p class="desc">${description}</p>
    <a class="btn btn-light" href="${link}">Voir le projet</a>
  </div>
  <div class="preview-item-author">
    <p>Par ${author}</p>
    <p>${date}</p>
  </div>
</div>`;
}

// createPopup("<h1>Hello!</h1><p>This is a popup with some <strong>HTML</strong> content.</p>");

function genrateAllItems() {
  const allItems = document.getElementById("preview-items");

  fetch("../../data.json")
    .then((response) => response.json())
    .then((data) => {
      // loop through the data and create a new item for each
      data.forEach((item) => {
        allItems.innerHTML += previewItem(
          item.title,
          item.description,
          item.image[0],
          item.link,
          item.author,
          item.date
        );
      });
    });
}

// animate the skills bars

// Get the skill progress bar element
const skillProgressBar = document.querySelectorAll('.skill-bar');

skillProgressBar.forEach((bar) => {
  
  const progressBar = bar.querySelector('.skill-progress-bar');
  const skillPercent = progressBar.getAttribute("data-percent");

  // Set the starting and ending values for the animation
  const startValue = 0;
  const endValue = skillPercent;
  const startTime = performance.now();

  // Set the duration of the animation in milliseconds
  const duration = 2000;

  window.requestAnimationFrame(function animate(time) {
    // Calculate the time elapsed since the start of the animation
    const elapsed = time - startTime;
  
    // Calculate the value for the skill progress bar width at the current time
    const value = startValue + (endValue - startValue) * (elapsed / duration);
  
    // Set the width of the skill progress bar to the calculated value
    progressBar.style.width = `${value}%`;
  
    // If the animation is not complete, request another animation frame
    if (elapsed < duration) {
      window.requestAnimationFrame(animate);
    }
  });
});



// Animate the skill progress bar

  