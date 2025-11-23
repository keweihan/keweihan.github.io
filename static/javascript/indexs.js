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

// Change display of iframe browser
function changeSourceAndFadeIn(newUrl) {
  openedUrl = newUrl;
  document.getElementById("browser").src = newUrl;
  document.getElementById("browser").style.opacity = 0;
  document.getElementById("browser").onload = function() {
    // Artificial delay to hide visual glitch (TODO: hacky fix.)
    setTimeout(function() {
      $(document.getElementById("browser")).velocity(
        {
          opacity: 1 
        },
        { 
            duration: 750, 
            easing: [.17,.67,.22,.99],
        }
      )
      },
      90
    )
    if(isDarkMode) 
    {
      toggleDarkModeInIframe(true);
    }
  }
}

// OnClick() animation function
var openedUrl;
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
        // Do nothing if same source
        if(document.getElementById("browser").src === url) {
          return;
        }       
        changeSourceAndFadeIn(url);
    }
}

function toggleSkin() {
  var stylesheet = document.getElementById('skinStylesheet');
  if (stylesheet.disabled) {
      stylesheet.disabled = false;
  } else {
      stylesheet.disabled = true;
  }
}

document.addEventListener('DOMContentLoaded', function () {
    if(prefersDarkMode) {
      toggleDarkModeIndex(true);
    }

    resizeBrowser();
  
    // Helper: resolve the content element for a drop button.
    function getContentForDropbtn(btn) {
      var targetId = btn.getAttribute('data-target');
      if (targetId) {
        return document.getElementById(targetId);
      }
      // Fallback: next sibling with class 'link-group'
      var next = btn.nextElementSibling;
      if (next && next.classList && next.classList.contains('link-group')) {
        return next;
      }
      // Last resort: search within parent for a .link-group
      var parent = btn.parentElement;
      if (parent) {
        return parent.querySelector('.link-group');
      }
      return null;
    }
  
    // Select all dropdown buttons
    var dropdowns = Array.prototype.slice.call(document.querySelectorAll('.dropbtn'));
  
    dropdowns.forEach(function(dropbtn) {
      dropbtn.addEventListener('click', function(event) {
        event.preventDefault();
        // Resolve content element for this dropbtn
        var content = getContentForDropbtn(this);
        if (!content) return;
        var $content = $(content);
  
        // Check if the dropdown is currently visible
        if ($content.is(':visible')) {
          // Animate hiding only this content (do not affect ancestors)
          $content.velocity('slideUp');
        } else {
          // Animate showing
          $content.velocity('slideDown');

          // Hide other dropdowns, but do NOT hide ancestors of the opened content
          dropdowns.forEach(function(otherDropBtn) {
            if (otherDropBtn === dropbtn) return;
            var otherContent = getContentForDropbtn(otherDropBtn);
            if (!otherContent || otherContent === content) return;

            // If otherContent is an ancestor of the content we're opening, keep it open.
            if (otherContent.contains(content)) return;

            // Otherwise hide it
            $(otherContent).velocity('slideUp');
          });
        }
      });
    });
  });


// Function to toggle dark mode styles
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
var isDarkMode = false;
function toggleDarkMode(disableTransitions) {
  isDarkMode = !isDarkMode;
  toggleDarkModeIndex(disableTransitions);
  toggleDarkModeInIframe(disableTransitions);
}

function toggleDarkModeIndex(disableTransitions) {
  // Temporarily disable transitions if indicated
  if(disableTransitions) {
    this.document.body.classList.add('notransition');
    document.getElementById('link-hub').classList.add('notransition');
    setTimeout(() => {
        this.document.body.classList.remove('notransition');
        document.getElementById('link-hub').classList.remove('notransition');
    }, 0.3);
  } 
  document.body.classList.toggle('dark-mode'); 
}

function toggleDarkModeInIframe(disableTransitions) {
  const iframe = document.getElementById('browser');
  if(iframe) {
    console.log("called?");
    iframe.contentWindow.postMessage(disableTransitions, window.location.origin);
  }
}

// Browser should not be shorter than link, but can be taller
function resizeBrowser() {
  const browserWrapper = document.getElementById('browser-wrapper');
  const linkHub = document.getElementById('link-hub');

  browserWrapper.style.minHeight = `${linkHub.clientHeight}px`;
}

window.addEventListener('resize', function() {
  resizeBrowser();
});

window.onload = function() {
  // Only load window if iframe can be generated
  if (window.innerWidth > 768) {
    setTimeout(function() {
      openURL("./html/home.html");
    }, 500);
  }
};



