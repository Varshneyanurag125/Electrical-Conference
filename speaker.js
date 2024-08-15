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

        let interval = setInterval(rotateCards, 3500);

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                clearInterval(interval);
                cards.forEach(card => card.className = 'card');
            } else {
                clearInterval(interval);
                interval = setInterval(rotateCards, 3500);
                rotateCards();
            }
            handleScroll(); 
        });

        window.addEventListener('scroll', handleScroll);

        if (window.innerWidth > 768) {
            rotateCards();
        } else {
            handleScroll();
        }


        const adContainer = document.getElementById('ad-container');
        const closeBtn = document.getElementById('close-btn');
        const showTime =   2*60 * 1000; // 5 minutes in milliseconds
        const hideTime =  2*60 * 1000; // 5 minutes in milliseconds

        function showAd() {
            adContainer.style.display = 'flex';
            setTimeout(hideAd, showTime);
        }

        function hideAd() {
            adContainer.style.display = 'none';
            setTimeout(showAd, hideTime);
        }

        closeBtn.addEventListener('click', hideAd);

        // Initial show
        showAd();