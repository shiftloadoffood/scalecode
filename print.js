	function ccmpr(btn) {
		function ccmprNow() {
			var e = btn.id;
			newWin = window.open("", "printwin");
			var s = newWin.document.createElement("script");
			s.innerHTML="window.onafterprint=function(){window.close()}";
			newWin.document.getElementsByTagName("head")[0].appendChild(s);
			var n = newWin.document.createElement("style");
			n.innerHTML = "body{max-width: 620px;margin:auto;font-family:sans-serif}.ccm-image{display:none}.ccm-info,.ccm-name,.ccm-summary{margin:20px 0;text-align:center}.ccm-time{text-align:center;padding:10px;border-top:1px dashed #000;border-bottom:1px dashed #000}.ccm-time-child,.ccm-info-child{margin-right:20px;display: inline-block;}.adunit,.adunitlabel,.adunitwrapper,.ccm-hide-on-print,.chicory-order-ingredients{display:none!important}.ccm-head{text-transform:uppercase!important}.ccm-notes{white-space:pre-line}.ccm-nutrition-info>div{display:inline-block;vertical-align:top;font-size:14px;width:calc(20% - 10px);text-align:center;margin:0 5px}.ccm-nutrition-info>div:nth-child(5)~div{margin-top:20px}.ccm-nutrition-info>div p{margin-top:0;margin-bottom:7px}", "ccm-printWithImage" == e && (n.innerHTML = n.innerHTML.replace(".ccm-image{display:none}", ".ccm-image{display:block;margin: 20px auto;height: auto!important;max-width:250px;}.ccm-image img{max-width:100%;}")), newWin.document.getElementsByTagName("head")[0].appendChild(n), newWin.document.getElementsByTagName("body")[0].innerHTML = btn.closest(".ccm-wrapper").innerHTML, newWin.print() }
		    if (btn.id === "ccm-printbutton") { var po = btn.closest(".ccm-wrapper").querySelector(".ccm-print-options"); 
			
			if (po) { 
				po.classList.toggle("ccm-show");
			} else 
			{ 
				ccmprNow(); 
			} 
											  } else {
												  ccmprNow(); 
											  } 
	}