// navbar js
// JavaScript to toggle navbar visibility on scroll
// JavaScript to toggle navbar visibility on scroll
// const navbar = document.querySelector("nav");

// Ensure the navbar is initially visible
// navbar.classList.add("show");

// window.addEventListener("scroll", () => {
//   if (window.scrollY === 0) {
//     // Show navbar when scrolled to the top
//     navbar.classList.add("show");
//   } else {
//     // Hide navbar when scrolling down
//     navbar.classList.remove("show");
//   }
// });





// <--------------------------------------------------Text Effect at Home----------------------------------------------->
var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};


window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};



// Button to download CV

document.getElementById('download-btn').addEventListener('click', function () {
    const cvUrl = 'CV/ANKUR BOSE.pdf'; // Replace with the actual path to your CV file
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'AnkurBose.pdf'; // Replace with your desired file name

    // // Show the progress bar
    // const progressContainer = document.getElementById('progress-container');
    // const progressBar = document.getElementById('progress-bar');
    // progressContainer.classList.remove('hidden'); // Show the progress bar

    // // Simulate download progress (since we can't actually track download progress in JavaScript)
    // let progress = 0;
    // const downloadInterval = setInterval(() => {
    //     progress += 10; // Increase progress by 10%
    //     if (progress <= 100) {
    //         progressBar.style.width = progress + '%';
    //         progressBar.textContent = 'Downloading... ' + progress + '%';
    //     } else {
    //         clearInterval(downloadInterval);
    //         progressBar.textContent = 'Download complete!';
    //         setTimeout(() => {
    //             progressContainer.classList.add('hidden'); // Hide progress bar after 2 seconds
    //         }, 2000);
    //     }
    // }, 100); // Update every 500 ms (you can adjust this timing)

    // Append the link to the body (required for Firefox)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link after triggering the download
    document.body.removeChild(link);
});




// About Section --------------------------------------->
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}






// JavaScript: Adding a click event to load more items
document.getElementById('see-more').addEventListener('click', function (e) {
    e.preventDefault();

    // Select all hidden project elements
    const hiddenProjects = document.querySelectorAll('.work[data-visible="false"]');

    // Loop to reveal up to 3 hidden projects at a time
    for (let i = 0; i < 3 && i < hiddenProjects.length; i++) {
        hiddenProjects[i].style.display = 'block'; // Make the project visible
        hiddenProjects[i].setAttribute('data-visible', 'true'); // Update the visibility attribute
    }

    // If no more hidden projects, hide the "See More" button
    if (document.querySelectorAll('.work[data-visible="false"]').length === 0) {
        document.getElementById('see-more').style.display = 'none';
    }
});







// Get references to buttons and work items
const seeMoreBtn = document.getElementById('see-more');
const showLessBtn = document.getElementById('show-less');
const allProjects = document.querySelectorAll('.work');

// See More Button - Show additional projects in batches of 3
seeMoreBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Select hidden projects and reveal up to 3 at a time
    const hiddenProjects = document.querySelectorAll('.work[data-visible="false"]');
    for (let i = 0; i < 3 && i < hiddenProjects.length; i++) {
        hiddenProjects[i].style.display = 'block';
        hiddenProjects[i].setAttribute('data-visible', 'true');
    }

    // If no more hidden projects, toggle button visibility
    if (document.querySelectorAll('.work[data-visible="false"]').length === 0) {
        seeMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'block'; // Show "Show Less" button
    }
});

// Show Less Button - Reset view to only show first 3 projects
showLessBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Reset all projects except the first 3 to be hidden
    allProjects.forEach((project, index) => {
        if (index >= 3) {
            project.style.display = 'none';
            project.setAttribute('data-visible', 'false');
        }
    });

    // Toggle button visibility back to "See More"
    showLessBtn.style.display = 'none';
    seeMoreBtn.style.display = 'block';
});


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-300px";
}


// Contact Form
// Define the Google Apps Script URL for form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbxLDTo6Y_JotyWDHnf9XhHoA8YGLSw9ozd845tSLF6Sr-yT8BTwmzSv_D5eUM0CgVTkvw/exec';

// Get the form element by name
const form = document.forms['submit-to-google-sheet'];

// Get the element where messages will be displayed
const msg = document.getElementById("msg");

// Add an event listener to handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  // Send form data to the Google Apps Script endpoint using fetch
  fetch(scriptURL, {
    method: 'POST', // Specify the request method
    body: new FormData(form), // Send form data
  })
    .then((response) => {
      if (response.ok) {
        // Display success message
        msg.textContent = "Message sent successfully!";
        // Clear the message after 5 seconds
        setTimeout(() => {
          msg.textContent = "";
        }, 5000);
        // Reset the form
        form.reset();
      } else {
        // Throw an error if the response status is not OK
        throw new Error(`Request failed with status: ${response.status}`);
      }
    })
    .catch((error) => {
      // Display error message
      console.error('Error!', error.message);
      msg.textContent = "Failed to send message. Please try again.";
      // Clear the message after 5 seconds
      setTimeout(() => {
        msg.textContent = "";
      }, 5000);
    });
});
