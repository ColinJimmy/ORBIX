const paragraphs = [
    "A day on Saturn is only 10.7 hours and a year is 29 Earth years.",
    "Saturn is the least dense planet in the Solar System.",
    "Saturn has a moon bigger than Mercury.",
    "Saturn has more moons than any other planet in the Solar System",
    "Saturn Rings consist of Comets,Asteroids and shattered Moons",
    "Saturns Magnetic field is smaller than jupiter"
]; // Add your paragraph texts here

let currentIndex = 0;

function changeContent() {
   // document.getElementById("image").src = images[currentIndex];
    document.getElementById("paragraph").textContent = paragraphs[currentIndex];
    currentIndex = (currentIndex + 1) % paragraphs.length;
}

// Call the changeContent function every 5 seconds
setInterval(changeContent, 3000);

// Initial call to display the first content
changeContent();
