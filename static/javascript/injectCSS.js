// Use different stylesheet depending on if inside iframe
function injectCSS() {
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
    console.log("sup");
    document.head.insertAdjacentHTML("beforeend","<link rel='stylesheet' href='static/css/style-iframe.css'>")
    window.addEventListener('message', function (event) {
        if (event.origin === window.location.origin) {
            document.body.classList.toggle('dark-mode');
        }
    });
}

function directJS() {
    document.head.insertAdjacentHTML("beforeend","<link rel='stylesheet' href='static/css/style-noiframe.css'>")
}


// Temporarily disable animations
function disableTransitions() {
    const element = document.body;
    const currentTransition = element.style.transition;
    element.style.transition = 'none';
  
    // Restore the original transition property value after a brief delay (e.g., 10 milliseconds)
    setTimeout(() => {
      element.style.transition = currentTransition;
    }, 0.2);
}

document.addEventListener('DOMContentLoaded', function () {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(prefersDarkMode) {
        disableTransitions();
        document.body.classList.add('dark-mode');
    }
});