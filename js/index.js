$(document).ready(function () {
    var descriptions  = ['Web Developer', 'Coder', 'Electrical Engineer', 'Dancer'];
    var descriptionIndex = 3;
    document.getElementById('fillMe').innerHTML = descriptions[3];
    
    function changeDescription() {
        descriptionIndex += 1;
        if (descriptionIndex > 3) {
            descriptionIndex = 0;
        }
        document.getElementById('fillMe').innerHTML = descriptions[descriptionIndex];
        setTimeout(changeDescription, 2000);
    }
    
    changeDescription();
});