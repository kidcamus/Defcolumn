document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.getElementById('progressBar');
    const volumeBtn = document.getElementById('volumeBtn');
    const volumeSlider = document.getElementById('volumeSlider');

    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');

    // Play/Pause button functionality
    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playIcon.style.display = 'none'; // Hide play icon
            pauseIcon.style.display = 'inline'; // Show pause icon
        } else {
            audio.pause();
            playIcon.style.display = 'inline'; // Show play icon
            pauseIcon.style.display = 'none'; // Hide pause icon
        }
    });

    // Update progress bar as the audio plays
    audio.addEventListener('timeupdate', function () {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
    });

    // Allow the user to change progress via the bar
    progressBar.addEventListener('input', function () {
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });

    // Mute/Unmute functionality
    volumeBtn.addEventListener('click', function () {
        if (audio.volume > 0) {
            audio.volume = 0; // Mute the audio
            volumeSlider.value = 0;
            volumeBtn.textContent = 'Unmute'; // Change button text to Unmute
        } else {
            audio.volume = 1; // Unmute the audio
            volumeSlider.value = 100;
            volumeBtn.textContent = 'Mute'; // Change button text to Mute
        }
    });
});

