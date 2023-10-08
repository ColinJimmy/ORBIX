const paragraphs = [
    "Venus day is longer than its year",
    "Venus sulfuric acid clouds smell like rotten eggs",
    "More than 40 spacecraft have visited Venus",
    "Venus is similar in size to Earth",
    "Its the hottest planet",
    "It doesnt have its own internally generated magnetic field"
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
