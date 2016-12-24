$(document).ready(function () {
    // to add more, just append to this array
    var descriptions  = ['Web Developer', 'Coder', 'Electrical Engineer', 'Dancer', 'UCLA Bruin'];
    
    var descriptionIndex = 3;
    $('#fillMe').html(descriptions[3]);
    
    function changeDescription() {
        descriptionIndex += 1;
        if (descriptionIndex > descriptions.length - 1) {
            descriptionIndex = 0;
        }
        $('#fillMe').html(descriptions[descriptionIndex]);
        setTimeout(changeDescription, 2000);
    }
    
    changeDescription();
});