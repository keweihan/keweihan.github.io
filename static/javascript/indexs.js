
// Insert iframe if it doesn't already exist
function insertBrowser()
{
    var wrapper = document.getElementById("browser-wrapper");
    var browser = document.getElementById("browser");
    if (!browser) 
    { // browser window is NOT open
        wrapper.insertAdjacentHTML("beforeend", " <iframe id='browser''><\iframe>");
    } 
}

function changeSourceAndFadeIn(newUrl) {
  document.getElementById("browser").src = newUrl;
  document.getElementById("browser").style.opacity = 0;
  document.getElementById("browser").onload = function() {
    $(document.getElementById("browser")).velocity(
      {
        opacity: 1 
      },
      { 
          duration: 750, 
          easing: [.17,.67,.22,.99],
      }
    )

    if(isDarkMode) 
    {
      toggleDarkModeInIframe();
    }
  }
}

// OnClick() animation function
function openURL(url)
{
    // If mobile
    if (window.innerWidth <= 768) {
        window.location.href = url;
    }
    
    // Insert iframe browser and make wider 
    var browser = document.getElementById("browser");
    if (!browser) 
    { // browser window is NOT open
      $(document.getElementById("browser-wrapper")).velocity( 
        {
            width: "60%" 
        },
        { 
            duration: 750, 
            easing: [.17,.67,.22,.99],
            begin: insertBrowser, 
            complete: function setURL(){
              changeSourceAndFadeIn(url);
            },
        }
      );
    }
    else
    {
        changeSourceAndFadeIn(url);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Select all dropdown buttons
    var dropdowns = document.querySelectorAll('.dropbtn');
  
    dropdowns.forEach(function(dropbtn) {
      dropbtn.addEventListener('click', function() {
        // Get the target from the data attribute
        var targetId = this.getAttribute('data-target');
        var content = document.getElementById(targetId);
        var $content = $(content);
  
        // Check if the dropdown is currently visible
        if ($content.is(':visible')) {
          // Animate hiding
          $content.velocity("slideUp");
        } else {
          // Animate showing
          $content.velocity("slideDown");

          // Hide other dropdowns
          dropdowns.forEach(function(otherDropBtn) {
            var otherTargetId = otherDropBtn.getAttribute('data-target');
            if (otherTargetId !== targetId) {
              var otherContent = document.getElementById(otherTargetId);
              $(otherContent).velocity("slideUp");
            }
          });
        }
      });
    });
  });


// Function to toggle dark mode styles
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
var isDarkMode = false;
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  const body = document.body;
  toggleDarkModeInIframe();
  body.classList.toggle('dark-mode');
}

function toggleDarkModeInIframe() {
  const iframe = document.getElementById('browser');
  console.log(window.location.origin);
  iframe.contentWindow.postMessage("toggleDarkMode", window.location.origin);
}

window.onload = function() {
  // Only load window if iframe can be generated
  if (window.innerWidth > 768) {
    setTimeout(function() {
      openURL("./html/home.html");
    }, 500);
  }
};

