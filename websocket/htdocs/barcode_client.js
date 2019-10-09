$( document ).ready(function() {
    var connection = new WebSocket('ws://127.0.0.1:8080/', ['soap', 'xmpp']);
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
