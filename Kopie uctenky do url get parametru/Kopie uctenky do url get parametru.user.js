// ==UserScript==
// @name     Kopie uctenky do url get parametru
// @version  1
// @match    https://www.bazaructenek.cz/vymena/uctenka/*
// @grant 	GM.openInTab
// ==/UserScript==

/*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
*/
var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="odeslatButton" type="button">'
                + 'Odeslat</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
//document.body.appendChild (zNode);

var h1 = document.getElementsByTagName("H1")[0];
h1.appendChild (zNode);

//--- Activate the newly added button.
document.getElementById ("odeslatButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
	  // ?12aabbcc;1456;4777;;;4.4.2019;11:22;123,4
		GM.openInTab("https://www.uctenkovka.cz/mujucet/novauctenka?" + fik1 + ";" + fik2 + ";" + fik3 + ";" + bkp1 + ";" + bkp2 + ";" + datum + ";" + cas + ";" + castka, false);  
}


var fik1 = "";
var fik2 = "";
var fik3 = "";
var bkp1 = "";
var bkp2 = "";
if (typeof document.getElementsByName("fik1")[0] !== 'undefined') {
  fik1=document.getElementsByName("fik1")[0].value;
  fik2=document.getElementsByName("fik2")[0].value;
  fik3=document.getElementsByName("fik3")[0].value;
}
if (typeof document.getElementsByName("bkp1")[0] !== 'undefined') {
  bkp1=document.getElementsByName("bkp1")[0].value;
  bkp2=document.getElementsByName("bkp2")[0].value;
}

var castka=document.getElementsByName("castka")[0].value;
var datum=document.getElementsByName("datum")[0].value;
var cas=document.getElementsByName("cas")[0].value;
  
