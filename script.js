 // Mobile Navigation
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fa-solid fa-xmark"></i>' 
                : '<i class="fa-solid fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('mainHeader');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Review Slider
        let currentReview = 1;
        const totalReviews = 5;
        let autoSlideInterval;
        
        function showReview(n) {
            // Wrap around if at beginning or end
            if (n > totalReviews) {
                currentReview = 1;
            } else if (n < 1) {
                currentReview = totalReviews;
            } else {
                currentReview = n;
            }
            
            document.querySelectorAll('.review').forEach(review => {
                review.classList.remove('active');
            });
            document.getElementById(`review-${currentReview}`).classList.add('active');
        }
        
        function nextReview() {
            showReview(currentReview + 1);
        }
        
        function prevReview() {
            showReview(currentReview - 1);
        }
        
        document.getElementById('nextBtn').addEventListener('click', () => {
            nextReview();
            resetAutoSlide();
        });
        
        document.getElementById('prevBtn').addEventListener('click', () => {
            prevReview();
            resetAutoSlide();
        });
        
        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                nextReview();
            }, 6000);
        }
        
        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }
        
        // Initialize auto-slide
        startAutoSlide();
        
        // Pause auto-slide when hovering over reviews
        const reviewCard = document.querySelector('.review-card');
        reviewCard.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        reviewCard.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
        
        // Modal Functions
        function openServiceModal() {
            document.getElementById('serviceSelectionModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        function closeServiceModal() {
            document.getElementById('serviceSelectionModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        function selectService(service) {
            document.getElementById('service').value = service;
            closeServiceModal();
            document.getElementById('bookingForm').style.display = 'block';
        }
        
        function closeForm() {
            document.getElementById('bookingForm').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        function closeConfirmation() {
            document.getElementById('confirmationModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        

        // Form Submission
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
            closeForm();
                    document.getElementById('confirmationModal').style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    
                    // Reset form
                    form.reset();
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Something went wrong. Please try again.");
        });
}
        
       
        
        // Book service directly from service items
        function bookService(serviceName) {
            document.getElementById('service').value = serviceName;
            document.getElementById('bookingForm').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        // Animate elements when they come into view
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.service-item, .about-card, .gallery-item');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        };
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

function closeConfirmation() {
    document.getElementById("confirmationModal").style.display = "none";
}
