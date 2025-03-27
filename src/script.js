document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name')?.value;
            const email = document.getElementById('email')?.value;
            const message = document.getElementById('message')?.value;

            // Here you can add code to send the form data to your backend or display a success message
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    }

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const icon = darkModeToggle.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });
    }

    if (darkModeToggleMobile) {
        darkModeToggleMobile.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const icon = darkModeToggleMobile.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const testimonialsContainer = document.getElementById('testimonials-container');
    const testimonialWidth = 30; // Width of each testimonial card
    const gap = 20; // Gap between cards
    const scrollInterval = 30; // Time interval for auto-scroll (in milliseconds)
    let currentIndex = 0;

    function scrollToNext() {
        currentIndex++;
        const scrollPosition = (testimonialWidth + gap) * currentIndex;
        testimonialsContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        // Reset to the first testimonial after the last one
        if (scrollPosition >= testimonialsContainer.scrollWidth - testimonialsContainer.clientWidth) {
            currentIndex = -1; // Will be incremented to 0 on next call
        }
    }

    // Start automatic scrolling
    setInterval(scrollToNext, scrollInterval);
});

