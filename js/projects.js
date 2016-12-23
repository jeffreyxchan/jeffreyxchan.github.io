$(document).ready(function () {
    // initial setting
//    if (window.location.hash == '') {
//        window.location.hash = '#webdev'; // default setting
//    }
//    $('.nav-item').removeClass('active'); // remove active class from all of them
//    $('.project-group').hide(); // hide all of them
//    
//    // make correct nav items active and show correct projects
//    switch (window.location.hash) {
//        case '#hardware':
//            $('.project-navbar .hardware').addClass('active');
//            $('.hardware-projects').show();
//            break;
//        case '#code':
//            $('.project-navbar .code').addClass('active');
//            $('.code-projects').show();
//            break;
//        case '#webdev':
//            $('.project-navbar .webdev').addClass('active');
//            $('.webdev-projects').show()
//            break;
//    }
    
    $('.project-navbar .webdev').addClass('active');
    $('.project-group').hide(); // hide all of them
    $('.webdev-projects').show()

    // PROJECT NAVBAR
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
    
    // PROJECT DROPDOWN CODE
    $('.item').click(function () {
        console.log($(this).html());
        // displaying the correct set of projects
        if ($(this).html() == 'Hardware') {
            $('.hardware-projects').show();
            $('.code-projects').hide();
            $('.webdev-projects').hide();
        }
        
        if ($(this).html() == 'Code') {
            $('.hardware-projects').hide();
            $('.code-projects').show();
            $('.webdev-projects').hide();
        }
        
        if ($(this).html() == 'Web Development') {
            $('.hardware-projects').hide();
            $('.code-projects').hide();
            $('.webdev-projects').show();
        }
    });
    
    // MEDIA LINKS FOR MOBILE
    $('a').click(function () {
        if ($(this).parent().parent().css("opacity") === "0") {
            toggleOpacity($(this).parent().parent());
            return false;
        }
        return true;
    });
    
    $('.media-links').click(function () {
        toggleOpacity($(this));
    }).hover(function () {
        if ($(this).css("opacity") === "0") {
            toggleOpacity($(this));
        }
    }, function () {
        if ($(this).css("opacity") === "1") {
            toggleOpacity($(this));
        }
    });
    
    function toggleOpacity (item) {
        if ($(item).css("opacity") === "1") {
            $(item).css({
                opacity: "0"
            });
        } else {
            $(item).css({
                opacity: "1"
            });
        }
    }
    
    // Initialize Semantic UI Dropdown
    $('.dropdown').dropdown();
});