const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        try {
            const response = await fetch('http://localhost:5000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, subject, message })
            });

            const data = await response.json();

            if (data.success) {
                showNotification('Message sent successfully! 🎉', 'success');
                contactForm.reset();
            } else {
                showNotification('Error sending message', 'error');
            }

        } catch (error) {
            showNotification('Server not working', 'error');
        }
    });
}