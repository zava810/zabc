// var navigationFlag1 = 0;
// var navigationFlag2 = 0;

// var cursorVallEnd =0;
// var cursorVallStart =0;

//function resetAllKeyFlags () { flags8Segments=128; }
//function setFlagsFromByte (segByte) {flags8Segments = segByte ;}

function completeCharacter () { tekstNavigate(212,1,255,128); }//221 = 0+0+4+0+16+0+64+128 = 1101 0100 = 212
function goSpaceRight() { tekstNavigate(221,1,255,128); }
function goSameRight() { tekstNavigate(0,1,0,0); }
function moveCursorRight () {}//-->
//function pressSpaceKey () {}//SPACEBAR KEY
function pressBkspcKey () {}
function moveCursorLeft () {}//moveCursorLeft
function dayLDecimalnmbrGoRight ()
{
	//document.aksrcart.src ='SevenNmbrs_Bw_Gif.GIF';
	playNmbrs(vhichKeyDigit);
	var byteValue = eval("SEVEN_"+vhichKeyDigit);tekstNavigate(221,1,byteValue,128);
}

function tekstNavigate(argNavigateType,argNavigateVhere,argFill1,argFill2)
{
	//arg->flags , mem->flags ,flags->mem , flags->screen
	if(argNavigateType & 1) { flags8Segments = argFill1 ; }
	if(argNavigateType & 2) { flags8Segments = screenSegList[presentKrsrIndeks] ; }
	if(argNavigateType & 4) { screenSegList[presentKrsrIndeks] = flags8Segments ; }
	if(argNavigateType & 8) { drawSegForByte(flags8Segments) ; }
	stopDpBlink();stagesEventPassed = 1;
	//1--> , 2 <-- , 
	switch(argNavigateVhere)
	{
		case 1://  "-->"
		{
			//alert("argNavigateVhere is "+argNavigateVhere);
			isNavigateSuccess = 0;
			if(presentKrsrIndeks<cursorVallEnd)
			{
				gotoNext();
				if(isTravelSuccess) {isNavigateSuccess=1;stagesEventPassed = 128 ;}
			}
		}
		break ;
		case 2://  "<--"
		{
			isNavigateSuccess = 0;
			if(presentKrsrIndeks>cursorVallStart)
			{
				gotoPrevious();
				if(isTravelSuccess) {isNavigateSuccess=1;stagesEventPassed = 128 ;}
			}
		}
		break ;
		case 3://A
		{
			isNavigateSuccess = 0;
			if(presentKrsrIndeks-16>cursorVallStart)
			{
				goUpBy1();
				if(isTravelSuccess) {isNavigateSuccess=1;stagesEventPassed = 128 ;}
			}
		}
		break ;
		case 4://V
		{
			isNavigateSuccess = 0;
			if(presentKrsrIndeks+16<cursorVallEnd)
			{
				goDownBy1();
				if(isTravelSuccess) {isNavigateSuccess=1;stagesEventPassed = 128 ;}
			}
		}
		break ;
		case 5://Niyu line
		{
			isNavigateSuccess = 0;
			if(MAXROW>curRow)
			{
				goNiyuLine();
				if(isTravelSuccess) {isNavigateSuccess=1;stagesEventPassed = 128 ;}
			}
		}
		break ;
		case 6://Home
		{
			isNavigateSuccess = 0;
			goLeftMost();
			if(isTravelSuccess) {isNavigateSuccess=1;stagesEventPassed = 128 ;}
		}
		break ;//
		case 7://END
		{
			isNavigateSuccess = 0;
			goLastReachedInPresentRow();
			if(isTravelSuccess) {isNavigateSuccess=1;stagesEventPassed = 128 ;}
		}
		break ;
		case 8://EOTEKST goEOTEKST
		{
			isNavigateSuccess = 0;
			goEOTEKST();
			if(isTravelSuccess) {isNavigateSuccess=1;stagesEventPassed = 128 ;}
		}
		break ;
		// case 9:
		// {

		// }
		// break ;			
	}
	
	if(isNavigateSuccess)
	{	
		if(argNavigateType & 16) { flags8Segments = argFill2 ;/*alert(flags8Segments); */}
		if(argNavigateType & 32) { flags8Segments = screenSegList[presentKrsrIndeks] ; }
		if(argNavigateType & 64) { screenSegList[presentKrsrIndeks] = flags8Segments ; }
		if(argNavigateType & 128) { drawSegForByte(flags8Segments) ;/*alert(flags8Segments);*/ }
	}
	startDpBlink();	
}
