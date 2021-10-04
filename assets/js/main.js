var color = [0, 0]; // Para los botones

$(document).ready(function()
{
    $("#color_ingredientes").dblclick(function()
    {
        color[0] ? $("#color_ingredientes").css({"color": "#343A40"}) : $("#color_ingredientes").css({"color": "red"});
        color[0] = !color[0];
    });
    $("#color_preparacion").dblclick(function()
    {
        color[1] ?  $("#color_preparacion").css({"color": "#343A40"}) : $("#color_preparacion").css({"color": "red"});
        color[1] = !color[1];
    });
    $("#enviarCorreo").click(function()
    {
        alert("El correo fue enviado correctamente...");
    });
    $(".card-title").click(function()
    {
        $(".card").toggle();
    });
});
