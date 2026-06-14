const themeBtn = document.getElementById('theme-btn');
const html = document.documentElement;
const media = window.matchMedia('(prefers-color-scheme: dark)');
const faviconLink = document.getElementById('site-favicon');
const navbar = document.getElementById('navbar');
const backToTopButton = document.getElementById('back-to-top');
const THEME_KEY = 'theme';

function getSavedTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === 'dark' || saved === 'light' || saved === 'system' ? saved : 'system';
}

function setTheme(themeMode) {
    const resolvedTheme = themeMode === 'system' ? (media.matches ? 'dark' : 'light') : themeMode;
    html.setAttribute('data-theme', resolvedTheme);
    setFavicon(resolvedTheme);

    document.querySelectorAll('img[data-src-dark][data-src-light]').forEach(img => {
        img.src = resolvedTheme === 'dark' ? img.dataset.srcDark : img.dataset.srcLight;
    });

    document.querySelectorAll('.github-chart').forEach(img => {
        if (resolvedTheme === 'dark') {
            img.classList.add('github-chart--dark');
        } else {
            img.classList.remove('github-chart--dark');
        }
    });

    document.querySelectorAll('.github-chart-container').forEach(container => {
        const chart = container.querySelector('.github-chart');
        if (!chart) {
            return;
        }

        if (chart.complete && chart.naturalWidth > 0) {
            container.classList.add('github-chart-container--loaded');
        } else {
            container.classList.remove('github-chart-container--loaded');
            chart.addEventListener('load', () => {
                container.classList.add('github-chart-container--loaded');
            }, { once: true });
        }
    });

    if (!themeBtn) {
        return;
    }

    if (themeMode === 'dark') {
        themeBtn.innerHTML = '<svg class="icon" aria-hidden="true"><use href="/icons.svg#icon-moon"></use></svg>';
        themeBtn.setAttribute('aria-label', 'Switch to light mode');
    } else if (themeMode === 'light') {
        themeBtn.innerHTML = '<svg class="icon" aria-hidden="true"><use href="/icons.svg#icon-sun"></use></svg>';
        themeBtn.setAttribute('aria-label', 'Switch to dark mode');
    } else {
        themeBtn.innerHTML = '<svg class="icon" aria-hidden="true"><use href="/icons.svg#icon-system"></use></svg>';
        themeBtn.setAttribute('aria-label', 'Use system theme');
    }
}

function setFavicon(themeMode) {
    if (!faviconLink) {
        return;
    }

    faviconLink.href = themeMode === 'dark' ? '/favicon-dark.ico' : '/favicon.ico';
}


function onSystemThemeChange(e) {
    if (getSavedTheme() === 'system') {
        setTheme('system');
    }
}

if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', onSystemThemeChange);
} else if (typeof media.addListener === 'function') {
    media.addListener(onSystemThemeChange);
}

themeBtn.addEventListener('click', () => {
    const currentTheme = getSavedTheme();
    const nextTheme = currentTheme === 'system' ? 'light' : currentTheme === 'light' ? 'dark' : 'system';
    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
});

(function() {
    if (!navbar) return;
    navbar.classList.add('visible');
    navbar.setAttribute('aria-hidden', 'false');
})();

function updateScrollAffordances() {
    const scrolled = window.scrollY > 10;
    if (navbar) {
        navbar.classList.toggle('nav-scrolled', scrolled);
    }

    if (backToTopButton) {
        backToTopButton.classList.toggle('back-to-top--visible', window.scrollY > 320);
    }
}

if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

window.addEventListener('scroll', updateScrollAffordances, { passive: true });
window.addEventListener('resize', updateScrollAffordances);
updateScrollAffordances();

