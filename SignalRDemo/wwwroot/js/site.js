var connection = new signalR.HubConnectionBuilder().withUrl("chatHub").build();

connection.on("ReceiveMessage", function (fromuser, message) {
    var msg = fromuser + " : " + message
    var li = document.createElement("li");
    li.textContent = msg;
    $("#list").prepend(li);
});

connection.start();

$("#btnsend").on("click", function () {
    var fromuser = $("#txtuser").val();
    var message = $("#txtmessge").val();

    connection.invoke("SendMessage", fromuser, message);
})