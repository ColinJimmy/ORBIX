const paragraphs = [
    "Neptune is the densest of the giant planets",
    "Voyager 2 is the only spacecraft to visit Neptune",
    "Neptune has five rings and four more ring arcs",
    "Neptune takes 165 Earth years to go around the Sun",
    "It has 14 Known moons",
    "It doesnt have a solid surface"
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