(function() {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;
    const grid = projectsSection.querySelector('.projects-grid');
    if (!grid) return;
    const resetButton = document.getElementById('project-filter-reset');

    const originalOrder = Array.from(grid.querySelectorAll('.project-card'));
    let activeTag = null;

    function updateResetButton() {
        if (!resetButton) {
            return;
        }

        if (activeTag) {
            resetButton.hidden = false;
            resetButton.textContent = 'Clear Filter (1 active)';
        } else {
            resetButton.hidden = true;
            resetButton.textContent = 'Clear Filter';
        }
    }

    function resetOrder() {
        originalOrder.forEach(card => grid.appendChild(card));
        activeTag = null;
        updateTagActiveStates();
        updateResetButton();
    }

    function updateTagActiveStates() {
        const allTags = projectsSection.querySelectorAll('.tag');
        allTags.forEach(t => {
            if (activeTag && t.textContent.trim().toLowerCase() === activeTag) {
                t.classList.add('tag-active');
            } else {
                t.classList.remove('tag-active');
            }
        });
    }

    function filterByTag(tagLower) {
        const matched = [];
        const unmatched = [];
        originalOrder.forEach(card => {
            const tags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent.trim().toLowerCase());
            if (tags.includes(tagLower)) matched.push(card);
            else unmatched.push(card);
        });
        matched.forEach(c => grid.appendChild(c));
        unmatched.forEach(c => grid.appendChild(c));
        updateTagActiveStates();
        updateResetButton();
    }

    projectsSection.addEventListener('click', (e) => {
        const tagEl = e.target.closest('.tag');
        if (!tagEl) return;
        const tagText = tagEl.textContent.trim();
        const tagLower = tagText.toLowerCase();

        if (activeTag === tagLower) {
            resetOrder();
        } else {
            activeTag = tagLower;
            filterByTag(tagLower);
        }
    });

    if (resetButton) {
        resetButton.addEventListener('click', resetOrder);
    }

    updateResetButton();
})();

// Arrow key navigation between pages
(function() {
    const pageOrder = ['/', '/work/', '/projects/', '/contact/'];

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const currentPath = window.location.pathname;
            let currentIndex = pageOrder.indexOf(currentPath);

            if (currentIndex === -1) {
                currentIndex = 0;
            }

            let nextIndex;
            if (e.key === 'ArrowRight') {
                nextIndex = (currentIndex + 1) % pageOrder.length;
            } else {
                nextIndex = (currentIndex - 1 + pageOrder.length) % pageOrder.length;
            }

            window.location.href = pageOrder[nextIndex];
        }
    });
})();

// Project search and filtering
function initProjectSearch() {
    const searchInput = document.getElementById('projects-search');
    if (!searchInput) return;

    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length === 0) return;

    const projectsGrid = document.querySelector('.projects-grid');

    function filterProjects(query) {
        query = query.toLowerCase().trim();
        if (!query) {
            projectCards.forEach(card => card.classList.remove('projects-search-hidden'));
            if (projectsGrid) projectsGrid.removeAttribute('data-empty-search');
            return;
        }
        let visibleCount = 0;
        projectCards.forEach(card => {
            const title = card.querySelector('.project-title')?.textContent?.toLowerCase() || '';
            const description = card.querySelector('.project-desc')?.textContent?.toLowerCase() || '';
            const tags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent.toLowerCase()).join(' ');
            if (`${title} ${description} ${tags}`.includes(query)) {
                card.classList.remove('projects-search-hidden');
                visibleCount++;
            } else {
                card.classList.add('projects-search-hidden');
            }
        });
        if (projectsGrid) projectsGrid.toggleAttribute('data-empty-search', visibleCount === 0);
    }

    searchInput.addEventListener('input', function(e) { filterProjects(e.target.value); });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectSearch);
} else {
    initProjectSearch();
}

// Mobile hamburger menu
(function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu?.querySelectorAll('a');

    if (!hamburgerBtn || !mobileMenu) return;

    hamburgerBtn.addEventListener('click', function() {
        const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        hamburgerBtn.setAttribute('aria-expanded', !isOpen);
        mobileMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    if (mobileLinks) {
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerBtn.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('open');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('open');
        }
    });
})();
