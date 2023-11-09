window.onload = init;

function init() {
  const google = document.getElementById("google");
  const w3Schools = document.getElementById("w3Schools");
  const images = document.getElementById("images");

  google.onclick = googlebuttonClicked;
  w3Schools.onclick = w3SchoolsgooglebuttonClicked;
  images.onclick = imagesbuttonClicked;
}

function googlebuttonClicked() {
    window.open("https://www.google.com");
}

function w3SchoolsgooglebuttonClicked() {
    window.open("https://www.w3schools.com");
}
function imagesbuttonClicked() {
    //window.
    location.href = "images.html"
}