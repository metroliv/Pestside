document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav .menu-bar li a');
    const sections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Get the target section ID
            const targetSectionId = link.getAttribute('data-target');

            // Show the target section
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Form validation (basic example)
        if (name && email && message) {
            alert(`Thank you for contacting us, ${name}. We will get back to you shortly.`);
            // Clear the form
            document.getElementById('contactForm').reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
