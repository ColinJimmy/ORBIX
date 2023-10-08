const paragraphs = [
    "The moon is actually lemon shaped.",
    "The Moon is moving approximately 3.8 cm away from our planet every year.",
    "1 Moon day = 27.3 Earth days",
    "Although the moon looks quite close to the Earth, it is actually 239,000 miles away – about 45 times as long as the Great Wall of China!",
    "Moon dust smells like gunpowder"
]; // Add your paragraph texts here

let currentIndex = 0;

function changeContent() {
   // document.getElementById("image").src = images[currentIndex];
    document.getElementById("paragraph").textContent = paragraphs[currentIndex];
    currentIndex = (currentIndex + 1) % paragraphs.length;
}

// Call the changeContent function every 5 seconds
setInterval(changeContent, 5000);

// Initial call to display the first content
changeContent();
