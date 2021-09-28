//
// Scripts
// 
const Global = {
    Variables: {
        isotopeFilter: $('#portfolio .container-fluid')
    },
    Events: {
        /**
         * Hide timeline branch on click
         * @param {Event} e 
         */
        timelineHide: (e) => {
            const timelinePanel = $(e.delegateTarget).parent().children('.timeline-panel');
            const timelinePanelMin = $(e.delegateTarget).parent().children('.timeline-panel-min');
            const timelineInvertedPanelMin = $(e.delegateTarget).parent().children('.timeline-inverted-panel-min');
            const badgeBtn = $(e.delegateTarget);

            //Hide timeline panel and show minimized panel
            if (!timelinePanel.hasClass('hidden')) {
                timelinePanel.addClass('hidden');
                badgeBtn.addClass('minimized');
                timelinePanelMin.removeClass('hidden');
                timelineInvertedPanelMin.removeClass('hidden');
            }
            //show timeline panel
            else {
                timelinePanel.removeClass('hidden');
                badgeBtn.removeClass('minimized');
                timelinePanelMin.addClass('hidden');
                timelineInvertedPanelMin.addClass('hidden');
            }
        },
        handleFilterClick: (e) => {
            const category = "." + e.currentTarget.dataset.category;
            Global.Variables.isotopeFilter.isotope({ filter: category });
        }
    },
};


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    //isotope js (categories)
    Global.Variables.isotopeFilter.isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry'
    });

    //DECLARE EVENT LISTENERS    
    //isotope events
    $('#portfolio .category-link').on('click', Global.Events.handleFilterClick);

    //timeline events
    $('.timeline-badge').on('click', Global.Events.timelineHide);
    $('.timeline-panel-min').on('click', Global.Events.timelineHide);
    $('.timeline-inverted-panel-min').on('click', Global.Events.timelineHide);
});

//#region Typed plugin
/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

/**
 * Hero type effect (typing intro...)
 */
const typed = select('.typed')
if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}
//#endregion
