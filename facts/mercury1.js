const paragraphs = [
    "Mercury has no moons",
    "On Mercury a day is twice as long as a year",
    "Sunlight is 11 times brighter on Mercury",
    "A year on Mercury is 88 Earth days",
    "Mercury orbits closest to the Sun.",
    "Second densest planet",
    "Atmosphere consist of Oxygen,Sodium,Hydrogen,Helium etc"
]; // Add your paragraph texts here

let currentIndex = 0;

function changeContent() {
   // document.getElementById("image").src = images[currentIndex];
    document.getElementById("paragraph").textContent = paragraphs[currentIndex];
    currentIndex = (currentIndex + 1) % paragraphs.length;
}

// Call the changeContent function every 3 seconds
setInterval(changeContent, 3000);

// Initial call to display the first content
changeContent();
