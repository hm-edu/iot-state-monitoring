$( document ).ready(function() {

    // 8020 nginx proxy
    //var url = 'ws://127.0.0.1:8020/';
    var url = 'ws://192.168.177.81:8080/';
    
    openWebSocket();

   function openWebSocket(){
    
    var  ws = new WebSocket(url, []);
  
    ws.onopen = function () {
    
	  ws.send('ping');
    };
    
    ws.onerror = function (error) {
	console.log('WebSocket Error ' + error);
    };
    
    ws.onmessage = function (e) {
	console.log('Server: ' + e.data);
	$('#barcodeTxt').append("<div>"+e.data+"</div>");
    };
    
    ws.onclose = function (e) {            
    $('#barcodeTxt').append('Socket closed');    
     ws = null;
     setTimeout(openWebSocket, 2000);   
    };
    
  }
 
});
