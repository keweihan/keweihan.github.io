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
        width: "90%" 
    }, 
    { 
        duration: 1000, 
        begin: insertBrowser, 
        complete: function setURL(){
            document.getElementById("browser").src = url;
        }
    });
    document.getElementById("browser").src = url;   
}