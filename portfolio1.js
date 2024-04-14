// Get the navigation menu and toggle button
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');

// Add event listener to the toggle button
menuToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation menu
    navbar.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function() {
    // Update profile picture
    const profilePicture = document.getElementById("profile-picture");
    profilePicture.src = "C:/Users/anura/my-project/images/profile2.jpg"; // Update with the actual path to the profile picture

    // Update project images
    const project1Image = document.getElementById("project1-image");
    project1Image.src = "C:/Users/anura/my-project/Screenshot 2024-03-30 201049.png"; // Update with the actual path to project 1 image

    const project2Image = document.getElementById("project2-image");
    project2Image.src = "C:/Users/anura/my-project/images/project2.jpg"; // Update with the actual path to project 2 image

    const project3Image = document.getElementById("project3-image");
    project3Image.src = "C:/Users/anura/my-project/images/project3.jpg"; // Update with the actual path to project 3 image

    const project4Image = document.getElementById("project4-image");
    project4Image.src = "C:/Users/anura/my-project/images/project4.jpg"; // Update with the actual path to project 4 image

    const project5Image = document.getElementById("project5-image");
    project5Image.src = "C:/Users/anura/my-project/images/project5.jpg"; // Update with the actual path to project 5 image

    const project6Image = document.getElementById("project6-image");
    project6Image.src = "C:/Users/anura/my-project/images/project6.jpg"; // Update with the actual path to project 6 image
});
function openDocument(documentUrl) {
    window.open(documentUrl, '_blank');
}


document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the Send Message button
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    
    // Add click event listener to the button
    sendMessageBtn.addEventListener('click', function() {
        // Get form data
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const mobileNumber = document.getElementById('mobileNumber').value;
        const emailSubject = document.getElementById('emailSubject').value;
        const message = document.getElementById('message').value;

        // Create payload object
        const payload = {
            fullName,
            email,
            mobileNumber,
            emailSubject,
            message
        };

        // Send POST request to server
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.ok) {
                console.log('Message sent successfully');
                // Optionally, clear the form fields or show a success message to the user
            } else {
                console.error('Failed to send message');
                // Optionally, show an error message to the user
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Optionally, show an error message to the user
        });
    });
});

