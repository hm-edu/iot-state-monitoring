$( document ).ready(function() {

    // 8020 nginx proxy
    //var url = 'ws://127.0.0.1:8020/';
    var url = 'ws://127.0.0.1:8080/';
    
    openWebSocket();
    
   function createNotification(number, message, link){
       
       var date = new Date().toISOString();
       //.toLocaleDateString('de-DE') 
       var tag = '<span class="tag is-lite is-pulled-right">'+date+'</span>';
       var btn = '<button class="delete"></button>';
       var link ='<a target="_blank" href="'+link+'" style="display:inline-block;width:100%;"><br />'+message+'</a>';
       
       return '<div class="notification is-link">'+tag+btn+link+'</div>';
   }

   function openWebSocket(){
    
    var  ws = new WebSocket(url, []);
  
    ws.onopen = function () {
    
	  ws.send('ping');
	  console.log('ping sent');
    };
    
    ws.onerror = function (error) {
	console.log('WebSocket Error ' + error);
    };
    
    ws.onmessage = function (e) {
	console.log('Server: ' + e.data);
	
	//$('#wsFrame').prop('src', e.data);
	
	var note = createNotification(100, e.data, e.data);
	$('#barcodeTxt').append(note);
    };
    
    ws.onclose = function (e) { 
     
      $('#barcodeTxt').append('Socket closed');    
     ws = null;
     setTimeout(openWebSocket, 2000);   
    };
    
  }
 
});
