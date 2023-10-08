const paragraphs = [
    "It takes Sunlight 43 minutes to travel from the Sun to Jupiter",
    "Jupiter has 80 moons",
    "The composition of Jupiter Atmosphere is similar to that of the Sun mostly hydrogen and helium.",
    "There are clouds on Jupiter",
    "A Spacecraft would have nowhere to land on Jupiter, it wouldnt be able to fly through unscathed either. The extreme pressures and temperatures deep inside the planet crush, melt, and vaporize spacecraft trying to fly into the planet.",
    "Jupiter has the largest moon , called Ganymede",
    "Jupiter is known for its distinctive belts and zones"
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
