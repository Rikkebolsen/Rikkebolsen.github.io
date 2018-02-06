var curAvailability = "";
if(ed24ChatObj.hidden == undefined)
{
	ed24ChatObj.hidden = 'none';
}
if(ed24ChatObj.visible == undefined)
{
	ed24ChatObj.visible = 'block';
}
if(ed24ChatObj.pollTime == undefined)
{
	ed24ChatObj.pollTime = 10000;
}
function includeJS(jsPath){
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", jsPath);
    document.getElementsByTagName("head")[0].appendChild(script);
}


function ed24LoadLibs()
{
	if(document.body != undefined)
	{	
		if (typeof jQuery === "undefined") {
            includeJS(''+ed24ChatObj.webserverAddress+'/ChatClient3/jquery-latest.js');			
        }
		else
		{setTimeout('loadJsonp()',1000);}		
	}
	else
	{setTimeout('ed24LoadLibs()',200);}
}

function loadJsonp()
{
	if(typeof jQuery != "undefined")
	{
		includeJS(''+ed24ChatObj.webserverAddress+'/ChatClient3/jquery.jsonp-2.4.0.min.js');
	}
	else
	{
		setTimeout('loadJsonp()',100);
	}
}

rnd.today=new Date();
rnd.seed=rnd.today.getTime();
function rnd() {
	rnd.seed = (rnd.seed*9301+49297) % 233280;
	return rnd.seed/(233280.0);
}
function genUQ() {
	var tmp = Math.ceil(rnd()*100);
	return rnd.today.getTime() + tmp.toString();
}
function getInternetExplorerVersion()
{
   var rv = -1; // Return value assumes failure.
   if (navigator.appName == 'Microsoft Internet Explorer')
   {
      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
         rv = parseFloat( RegExp.$1 );
   }
   return rv;
}
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}
function checkEntryPointStatus()
{
	
		var req = /*ed24ChatObj.webserverAddress*/'//login2.edialog24.com/cmd?OP=ENTRYPOINTSTATUS&mainid='+ed24ChatObj.mainid+'&ver=3&epname='+ed24ChatObj.entrypoint+'&uq='+genUQ();	
		
		if(detectIE() >= 10)
		{
			jQuery.ajax({
			url: req+"&callback=?",
			type: "get",
			dataType: "jsonp",
			cache: false,
			crossDomain: true,
			success: function(data) {
			}
		});

		}
		else
		{
			jQuery.jsonp({url: req+"&callback=?"});	
		}

}

 

var targetWndName = "ed24Win"+genUQ(); 

function divClick(newWindow)
{
	var newWindow = newWindow || false;

    var useNewWindow = false;
    if (newWindow) {
			useNewWindow = true;
    }

	dataLayer = [{
	  'gtm.whitelist': ['ed24link']
	}];
	if(document.getElementById('ed24link') == undefined)
	{
	
		var adom = document.createElement("a");
		adom.id='ed24link';
		adom.href='javascript:void(0)';
		adom.setAttribute("style", "visibility:hidden;position:absolute;");
		document.body.appendChild(adom);
	}
	if(curAvailability != "Busy")
		{	
			if(ed24ChatObj.windowSettings != undefined)
			{			
				if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {								
					var win = window.open(ed24ChatObj.urlToOpen,targetWndName,ed24ChatObj.windowSettings); 
					console.log('opening blank');					
				}
				else
				{	
				   targetWndName = targetWndName+''+(useNewWindow?''+genUQ():'');
				   var wnd = window.open("",targetWndName,ed24ChatObj.windowSettings);  
				   var link = document.getElementById("ed24link");  
				   link.target = targetWndName;  
				   link.href = ed24ChatObj.urlToOpen;  
				   link.click();
					console.log('opening target');	
				 }
			}
			else
			{				
				if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
					var win = window.open(ed24ChatObj.urlToOpen,'_blank');						
				}
				else
				{
				
				   var wnd = window.open("",targetWndName);  
				   var link = document.getElementById("ed24link");  
				   link.target = targetWndName;  
				   link.href = ed24ChatObj.urlToOpen;  
				   link.click();			   
				 }
				
			}
		}
}
var elems = [];

function ed24go()
{
	if(document.getElementsByName("ed24DivOnline") != undefined && document.getElementsByName("ed24DivOffline") != undefined && document.getElementsByName("ed24DivBusy") != undefined && typeof jQuery !== "undefined" && typeof jQuery.jsonp != "undefined")
	{	
		elems['Online'] = $('[name="ed24DivOnline"]');
		elems['Offline'] = $('[name="ed24DivOffline"]');
		elems['Busy'] = $('[name="ed24DivBusy"]');
		
			curAvailability = "Busy";
			if(ed24ChatObj['Online'].length > 0)
			{
				for(i=0; i<elems['Online'].length; i++)
				{
					elems['Online'][i].innerHTML = ed24ChatObj['Online'];	
					if(!$(elems['Online'][i]).hasClass('ed24disabled'))
					{
						elems['Online'][i].onclick= divClick;			
					}
				}
			}
			if(ed24ChatObj['Offline'].length > 0)
			{		
				for(i=0; i<elems['Offline'].length; i++)
				{	
					if(!$(elems['Offline'][i]).hasClass('ed24disabled'))
					{
						elems['Offline'][i].onclick= divClick;		
					}
					elems['Offline'][i].innerHTML = ed24ChatObj['Offline'];
				}
			}
			if(ed24ChatObj['Busy'].length > 0)
			{		
				for(i=0; i<elems['Busy'].length; i++)
				{	
					if(!$(elems['Busy'][i]).hasClass('ed24disabled'))
					{
						elems['Busy'][i].onclick= divClick;			
					}
					elems['Busy'][i].innerHTML = ed24ChatObj['Busy'];
				}
			}
		
	}
	else{setTimeout('ed24go()',200);}
}


function availabilityCallback(jsonData)
{

	if (curAvailability != jsonData.Availability)
	{
		curAvailability = jsonData.Availability;
		if(elems['Online'])
		{
			for(i=0; i<elems['Online'].length; i++)
			{	
				elems['Online'][i].style.display = ed24ChatObj.hidden;
			}
		}
		if(elems['Offline'])
		{
			for(i=0; i<elems['Offline'].length; i++)
			{	
				elems['Offline'][i].style.display = ed24ChatObj.hidden;
			}
		}
		if(elems['Busy'])
		{
			for(i=0; i<elems['Busy'].length; i++)
			{	
				elems['Busy'][i].style.display = ed24ChatObj.hidden;
			}
		}
		if(elems[curAvailability])
		{
			for(i=0; i<elems[curAvailability].length; i++)
			{	
				elems[curAvailability][i].style.display = ed24ChatObj.visible;
			}
		}
			
		
	}
	if(ed24ChatObj.pollTime >= 10000) {
		setTimeout('checkEntryPointStatus()',ed24ChatObj.pollTime);
	}
}
function ed24jQueryReady()
{
	if (typeof jQuery != 'undefined' && typeof jQuery.jsonp != "undefined") {
		jQuery( document ).ready(function() {
		ed24go();
		checkEntryPointStatus();
		});
	}
	else
	{
		setTimeout('ed24jQueryReady()',50);
	}
}

ed24LoadLibs();
ed24jQueryReady();


