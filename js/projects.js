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
        $('.project-container').show();
        $('.project-group').hide();
        switch ($(this).children().html()) {
            case 'Hardware': $('.hardware-projects').show(); break;
            case 'Code': $('.code-projects').show(); break;
            case 'Web Development': $('.webdev-projects').show(); break;
            case 'iOS': $('.ios-projects').show(); break;
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
    
    // initialize semantic ui dropdown
    $('.dropdown').dropdown();
    
    // project filter code
    $('.filter-item').click(function () {
        clearProjects();
        var selection = '';
        
        switch ($('.project-navbar .active').children().html()) {
            case 'Hardware': selection += '.hardware-projects .'; break;
            case 'Code': selection += '.code-projects .'; break;
            case 'Web Development': selection += '.webdev-projects .'; break;
            case 'iOS': selection += '.ios-projects .'; break;
        }
        
        switch ($(this).html()) {
            case 'All': selection += 'project-container'; break;
            case 'Personal': selection += 'personal'; break;
            case 'Daily Bruin': selection += 'daily-bruin'; break;
            case 'MongoDB': selection += 'mongo'; break;
            case 'Express.js': selection += 'express'; break;
            case 'React.js': selection += 'react'; break;
            case 'Node.js': selection += 'node'; break;
            case 'D3.js': selection += 'd3'; break;
            case 'C++': selection += 'cpp'; break;
            case 'Python': selection += 'python'; break
            case 'Shell': selection += 'shell'; break;
        }
        
        $(selection).fadeIn();
    });
    
    // function to clear all projects
    function clearProjects () {
        $('.project-container').fadeOut();
    }
    
    // toggles opacity of a jquery selected item
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
});