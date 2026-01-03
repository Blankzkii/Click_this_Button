// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Music functionality
    const messageState = document.getElementById('messageState');
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = document.querySelector('.music-icon');
    const musicOffIcon = document.querySelector('.music-off-icon');
    let isMusicPlaying = false;
    bgMusic.volume = 0.1;

    // Try to autoplay music when page loads
    setTimeout(() => {
        bgMusic.play().then(() => {
            isMusicPlaying = true;
            musicIcon.style.display = 'block';
            musicOffIcon.style.display = 'none';
        }).catch(e => {
            console.log('Autoplay prevented by browser:', e);
            // If autoplay fails, music will play when envelope is clicked
            isMusicPlaying = false;
        });
    }, 500);

    // Play music when letter is opened (if not already playing)
    messageState.addEventListener('change', function() {
        if (this.checked && !isMusicPlaying) {
            bgMusic.play().then(() => {
                isMusicPlaying = true;
                musicIcon.style.display = 'block';
                musicOffIcon.style.display = 'none';
            }).catch(e => {
                console.log('Play prevented:', e);
                isMusicPlaying = false;
            });
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
            bgMusic.play().then(() => {
                musicIcon.style.display = 'block';
                musicOffIcon.style.display = 'none';
                isMusicPlaying = true;
            }).catch(e => console.log('Play prevented:', e));
        }
    });
});