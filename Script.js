document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const topbar = document.querySelector('.topbar');
    let lastScrollY = window.scrollY;

    function scrollToTitle() {
        const query = searchInput.value.toLowerCase().trim();
        if (!query) return;

        const headings = document.querySelectorAll('h2');
        for (let heading of headings) {
            if (heading.textContent.toLowerCase().includes(query)) {
                heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                searchInput.value = ''; // Clear input after match
                return;
            }
        }

        alert('No matching section found.');
        searchInput.value = ''; // Clear input even if no match
    }

    searchBtn.addEventListener('click', scrollToTitle);

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            scrollToTitle();
        }
    });

    window.addEventListener('scroll', () => {
        const halfway = window.innerHeight / 2;

        if (window.scrollY > lastScrollY && window.scrollY > halfway) {
            topbar.classList.add('hidden');
        } else {
            topbar.classList.remove('hidden');
        }

        lastScrollY = window.scrollY;
    });
});
