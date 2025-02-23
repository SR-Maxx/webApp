<video autoplay="true" id="videoElement"></video>

var video = document.querySelector("#videoElement");
if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
        video.srcObject = stream;
    })
    .catch(function (error) {
        console.log("Error accessing the webcam:", error);
    });
} else {
    console.error("Media Devices API not supported in this browser.");
}