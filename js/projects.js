$(document).ready(function () {
    // initial setting
    if (window.location.hash == '') {
        window.location.hash = '#webdev'; // default setting
    }
    $('.nav-item').removeClass('active'); // remove active class from all of them
    $('.project-group').hide(); // hide all of them
    
    // make correct nav items active and show correct projects
    switch (window.location.hash) {
        case '#hardware':
            $('.project-navbar .hardware').addClass('active');
            $('.hardware-projects').show();
            break;
        case '#code':
            $('.project-navbar .code').addClass('active');
            $('.code-projects').show();
            break;
        case '#webdev':
            $('.project-navbar .webdev').addClass('active');
            $('.webdev-projects').show()
            break;
    }

    // Project Navbar code
    $('.nav-item').click(function () {
        // injecting .active class in nav items with click
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
        
        // displaying the correct set of projects
        if ($('.hardware.active').length) {
            $('.hardware-projects').show();
            $('.code-projects').hide();
            $('.webdev-projects').hide();
        }
        
        if ($('.code.active').length) {
            $('.hardware-projects').hide();
            $('.code-projects').show();
            $('.webdev-projects').hide();
        }
        
        if ($('.webdev.active').length) {
            $('.hardware-projects').hide();
            $('.code-projects').hide();
            $('.webdev-projects').show();
        }
    });
});