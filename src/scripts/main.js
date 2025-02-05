document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('cta-button');
    
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked! Welcome to our landing page!');
        });
    }
});