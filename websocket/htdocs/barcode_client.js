$( document ).ready(function() {

    // 8020 nginx proxy
    //var url = 'ws://127.0.0.1:8020/';
    var url = 'ws://127.0.0.1:8080/';
    //var url = 'ws://192.190.0.79:8080/';
    
    openWebSocket();
    
   function createNotification(number, message, link){
       
       var n = message.lastIndexOf('/');
       var name = message.substring(n + 1);
       var css = 'is-link';
       if(name == 'white-1' || name == 'white-2' || name == 'white-3') css = 'is-primary';
       if(name == 'blue-1' || name == 'blue-2' || name == 'blue-3') css = 'is-info';
       
       var date = new Date().toISOString();
       //.toLocaleDateString('de-DE') 
       var tagDate = '<span class="tag is-lite is-pulled-right">'+date+'</span>';
       var tagName = '<span class="tag is-lite is-pulled-left">'+name+'</span>';
       var btn = '<button class="delete"></button>';
       var link ='<a target="_blank" href="'+link+'" style="display:inline-block;width:100%;"><br />'+message+'</a>';
       
       return '<div class="notification '+css+'">'+tagName+tagDate+btn+link+'</div>';
   }

   function openWebSocket(){
    
    var  ws = new WebSocket(url, []);
  
    ws.onopen = function () {
    
	  //ws.send('ping');
	  $('#clientStatus').html('Status: &#160;<b>connected</b>'); 
	  console.log('ws open');
    };
    
    ws.onerror = function (error) {
	   console.log('WebSocket Error ' + error);
	  $('#clientStatus').html('Status: &#160;<b>connection error</b>');    
    };
    
    ws.onmessage = function (e) {
	console.log('Server: ' + e.data);
	
	//$('#wsFrame').prop('src', e.data);
	
	var note = createNotification(100, e.data, e.data);
	$('#barcodeTxt').prepend(note);
    };
    
    ws.onclose = function (e) { 
     
     $('#clientStatus').html('Status: &#160;<b>disconnected</b>');    
     ws = null;
     setTimeout(openWebSocket, 2000);   
    };
    
  }
 
});
