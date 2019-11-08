$( document ).ready(function() {

    // 8020 nginx proxy
    //var url = 'ws://127.0.0.1:8020/';
    var url = 'ws://127.0.0.1:8080/';
    //var url = 'ws://192.168.177.94:8080/';
    
    var iviews_url = 'https://ivcontent.i-views.com/mucstud/version/1.3/dita-subject-scheme-map-example/';
    var pilot_url = 'http://10.20.63.102:8480/w/de_DE/';
    var st4_url = 'http://10.20.63.102:3080/cds/online/';
    
    openWebSocket();
    
   function createNotification(number, message, link){
       
       var n = message.lastIndexOf('/');
       var name = message.substring(n + 1);
       var css = 'is-info';
       var link = '';
       var title = '';
       
       switch(name){
       case  'red-1' : css = 'is-danger'; title = 'Türscharniere schmieren'; link =  pilot_url +'show/eda5fce38aee361276b3baef5a6749be_1_de_DE?query=T%C3%BCrscharniere%20schmieren';
       break;
       case  'red-2' : css = 'is-danger'; title = 'Heizspirale reinigen'; link = pilot_url + 'show/774b9bc9cd0a81a7c01b55e928ba5d12_1_de_DE?query=Heizspirale%20reinigen';
       break;
       case  'red-3' : css = 'is-danger';  title = 'Filter reinigen'; link = pilot_url + 'show/dea4dfe88d1b397c2c20c0b98d82ba62_1_de_DE?query=Filter%20reinigen';
       break;
       case  'white-1' : css = 'is-primary'; link = iviews_url + 'excavators4/iv'; title = 'Gasdüse reinigen';
       break;
       case  'white-2' : css = 'is-primary'; link = iviews_url + 'excavators29/iv'; title = 'Filter reinigen';
       break;
       case  'white-3': css = 'is-primary'; link = iviews_url + 'excavators27/iv'; title = 'Öl wechseln';
       break;
       case  'blue-1' : css = 'is-link'; title = 'Gurtspannung prüfen'; link = st4_url + '#doc/93092363-134150/93092363-134150';
       break;
       case  'blue-2' : css = 'is-link'; title = 'Antriebswalze justieren'; link = st4_url + '#doc/93094283-134150/93094283-134150';
       break;
       case  'blue-3' : css = 'is-link'; title = 'Fehlersuche'; link = st4_url + '#doc/89473931-134150/89473931-134150';
       break;
       default: 
       }
       
       var date = new Date().toISOString();
       //.toLocaleDateString('de-DE') 
       var tagDate = '<span class="tag is-lite is-pulled-right">'+date+'</span>';
       var tagName = '<span class="tag is-lite is-pulled-left">'+name+'</span>';
       var btn = '<button class="delete"></button>';
       var link ='<div style="padding-top:12px;"><a target="_blank" href="'+link+'" style="font-size:48px;display:inline-block;width:100%;">'+title+'</a></div>';
       
       return '<div class="notification '+css+'">'+tagName+tagDate+btn+link+'</div>';
   }

   function openWebSocket(){
    
    var  ws = new WebSocket(url, []);
  
    ws.onopen = function () {
    
	  //ws.send('ping');
	  $('#clientStatus').html('Status: &#160;<b>connected</b>'); 
	  console.log('ws open');
	 // testNotes();
    };
    
    ws.onerror = function (error) {
	   console.log('WebSocket Error ' + error);
	  $('#clientStatus').html('Status: &#160;<b>connection error</b>');    
    };
    
    ws.onmessage = function (e) {
	console.log('Server: ' + e.data);
	
	//$('#wsFrame').prop('src', e.data);
	
	var note = createNotification(100, e.data, e.data);
	$('#barcodeTxt').prepend(note).hide().slideDown( "slow" );
    };
    
    ws.onclose = function (e) { 
     
     $('#clientStatus').html('Status: &#160;<b>disconnected</b>');    
     ws = null;
     setTimeout(openWebSocket, 2000);   
    };
    
  }
  
  function testNotes(){
    	var note = createNotification(100, 'white-1', 'white-1');
  	$('#barcodeTxt').prepend(note).hide().slideDown( "slow" );
     };
    
 
});
