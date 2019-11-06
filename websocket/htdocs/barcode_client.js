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
    
    websocket.onclose = function (e) {            
    $('#barcodeTxt').append('Socket closed');    
    
    //retryOpeningWebSocket();

};

function openWebSocket(){
    if (websocket.readyState === undefined || websocket.readyState > 1) {

    }

}


function retryOpeningWebSocket(){
    if (retries < 2) {            
        //setTimeout(openWebSocket, 1000);            
        retries++;
    }
}

});
