// ==UserScript==
// @name     Kopie uctenky z url get do form poli uctenkovka.cz
// @version  1
// @match    https://www.uctenkovka.cz/mujucet/novauctenka*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant GM.addStyle
// ==/UserScript==

// test url https://www.uctenkovka.cz/mujucet/novauctenka?12aabbcc;1456;4777;;;4.4.2019;11:22;123,4
/*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
*/
var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="preFillButton" type="button">'
                + 'Vyplnit</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);


//--- Activate the newly added button.
document.getElementById ("preFillButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
    try {
		var href = window.location.href;
	  	if(href.indexOf('?')>0) {
  	    var q = href.split('?');
    	  var q2 = q[1].split(';');
      	var fik1=q2[0];
	      var fik2=q2[1];
  	    var fik3=q2[2];
    	  var bkp1=q2[3];
      	var bkp2=q2[4];
	      var receiptDate=q2[5];
  	    var receiptTime=q2[6];
    	  var amount=q2[7];
      
        var form1 = document.forms["ctrl.form"];
      	form1.elements.fik1.setAttribute ('id', 'fik1');
      	setControl ('fik1', fik1 );
      	form1.elements.fik2.setAttribute ('id', 'fik2');
      	setControl ('fik2', fik2 );
      	form1.elements.fik3.setAttribute ('id', 'fik3');
      	setControl ('fik3', fik3 );
      	form1.elements.bkp1.setAttribute ('id', 'bkp1');
      	setControl ('bkp1', bkp1 );
      	form1.elements.bkp2.setAttribute ('id', 'bkp2');
      	setControl ('bkp2', bkp2 );
      	form1.elements.receiptDate.setAttribute ('id', 'receiptDate');
      	setControl ('receiptDate', receiptDate );      
      	form1.elements.receiptTime.setAttribute ('id', 'receiptTime');
      	setControl ('receiptTime', receiptTime );
      	form1.elements.amount.setAttribute ('id', 'amount');
      	setControl ('amount', amount );
	    } else {
        alert("Není co vyplnit");
			}    	

    } catch(err) {
    	alert(err);
    }

  
  
}

function setControl (elemID, value) {
    var zInput  = $( '#' + elemID );
    zInput.val( value );

    var changeEvent = document.createEvent ("HTMLEvents");
    changeEvent.initEvent ("change", true, true);
    zInput[0].dispatchEvent (changeEvent);
}

//--- Style our newly added elements using CSS.
GM.addStyle ( `
    #myContainer {
        position:               absolute;
        top:                    0;
        left:                   0;
        font-size:              20px;
        background:             orange;
        border:                 3px outset black;
        margin:                 5px;
        opacity:                0.9;
        z-index:                1100;
        padding:                5px 20px;
    }
    #preFillButton {
        cursor:                 pointer;
    }
    #myContainer p {
        color:                  red;
        background:             white;
    }
` );