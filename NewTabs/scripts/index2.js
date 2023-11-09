document.addEventListener("DOMContentLoaded", ()=>{
  
  const google = document.getElementById("google")
  const w3Schools = document.getElementById("w3Schools")
  const images = document.getElementById("images")

  google.addEventListener("click", ()=>{
    window.open("https://www.google.com") 
  })
  w3Schools.addEventListener("click", ()=>{
    window.open("https://www.w3schools.com")
  })
  images.addEventListener("click", ()=>{
    location.href = "images.html"
  })
})
