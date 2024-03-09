// script.js

// Function to load content into the #content div
function loadContent(page) {
    const contentDiv = document.getElementById('content');
    fetch(page)
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Add event listeners to the navigation links
document.querySelector("nav").addEventListener("click", function (event) {
    if (event.target.tagName === 'A') {
        const page = event.target.getAttribute("href").substring(1) + ".html"; // Construct the HTML file path
        loadContent(page);
    }
});

// Load the default content (e.g., home.html) when the page loads
loadContent("home.html");

// script.js

document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const roomNumber = document.getElementById("room-number").value;
    const checkInDate = document.getElementById("check-in-date").value;
    const gender = document.getElementById("gender").value;

    // Send the data to your server using AJAX or Fetch API
    // Replace 'your-server-url' with the actual URL of your server-side script
    fetch('your-server-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullName,
            email,
            roomNumber,
            checkInDate,
            gender
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server (e.g., show a success message)
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error(error);
    });
});
