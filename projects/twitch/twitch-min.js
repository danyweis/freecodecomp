function ajaxGet(e,t){var n=new XMLHttpRequest;n.open("GET",e),n.addEventListener("load",function(){n.status>=200&&n.status<400?t(n.responseText):console.error(n.status+" "+n.statusText+" "+e)}),n.addEventListener("error",function(){console.error("Error with the URL "+e)}),n.send(null)}function createApp(e,t){console.log(e);var n=document.createElement("div");n.style.height="100px",n.style.marginTop="10px",n.style.padding="10px 0 0 10px",n.style.border="1px solid #381975";var a=document.createElement("img");a.setAttribute("src",e),a.style.height="75px",a.style.marginRight="10px",a.style.borderRadius="50%",a.style.float="left";var r=document.createElement("h4"),o=document.createElement("a");o.style.textDecoration="none",o.style.color="#fff",o.setAttribute("target","_blank"),r.appendChild(o),n.appendChild(a),n.appendChild(r),document.getElementById("contenu").appendChild(n)}var arrChannelElt=["medrybw","cretetion","freecodecamp","habathcx","RobotCaleb","noobs2ninjas"],arrCree=[],arrOn=[],arrOff=[];for(i=0;i<arrChannelElt.length;i++){var channelName=arrChannelElt[i];ajaxGet("https://wind-bow.glitch.me/twitch-api/users/"+channelName,function(e){var t=JSON.parse(e)}),ajaxGet("https://wind-bow.glitch.me/twitch-api/streams/"+channelName,function(e){return JSON.parse(e)}),createApp()}