// Smooth scroll-to-top functionality with fade-in effect for the button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    // Show button when scrolled down 200px
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
        scrollTopBtn.style.opacity = 1;
    } else {
        scrollTopBtn.style.opacity = 0;
        setTimeout(() => (scrollTopBtn.style.display = 'none'), 300);
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Timeline Item Hover Effect
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
    const infoBox = document.createElement('div');
    infoBox.classList.add('info-box');
    infoBox.innerHTML = `
        <h4>Additional Info</h4>
        <p>Get to know more details about this event!</p>
    `;
    item.appendChild(infoBox);
    infoBox.style.display = 'none';

    // Show additional information on hover
    item.addEventListener('mouseover', () => {
        infoBox.style.display = 'block';
        infoBox.style.opacity = 1;
    });
    item.addEventListener('mouseout', () => {
        infoBox.style.opacity = 0;
        setTimeout(() => (infoBox.style.display = 'none'), 300);
    });
});
