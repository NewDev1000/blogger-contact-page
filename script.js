document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    gsap.from(form, { duration: 1, opacity: 0, y: -50 });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        gsap.to(form, { duration: 0.5, opacity: 0, y: 50, onComplete: function() {
            form.reset();
            gsap.to(form, { duration: 0.5, opacity: 1, y: 0 });
        }});
    });
});
