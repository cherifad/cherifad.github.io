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

createPopup("<h1>Hello!</h1><p>This is a popup with some <strong>HTML</strong> content.</p>");
