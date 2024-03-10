const loader = document.getElementById('pre-loader');

// Check if the user has visited the site before
if (localStorage.getItem('hasVisited')) {
    // If the user has visited the site before, hide the loader immediately
    loader.style.display = 'none';
} else {
    // If the user has not visited the site before, set the flag and display the loader
    localStorage.setItem('hasVisited', true);
    window.addEventListener('load', function () {
        setTimeout(function() {
            loader.style.display = 'none';
        }, 100); // 1000 milliseconds = 1 second
    });
}

