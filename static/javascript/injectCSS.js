// Use different stylesheet depending on if inside iframe
function injectCSS() {
    if (window.top!=window.self)
    {
        // In a Frame or IFrame
        document.head.insertAdjacentHTML("beforeend","<link rel='stylesheet' href='static/css/style-iframe.css'>")
    }
    else
    {
        // Not in a frame
        document.head.insertAdjacentHTML("beforeend","<link rel='stylesheet' href='static/css/style-noiframe.css'>")
    } 
}
