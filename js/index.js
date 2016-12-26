$(document).ready(function () {
    // to add more, just append to this array
    var descriptions  = ['UCLA Bruin', 'Electrical Engineer', 'Coder', 'Web Developer', 'Dancer'];
    
    // initial settings
    var descriptionIndex = 0;
    $('#fillMe').html(descriptions[0]);
    
    function changeDescription() {
        descriptionIndex += 1;
        if (descriptionIndex > descriptions.length - 1) {
            descriptionIndex = 0;
        }
        
        $('.billboard-description').fadeOut(400, function () {
            $('#fillMe').html(descriptions[descriptionIndex]);
            $('.billboard-description').fadeIn(400, function () {
                setTimeout(changeDescription, 2000);
            });
        });
    }
    
    // call recursive function
    setTimeout(changeDescription, 2000);
});