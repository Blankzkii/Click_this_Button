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

 const messageState = document.getElementById('messageState');
        const bgMusic = document.getElementById('bgMusic');
        const musicToggle = document.getElementById('musicToggle');
        const musicIcon = document.querySelector('.music-icon');
        const musicOffIcon = document.querySelector('.music-off-icon');
        let isMusicPlaying = false;

        // Play music when letter is opened
        messageState.addEventListener('change', function() {
            if (this.checked && !isMusicPlaying) {
                bgMusic.play().catch(e => console.log('Autoplay prevented:', e));
                isMusicPlaying = true;
            }
        });

        // Toggle music on button click
        musicToggle.addEventListener('click', function() {
            if (isMusicPlaying) {
                bgMusic.pause();
                musicIcon.style.display = 'none';
                musicOffIcon.style.display = 'block';
                isMusicPlaying = false;
            } else {
                bgMusic.play().catch(e => console.log('Play prevented:', e));
                musicIcon.style.display = 'block';
                musicOffIcon.style.display = 'none';
                isMusicPlaying = true;
            }
        });