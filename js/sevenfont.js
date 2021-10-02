var selectedlanguageindex =4;
var font_selektr_mobaIl = document.querySelector('#fontselectidmobile');
font_selektr_mobaIl.onchange = function() { //alert("in font_selektr_mobaIl.onchange " + font_selektr_mobaIl.value);
		//alert("in font_selektr_mobaIl.onchange " + document.body.style.fontFamily);
		// document.getElementsByTagName("body").style =  "font-family: HinDi"; //.fontFamily = this.value;
    document.body.style.fontFamily = this.value;
    // document.footer.style.fontFamily = font_selektr_mobaIl.value;
    if ( ['HinDi', 'Hnskrit'].includes(this.value) )
    {
        // document.body.style.fontSize = "large";
				document.getElementById('pikcrs_div').style.fontSize = "xxx-large";
				// document.getElementsByClassName('pikcrs_lebl').style.fontSize = "lxxx-arge";
    }
		//alert("in font_selektr_mobaIl.onchange " + document.body.style.fontFamily);
}
function changeLanguage(langarg)
{
	switch(langarg)
	{
	case 0:document.aksrcart.src ='cart/h810_chart.png';break;
	case 1:document.aksrcart.src ='cart/voiceChart.png';break;
	case 2:document.aksrcart.src ='cart/symbolsChart.png';break;
	case 3:document.aksrcart.src ='cart/englishChart.png';break;
	case 4:document.aksrcart.src ='cart/hinDicart_u5c.png';break;
	case 5:document.aksrcart.src ='cart/Telugucart_u5c.png';break;
	case 6:document.aksrcart.src ='cart/knrracart_u5c.png';break;
	case 7:document.aksrcart.src ='cart/malayalamcart.png';break;
	case 8:document.aksrcart.src ='cart/Tmilcart_u5c.png';break;
	case 9:document.aksrcart.src ='cart/urriyacart_u5c.png';break;
	case 10:document.aksrcart.src ='cart/banglacart_u5c.png';break;
	case 11:document.aksrcart.src ='cart/pnzabicart_u5c.png';break;
	case 12:document.aksrcart.src ='cart/guzraTicart_u5c.png';break;
	default:document.aksrcart.src ='pikcrs/0.GIF';break;
	}
	selectedlanguageindex =langarg;
	document['foto1'].src ='pikcrs/0.gif';
	document['foto2'].src ='pikcrs/0.gif';
	document['foto3'].src ='pikcrs/0.gif';
	document['foto4'].src ='pikcrs/0.gif';
	document['foto5'].src ='pikcrs/0.gif';
	document['foto6'].src ='pikcrs/0.gif';
	document.getElementById('foto1lbl').innerHTML = '';
	document.getElementById('foto1lb2').innerHTML = '';
	document.getElementById('foto1lb3').innerHTML = '';
	document.getElementById('foto1lb4').innerHTML = '';
	document.getElementById('foto1lb5').innerHTML = '';
	document.getElementById('foto1lb6').innerHTML = '';
}


function SetValues()
{
   var s = 'X=' + window.event.clientX +  ' Y=' + window.event.clientY ;
	window.status = s;
}
function handle_char_click(arg)
{
	switch (selectedlanguageindex)
	{
		case 0: showNmbrs(arg);break;
		case 1: showCharHindi(arg);break; // show7Voice
		case 2: showSymbols(arg);break;
		case 3: showCharEnglish(arg);break;
		case 4: showCharHindi(arg);break;
		case 5: showCharTelugu(arg);break;
		case 6: showCharKannada(arg);break;
		case 7: showCharMalayalam(arg);break;
		case 8: showCharTamil(arg);break;
		case 9: showCharOriya(arg);break;
		case 10: showCharBangla(arg);break;
		case 11: showCharPunjabi(arg);break;
		case 12: showCharGujarati(arg);break;
	}
}
function playNmbrs(vhichKeyDigit)
{
	switch (vhichKeyDigit)
	{
		case 0:ta1.value += "0";break;
		case 1:ta1.value += "1";break;
		case 2:ta1.value += "3";break;
		case 4:ta1.value += "4";break;
		case 5:ta1.value += "5";break;
		case 6:ta1.value += "6";break;
		case 7:ta1.value += "7";break;
		case 8:ta1.value += "8";break;
		case 9:ta1.value += "9";break;
	}
}
