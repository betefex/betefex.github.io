set_content=function (content) {
    $.get(content, function (x) {
        $('#content').html(marked(x));
    });
    $('.highlighted').removeClass('highlighted')
    $('#'+content.replace('.','\\.')).addClass('highlighted')
};

document.addEventListener("DOMContentLoaded",
    function (_) {
        $('.menub').on('click',function (event) {
            set_content(event.target.id)
        });        
        set_content('eco.md');
    });
