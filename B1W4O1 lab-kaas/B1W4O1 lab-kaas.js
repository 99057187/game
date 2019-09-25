var geleKaas =prompt("is de kaas geel?")
var gatenKaas 
var schimmelKaas
var duurKaas
var hardKaas
var korstKaasJa
var korstKaasNee
if (geleKaas == "yes" ){
	gatenKaas = prompt("zitten er gaten in de kaas")
	document.write("de kaas is geel.<br> " )
}

else if (geleKaas == "no" ){
    schimmelKaas = prompt("heeft de kaas blauwe schimmel?")
	document.write("de kaas is niet geel.<br> ")
}

if (gatenKaas == "yes" ){
    duurKaas = prompt("is de kaas belagelijk duur. ")
	document.write("de kaas heeft gaten.<br> ")
}
else if(gatenKaas == "no" ){
	hardKaas = prompt("is de kaas hard als steen. ")
	document.write("de kaas heeft geen gaten.<br> ")
}


if (duurKaas == "yes"){
	document.write("ja de kaas is duur.<br> ")
	document.write("het is emmenthaler kaas. ")
}
else if( duurKaas =="no"){
	document.write("nee de kaas is niet duur.<br> ")
	document.write("het is leerdammer kaas. ")
}
if (hardKaas == "yes"){
	document.write("de kaas is hard als steen.<br>")
	document.write("het is parmigiano regianno kaas")
}
	else if(hardKaas =="no"){
		document.write("de kaas is niet zo hard als steen.<br> ")
		document.write("het is goudse kaas")
	}
if (schimmelKaas == "yes"){
    korstKaasJa = prompt("heeft de kaas een korst.")
	document.write("het is schimmelKaas.<br> ")
}
else if(schimmelKaas == "no"){
     korstKaasNee = prompt("heeft de kaas een korst?")
document.write("het is geen schimmelkaas.<br> ")

}


if (korstKaasJa == "yes"){
document.write("de kaas heeft een korst.<br> ")
document.write("het is blue de rochbaron kaas.")
}
else if(korstKaasJa == "no"){
	document.write("de kaas heeft geen korst<br>")
	document.write("het is fourme d'Ambert kaas")
}
if(korstKaasNee == "yes"){
	document.write("de kaas heeft een korst<br> ")
	document.write("het is camembert kaas")
}

else if(korstKaasNee == "no"){
	document.write("de kaas heeft geen korst<br> ")
	document.write("het is mozarella kaas")
}
else{
	alert("try again and just type yes or no")
}