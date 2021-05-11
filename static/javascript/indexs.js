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


function openURL(url)
{
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