$('#button').on('click', function () {
    var listItem = $('#input').val();
    $('#input').val('');
    $('#listArea').append($('<li>').attr('class', 'list').text(listItem));
  
});

$('#listArea').on('click', '.list', function (e) {
    $(e.target).remove();
});

