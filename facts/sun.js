const paragraphs = [
    "Sun is the closest star to the earth",
    "The element helium got its name from the sun",
    "In summer the Earth is farther from the Sun than in winter",
    "Sun is actually a star (yellow dwarf star)",
    "The Sun's gravity holds the solar system together, keeping everything",
    "From the biggest planets to the smallest particles of debris – in its orbit.",
    "Solar wind from the sun cause magnetic storms on earth"
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
