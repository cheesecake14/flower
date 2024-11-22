// Add optional interactivity to restart the animation
document.querySelector('.container').addEventListener('click', () => {
    const container = document.querySelector('.container');
    container.style.animation = 'none';
    setTimeout(() => {
      container.style.animation = '';
    }, 10);
  });
  