/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-world/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    

    // Navbar shrink function
    var navbarShrink = function () {
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

    //declare event listeners
    declareEvents();

});


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
   * Hero type effect
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

/**
 * Declare events
 */
const declareEvents = () => {
    $('.timeline-badge').on('click', timelineHide);
    $('.timeline-panel-min').on('click', timelineHide);
    $('.timeline-inverted-panel-min').on('click', timelineHide);
}

/**
 * Hide timeline branch on click
 * @param {Event} e 
 */
const timelineHide = (e) => {
    const timelinePanel = $(e.delegateTarget).parent().children('.timeline-panel');
    const timelinePanelMin = $(e.delegateTarget).parent().children('.timeline-panel-min');
    const timelineInvertedPanelMin = $(e.delegateTarget).parent().children('.timeline-inverted-panel-min');
    const badgeBtn = $(e.delegateTarget);

    //Hide timeline panel and show minimized panel
    if (!timelinePanel.hasClass('hidden')){
        timelinePanel.addClass('hidden');
        badgeBtn.addClass('minimized');
        timelinePanelMin.removeClass('hidden');
        timelineInvertedPanelMin.removeClass('hidden');
    }
    //show timeline panel
    else{ 
        timelinePanel.removeClass('hidden');
        badgeBtn.removeClass('minimized');
        timelinePanelMin.addClass('hidden');
        timelineInvertedPanelMin.addClass('hidden');
    }
}
