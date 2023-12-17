// if ( !localStorage.getItem( "dir" ) ) {
// 	localStorage.setItem( "dir", 'ltr' )
// }

// document.documentElement.dir = localStorage.getItem( "dir" )
// function toggleDirection () {
// 	var bodyElement = document.body
// 	var currentDirection = localStorage.getItem( "dir" )
// 	bodyElement.dir = currentDirection === 'ltr' ? 'rtl' : 'ltr'
// 	localStorage.setItem( "dir", bodyElement.dir )
// }



document.addEventListener("DOMContentLoaded", function () {
  //   imageZoom("Image", "Result");
  let Image = document.getElementById("Image");
  let Result = document.getElementById("Result");
  if(Result){
    Result.style.display = "none";
  }

  let lens = document.querySelectorAll(".img-zoom-lens");
  // Assuming there is a container element that holds the image and lenses
  let containers = document.querySelectorAll(".conner"); // Replace with the actual container ID
  containers.forEach((container) => {
    console.log("hai");
    container.addEventListener("mouseenter", () => {
      // const target = event.target;
      // console.log(target.id)
      console.log("hai2");

      // Remove existing lens and hide result
      const existingLens = container.querySelector(".img-zoom-lens");
      const existingImg = container.querySelector(".img-zoom");
      // const existing = container.querySelector("#image");
      existingImg.setAttribute("id", "img-zoom");
      if (existingLens) {
        existingLens.remove();
      }
      // Result.style.display = "none";

      // Display result
      Result.style.display = "";
      // Call the imageZoom function
      imageZoom("img-zoom", "Result");
    });

    container.addEventListener("mouseleave", function (event) {
      const existingLens = container.querySelector(".img-zoom-lens");
      if (existingLens) {
        existingLens.remove();
      }
      const existingImg = container.querySelector(".img-zoom");
      existingImg.setAttribute("id", "");
      console.log("hai3");
      Result.style.display = "none";
      // Hide the result when the mouse leaves the container
      // Result.style.display = "none";
    });
  });





  // Select all images with the data-src attribute
  var lazyLoadImages = document.querySelectorAll("img[data-src]");
console.log("skeleton")
  // Placeholder image URL

  var placeholderImageSrc = "../assets/logo.jpg";
  // Intersection Observer options
  var options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin
    threshold: 0.1, // 10% visibility threshold
  };

  // Intersection Observer callback function
  function lazyLoadImage(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var img = entry.target;
        // Set the image src attribute to the data-src value
        img.src = img.getAttribute("data-src");
        // Remove the data-src attribute
        img.removeAttribute("data-src");
        // Stop observing the image
        observer.unobserve(img);
      }
    });
  }

  // Create a new Intersection Observer
  const observer = new IntersectionObserver(lazyLoadImage, options);

  // Loop through each lazy load image
  lazyLoadImages.forEach(function(img) {
    // Set the src attribute to the placeholder image URL
    img.src = placeholderImageSrc;
    // Start observing the image
    observer.observe(img);
  });



  document.addEventListener('DOMContentLoaded', () => {

    // Selectors

    const realElements = document.querySelectorAll('.real');

  
    const observer = new IntersectionObserver((entries) => {
  
      entries.forEach(entry => {
  
        if (entry.isIntersecting) {
  
          const target = entry.target;

  
          if (target.classList.contains('real')) {
            const realContent = target.querySelector('.real-content');
            const skeleton = target.querySelectorAll('.skeleton');
            if (realContent) {
              setTimeout(() => {
                skeleton.forEach(el=>{
                  el.remove();
                })
                realContent.classList.remove('real-content'); // Add the class 'hidden' to hide the real content element
               
              }, 3000);
            }
          }
  
          observer.unobserve(target);
  
        }
  
      });
  
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
  
    // Observe elements after DOM ready
    // skeletons.forEach(el => observer.observe(el));
    realElements.forEach(el => observer.observe(el));
  
  });


















  //   if (lens) {
  //     lens.forEach((len) => {
  //         Image.addEventListener("mouseenter", function () {
  //             // Remove existing lens and hide result
  //             len.remove();
  //             Result.style.display = "none";

  //             // Call the imageZoom function
  //             imageZoom("Image", "Result");

  //             // Display result
  //             Result.style.display = "";
  //         });

  //         Image.addEventListener("mouseleave", function () {
  //             // Remove the lens when the mouse leaves the image
  //             len.remove();

  //             // Hide the result when the mouse leaves the image
  //             Result.style.display = "none";
  //         });
  //     });
});



const url = window.location.href;

const urlInput = document.getElementById("url");
if(urlInput){
  urlInput.setAttribute("value", url);
}





function copyToClipboard() {
  var url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(

      function () {
        console.error("Failed to copy URL to clipboard");
      }
    );
  } else {
    // Fallback for older mobile browsers
    var input = document.createElement("input");
    input.setAttribute("value", url);
    input.setAttribute("readonly", true);
    input.style.position = "absolute";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  
  }
}










console.log("hai4");
function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);

  /*create lens:*/
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");

  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);

  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;

  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = img.width * cx + "px " + img.height * cy + "px";

  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);

  /*and also for touch screens:*/
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  //   img.addEventListener("mouseout", hideLens);

  //   // ...

  //   function hideLens() {
  // 	  lens.style.display = "none";
  //   }

  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - lens.offsetWidth / 2;
    y = pos.y - lens.offsetHeight / 2;
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
  }

  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}



var elem = document.getElementById("overlay-product");

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

//timer
const targetDate = new Date("December 30, 2023 23:59:59").getTime();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;
  if (timeRemaining <= 0) {
    clearInterval(countdownInterval); // Stop the countdown when the target date is reached
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const daysId = document.getElementById("days");
    const hoursId = document.getElementById("hours");
    const minutesId = document.getElementById("minutes");
    const secondsId = document.getElementById("seconds");
    if (daysId && hoursId && minutesId && secondsId) {
      daysId.innerText = formatTime(days);
      hoursId.innerText = formatTime(hours);
      minutesId.innerText = formatTime(minutes);
      secondsId.innerText = formatTime(seconds);
    }
  }
}
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function toggelColor() {
  element.classList.toggle("text-primary");
}

function range() {
  return {
    minprice: 500000,
    maxprice: 8000000,
    min: 1000,
    max: 10000000,
    minthumb: 0,
    maxthumb: 0,

    mintrigger() {
      this.minprice = Math.min(this.minprice, this.maxprice - 500);
      this.minthumb =
        ((this.minprice - this.min) / (this.max - this.min)) * 100;
    },

    maxtrigger() {
      this.maxprice = Math.max(this.maxprice, this.minprice + 500);
      this.maxthumb =
        100 - ((this.maxprice - this.min) / (this.max - this.min)) * 100;
    },
  };
}

//contact-us
//map
var map = L.map("map").setView([29.982, 30.941919], 11);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);
L.marker([29.982, 30.941919]).addTo(map).bindPopup("Vitamingy").openPopup();

// //login-signup

// function togglePassword() {
//   const password = document.querySelector("#password");
//   const eye = document.querySelector("#eye");
//   if (eye.classList.contains("fa-eye")) {
//     eye.classList.replace("fa-eye", "fa-eye-slash");
//   } else if (eye.classList.contains("fa-eye-slash")) {
//     eye.classList.replace("fa-eye-slash", "fa-eye");
//   }
//   const type =
//     password.getAttribute("type") === "password" ? "text" : "password";
//   password.setAttribute("type", type);
// }

// prevent form submit
// const form = document.querySelector( "form" )
// form.addEventListener( 'submit', function ( e ) {
// 	e.preventDefault()
// } )
