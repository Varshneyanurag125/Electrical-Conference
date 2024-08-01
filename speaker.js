const carousel = document.querySelector('.carousel');
        const cards = document.querySelectorAll('.card');
        let currentIndex = 1;

        function rotateCards() {
            if (window.innerWidth > 768) {
                currentIndex = (currentIndex + 1) % cards.length;
                cards.forEach((card, index) => {
                    const position = (index - currentIndex + cards.length) % cards.length;
                    card.className = 'card ' + ['left', 'center', 'right'][position];
                });
            }
        }

        function handleScroll() {
            if (window.innerWidth <= 768) {
                const rect = carousel.getBoundingClientRect();
                const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
                cards.forEach((card, index) => {
                    const cardRect = card.getBoundingClientRect();
                    if (cardRect.top >= rect.top && cardRect.bottom <= viewHeight) {
                        card.classList.add('active');
                    } else {
                        card.classList.remove('active');
                    }
                });
            }
        }

        let interval = setInterval(rotateCards, 2000);

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                clearInterval(interval);
                cards.forEach(card => card.className = 'card');
            } else {
                clearInterval(interval);
                interval = setInterval(rotateCards, 2000);
                rotateCards(); // Immediate update on resize
            }
            handleScroll(); // Check active card on resize
        });

        window.addEventListener('scroll', handleScroll);

        // Initial setup
        if (window.innerWidth > 768) {
            rotateCards();
        } else {
            handleScroll();
        }