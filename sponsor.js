const sponsors = [
    { src: '/images/sponsor 1.jpg', alt: 'Sponsor 1' },
    { src: '/images/sponsor image.jpg', alt: 'Sponsor 2' },
    { src: '/images/sponsor3.jpg', alt: 'Sponsor 3' },
    { src: '/images/sponsor 4.jpg', alt: 'Sponsor 4' },
    { src: '/images/sponsor 5.jpg', alt: 'Sponsor 5' },
    { src: '/images/sponsor 6.jpg', alt: 'Sponsor 6' }

];

const sponsorImages = document.getElementById('sponsorImages');
let animationId;

function createSponsorImage(sponsor) {
    const img = document.createElement('img');
    img.src = sponsor.src;
    img.alt = sponsor.alt;
    img.className = 'sponsor-image';
    return img;
}

function populateSponsorImages() {
    sponsors.forEach(sponsor => {
        const img = createSponsorImage(sponsor);
        sponsorImages.appendChild(img);
    });
    // Duplicate the sponsors to ensure seamless looping
    sponsors.forEach(sponsor => {
        const img = createSponsorImage(sponsor);
        sponsorImages.appendChild(img);
    });
}

function animateSponsorImages() {
    let position = 0;
    const speed = 1; // Adjust this value to change the scroll speed

    function step() {
        position -= speed;
        sponsorImages.style.transform = `translateX(${position}px)`;

        if (Math.abs(position) >= sponsorImages.offsetWidth / 2) {
            position = 0;
        }

        animationId = requestAnimationFrame(step);
    }

    step();
}

populateSponsorImages();
animateSponsorImages();

// Optional: Pause animation on hover
sponsorImages.addEventListener('mouseenter', () => cancelAnimationFrame(animationId));
sponsorImages.addEventListener('mouseleave', animateSponsorImages);