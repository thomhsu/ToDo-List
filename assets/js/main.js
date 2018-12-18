// Click to check off to-do
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
})

// Click on X to delete to-do
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

// Add to-do
$('input[type="text"]').keypress(function(event){
    if (event.which === 13){
        var toDoText = $(this).val();
        $(this).val('');
        $('ul').append('<li><span><i class="fas fa-trash"></i></span>' + toDoText + '</li>');
    }
});

$('.fa-plus').click(function(){
    $('input[type="text"]').fadeToggle();
})