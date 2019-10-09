$( document ).ready(function() {
    var connection = new WebSocket('ws://192.168.178.119:8020/', []);
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
