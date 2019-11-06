$( document ).ready(function() {
//    var connection = new WebSocket('ws://127.0.0.1:8020/', []);
    var connection = new WebSocket('ws://192.168.177.81:8020/', []);
    connection.onopen = function () {
	connection.send('ping');
    };
    connection.onerror = function (error) {
	console.log('WebSocket Error ' + error);
    };
    connection.onmessage = function (e) {
	console.log('Server: ' + e.data);
	$('#barcodeTxt').append("<div>"+e.data+"</div>");
    };
});
