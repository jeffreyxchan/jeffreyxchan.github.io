$(document).ready(function () {
    // initial setting
    $('.code-projects').hide();
    $('.webdev-projects').hide();
    
    // Project Navbar code
    $('.nav-item').click(function () {
        // injecting .active class in nav items with click
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
        
        // displaying the correct set of projects
        if ($('.hardware.active').length) {
            // show hardware projects and hide the rest
            $('.hardware-projects').show();
            $('.code-projects').hide();
            $('.webdev-projects').hide();
        }
        
        if ($('.code.active').length) {
            // show code projects and hide the rest
            $('.hardware-projects').hide();
            $('.code-projects').show();
            $('.webdev-projects').hide();
        }
        
        if ($('.webdev.active').length) {
            // show webdev projects and hide the rest
            $('.hardware-projects').hide();
            $('.code-projects').hide();
            $('.webdev-projects').show();
        }
    });
});