$(document).ready(function () {
    
    // INITIAL DISPLAY SETTINGS
    $('.nav-item.webdevelopment').addClass('active');
    $('.item.webdevelopment').addClass('selected');
    $('.project-group').hide(); // hide all projects
    $('.webdev-projects').show()

    // PROJECT NAVIGATION
    $('.nav-item, .item').click(function () {
        var selection = $(this).children().html();
        var selectedClass = selection.toLowerCase().replace(/ /g, "");
        
        // injecting classes
        $('.nav-item').removeClass('active');
        $('.item').removeClass('selected');
        $('.nav-item').each(function () {
            if ($(this).hasClass(selectedClass)) {
                $(this).addClass('active');
            }
        });
        $('.item').each(function () {
            if ($(this).hasClass(selectedClass)) {
                $(this).addClass('selected');
            }
        });
        $('.text').html(selection);
        
        // displaying the correct set of projects
        if ($(this).children().html() == 'Hardware') {
            $('.hardware-projects').show();
            $('.code-projects').hide();
            $('.webdev-projects').hide();
            $('.ios-projects').hide();
        }
        else if ($(this).children().html() == 'Code') {
            $('.hardware-projects').hide();
            $('.code-projects').show();
            $('.webdev-projects').hide();
            $('.ios-projects').hide();
        }
        else if ($(this).children().html() == 'Web Development') {
            $('.hardware-projects').hide();
            $('.code-projects').hide();
            $('.webdev-projects').show();
            $('.ios-projects').hide();
        }
        else if ($(this).children().html() == 'iOS') {
            $('.hardware-projects').hide();
            $('.code-projects').hide();
            $('.webdev-projects').hide();
            $('.ios-projects').show();
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