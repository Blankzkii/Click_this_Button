document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const message = document.querySelector('.message');

    // Prevent animation flash on load
    heart.classList.add('no-anim');

    // Enable animation after short delay
    setTimeout(() => {
        heart.classList.remove('no-anim');
    }, 300);
});
