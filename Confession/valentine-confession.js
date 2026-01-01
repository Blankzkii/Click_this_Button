// Optional: Add smooth animations
document.addEventListener('DOMContentLoaded', function() {
    const heart = document.querySelector('.heart');
    const message = document.querySelector('.message');
    const instruction = document.querySelector('.instruction');
    
    // Remove no-anim class after page loads
    setTimeout(() => {
        heart.classList.remove('no-anim');
        message.classList.remove('no-anim');
    }, 100);
});