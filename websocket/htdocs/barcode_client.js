$( document ).ready(function() {

    // 8020 nginx proxy
    //var url = 'ws://127.0.0.1:8020/';
    var url = 'ws://127.0.0.1:8080/';
    //var url = 'ws://192.168.177.94:8080/';
    
    var iviews_url = 'https://ivcontent.i-views.com/mucstud/version/1.3/dita-subject-scheme-map-example/';
    var pilot_url = 'http://10.20.63.102:8480/w/de_DE/welcome/';
    var st4_url = 'http://10.20.63.102:3080/cds/online/';
    
    openWebSocket();
    
   function createNotification(number, message, link){
       
       var n = message.lastIndexOf('/');
       var name = message.substring(n + 1);
       var css = 'is-info';
       var link = '';
       var title = '';
       
       switch(name){
       case  'red-1' : css = 'is-danger'; title = 'Türscharniere schmieren'; link =  pilot_url +'eda5fce38aee361276b3baef5a6749be_1_de_DE?t=5f035a08052c304b0a143f666295162c_1_de_DE&e=ID_DC9FF3F19E027FC5FA5174A9C7EE011E&topics=eda5fce38aee361276b3baef5a6749be_1_de_DE~ID_DC9FF3F19E027FC5FA5174A9C7EE011E-dea4dfe88d1b397c2c20c0b98d82ba62_1_de_DE~ID_ED6E1EAAEC173F89D9C0A5F6189A16D0-bc5e0268bfce3431a567e965f0fac143_1_de_DE~ID_C23C9AC7D8F3720B1D2B66265CF83417&ct=5f035a08052c304b0a143f666295162c_1_de_DE&subt=ID_A75CE33FBF41FB3B7F7ABD87C9115820~ID_B2B3222330F2EC57D366497DD56F8548~ID_ED01605EE9FF4BF97E4CFEE1C439C089';
       break;
       case  'red-2' : css = 'is-danger'; title = 'Heizspirale reinigen'; link = pilot_url + '774b9bc9cd0a81a7c01b55e928ba5d12_1_de_DE?t=5f035a08052c304b0a143f666295162c_1_de_DE&e=ID_6A7A6215A7C8876AEAE1044396FC095D&topics=774b9bc9cd0a81a7c01b55e928ba5d12_1_de_DE~ID_6A7A6215A7C8876AEAE1044396FC095D-eda5fce38aee361276b3baef5a6749be_1_de_DE~ID_DC9FF3F19E027FC5FA5174A9C7EE011E-dea4dfe88d1b397c2c20c0b98d82ba62_1_de_DE~ID_ED6E1EAAEC173F89D9C0A5F6189A16D0-bc5e0268bfce3431a567e965f0fac143_1_de_DE~ID_C23C9AC7D8F3720B1D2B66265CF83417&ct=5f035a08052c304b0a143f666295162c_1_de_DE&subt=ID_A75CE33FBF41FB3B7F7ABD87C9115820~ID_B2B3222330F2EC57D366497DD56F8548~ID_ED01605EE9FF4BF97E4CFEE1C439C089~ID_BCC042B7CCD15832F2155D86C713BECA';
       break;
       case  'red-3' : css = 'is-danger';  title = 'Filter reinigen'; link = pilot_url + 'dea4dfe88d1b397c2c20c0b98d82ba62_1_de_DE?t=5f035a08052c304b0a143f666295162c_1_de_DE&e=ID_ED6E1EAAEC173F89D9C0A5F6189A16D0&topics=dea4dfe88d1b397c2c20c0b98d82ba62_1_de_DE~ID_ED6E1EAAEC173F89D9C0A5F6189A16D0-1b9f729054ceffe9107e874555f449c8_1_de_DE~ID_78079DDFA0E362B6E958FC577773CAE8-63a853e62397db30da6f5701a2c2d28a_1_de_DE~ID_FA7052C5892BBD94F379B46F67AE6EAB-774b9bc9cd0a81a7c01b55e928ba5d12_1_de_DE~ID_6A7A6215A7C8876AEAE1044396FC095D-eda5fce38aee361276b3baef5a6749be_1_de_DE~ID_DC9FF3F19E027FC5FA5174A9C7EE011E-bc5e0268bfce3431a567e965f0fac143_1_de_DE~ID_C23C9AC7D8F3720B1D2B66265CF83417&ct=5f035a08052c304b0a143f666295162c_1_de_DE&subt=ID_A75CE33FBF41FB3B7F7ABD87C9115820~ID_B2B3222330F2EC57D366497DD56F8548~ID_ED01605EE9FF4BF97E4CFEE1C439C089~ID_BCC042B7CCD15832F2155D86C713BECA~ID_E41B0F240E03AF149CBBBA7531EF7BEB~ID_23A7E75F04E9CD20233576A80BD6F57F';
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
