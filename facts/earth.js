const paragraphs = [
    "It is the only place we know of so far thats inhabited by living things.",
   "It takes about eight minutes for light from the Sun to reach our planet.",
    "It's also the only planet in our solar system with liquid water on the surface.",
    "Earth is the only planet in the Solar System whose English name does not come from Greek or Roman mythology.",
    "The name was taken from Old English and Germanic. It simply means the ground.",
    "With a radius of 3,959 miles (6,371 kilometers), Earth is the biggest of the terrestrial planets and the fifth largest planet overall"
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
