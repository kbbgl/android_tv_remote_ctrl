// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var remoteRoot = document.createElement("div");
remoteRoot.id = "remoteroot";

var outerCircle = document.createElement("canvas");
var context = outerCircle.getContext("2d");
context.beginPath();
context.arc(100, 100, 75, 0, 2 * Math.PI);
context.stroke();

var button = document.createElement("BUTTON");
button.className = "btn btn-primary bmd-btn-fab";

button.onclick = () => {
    alert('Clicked');
}

remoteRoot.appendChild(button)
document.body.appendChild(remoteRoot);