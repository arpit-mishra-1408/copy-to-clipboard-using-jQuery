$(document).ready(function(){
  
    function add(){
        $('.copied').addClass('bounce-effect');
    }
    
    function remove(){
    $('.copied').removeClass('bounce-effect');
    }


    $('.copy-btn').click(function () {
        var textfield = document.getElementById('textfield');
        textfield.select();
    
        try {
            navigator.clipboard.writeText(textfield.value).then(function() {
                add();
                setTimeout(remove, 800);
                
            })
        } catch (err) {
            // Fallback for browsers that do not support the Clipboard API
            console.error('Unable to copy text to clipboard', err);
        }
    });
    

   
});


