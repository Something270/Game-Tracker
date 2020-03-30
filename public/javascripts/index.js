function deleteGame(id) {
    //HTTP request using JQuery
    $.post('/games/delete/'+ id, function(err){

        //callback
        window.location.reload();
    })
}