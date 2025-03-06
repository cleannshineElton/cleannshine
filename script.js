// Open Service Selection Modal
function openServiceModal() {
    document.getElementById("serviceSelectionModal").style.display = "flex";
}

// Close Service Selection Modal
function closeServiceModal() {
    document.getElementById("serviceSelectionModal").style.display = "none";
}

// Open Booking Form Modal
function openForm() {
    document.getElementById("bookingForm").style.display = "flex";
}

// Close Booking Form Modal
function closeForm() {
    document.getElementById("bookingForm").style.display = "none";
}

function bookService(service) {
    document.getElementById("service").value = service;
    openForm();
}

// Select a Service
function selectService(service) {
    document.getElementById("service").value = service; // Set the selected service
    closeServiceModal(); // Close the service selection modal
    openForm(); // Open the booking form
}

// Submit Booking Form
emailjs.init({ publicKey: "jPAhg6F9dWPsjA6g_" }); // Replace with your actual key

function submitForm(event) {
    event.preventDefault();

    // Get form data
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Data:", data); // Debugging log

    // Send email using EmailJS
    emailjs.send("service_tzs36oq", "template_2c9f38n", data)
        .then((response) => {
            console.log("Email sent successfully:", response);
            form.reset(); // Clear the form after submission
            closeForm(); // Close the form modal
            openConfirmation(); // Open the confirmation modal
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Something went wrong. Please try again.");
        });
}

document.getElementById("hamburger").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

let currentReview = 1;
const totalReviews = 3;

function showReview(index) {
    for (let i = 1; i <= totalReviews; i++) {
        document.getElementById(`review-${i}`).style.display = 'none';
    }
    document.getElementById(`review-${index}`).style.display = 'block';
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentReview = currentReview > 1 ? currentReview - 1 : totalReviews;
    showReview(currentReview);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentReview = currentReview < totalReviews ? currentReview + 1 : 1;
    showReview(currentReview);
});

// Show the first review initially
showReview(currentReview);

function openConfirmation() {
    document.getElementById("confirmationModal").style.display = "flex";
}

function closeConfirmation() {
    document.getElementById("confirmationModal").style.display = "none";
}