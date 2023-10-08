const paragraphs = [
    "Uranus Moons are named after Shakespeare characters",
    "Uranus is the only planet not named after a Roman God",
    "The discoverer of Uranus wanted it to be called Georgium Sidus",
    "You could fit 63 Earths inside Uranus",
    "It was the first planet to be discovered through a telescope",
    "Uranus ha 27 known Moons",
    "It is one of 2 planet that rotates in opposite direction"
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
