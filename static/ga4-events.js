// Google Analytics 4 Event Tracking
// Tracks: contact form submissions, project clicks, social media link clicks

(function() {
  if (typeof gtag === 'undefined') {
    console.warn('GA4 not initialized');
    return;
  }

  // Track email copy (contact engagement)
  function trackEmailCopy() {
    const emailButtons = document.querySelectorAll('.email-copy-btn');
    emailButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        gtag('event', 'contact_engagement', {
          'engagement_type': 'email_copy',
          'page_path': window.location.pathname
        });
      });
    });
  }

  // Track project GitHub link clicks
  function trackProjectClicks() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(function(card) {
      const githubLink = card.querySelector('a[href*="github.com"]');
      if (githubLink) {
        githubLink.addEventListener('click', function() {
          const projectTitle = card.querySelector('.project-title')?.textContent || 'Unknown';
          gtag('event', 'view_project', {
            'project_name': projectTitle,
            'link_url': githubLink.href,
            'page_path': window.location.pathname
          });
        });
      }
    });

    // Track GitHub chart link click
    const githubChartLink = document.querySelector('.github-chart-link');
    if (githubChartLink) {
      githubChartLink.addEventListener('click', function() {
        gtag('event', 'view_github_profile', {
          'link_url': githubChartLink.href,
          'page_path': window.location.pathname
        });
      });
    }
  }

  // Track social media link clicks
  function trackSocialLinks() {
    const socialLinks = {
      'github': document.querySelectorAll('a[href*="github.com/aakashkolli"]'),
      'linkedin': document.querySelectorAll('a[href*="linkedin.com"]')
    };

    for (const [platform, links] of Object.entries(socialLinks)) {
      links.forEach(function(link) {
        // Skip project card GitHub links (already tracked)
        if (link.closest('.project-card')) return;

        link.addEventListener('click', function() {
          gtag('event', 'social_link_click', {
            'social_platform': platform,
            'link_url': link.href,
            'page_path': window.location.pathname
          });
        });
      });
    }
  }

  // Initialize tracking
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        trackEmailCopy();
        trackProjectClicks();
        trackSocialLinks();
      }, 100);
    });
  } else {
    setTimeout(function() {
      trackEmailCopy();
      trackProjectClicks();
      trackSocialLinks();
    }, 100);
  }
})();
