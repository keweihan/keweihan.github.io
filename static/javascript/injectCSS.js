// Use different stylesheet depending on if inside iframe
function injectCSS() {
    console.log("Hello2?");
    if (window.top!=window.self)
    {
        // In a Frame or IFrame
        iframeJS();
    }
    else
    {
        // Not in a frame
        directJS();
        document.head.insertAdjacentHTML("beforeend","<link rel='stylesheet' href='static/css/style-noiframe.css'>")
    } 
}

function iframeJS() {
    document.head.insertAdjacentHTML("beforeend","<link rel='stylesheet' href='static/css/style-iframe.css'>")
    window.addEventListener('message', function (event) {
        console.log("Hello?");
        console.log(event.origin);
        console.log(window.location.origin);
        if (event.origin === window.location.origin) {
            // Toggle dark mode in the iframe
            // You can have your own logic here
            document.body.classList.toggle('dark-mode');
        }
        // console.log(event.origin);
        // document.body.classList.toggle('dark-mode');
    });
}

function directJS() {
    document.head.insertAdjacentHTML("beforeend","<link rel='stylesheet' href='static/css/style-noiframe.css'>")
}