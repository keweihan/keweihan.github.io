
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


// OnClick() animation function
function openURL(url)
{
    // Insert iframe browser and make wider 
    Velocity(document.getElementById("browser-wrapper"), 
    {
        width: "60%" 
    },
    { 
        duration: 750, 
        easing: [.17,.67,.22,.99],
        begin: insertBrowser, 
        complete: function setURL(){
            document.getElementById("browser").src = url;
        },
    }
    );

    // Make link smaller
    Velocity(document.getElementById("link-hub"), 
    {
        width: "20%" 
    },
    { 
        duration: 750, 
        easing: [.17,.67,.22,.99],
        begin: insertBrowser, 
        complete: function setURL(){
            document.getElementById("browser").src = url;
        },
    }
    );
    document.getElementById("browser").src = url;   
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
          Velocity(content, "slideUp");
        } else {
          // Animate showing
          Velocity(content, "slideDown");
          // Hide other dropdowns
          dropdowns.forEach(function(otherDropBtn) {
            var otherTargetId = otherDropBtn.getAttribute('data-target');
            if (otherTargetId !== targetId) {
              var otherContent = document.getElementById(otherTargetId);
              Velocity(otherContent, "slideUp");
            }
          });
        }
      });
    });
  });