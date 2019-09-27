var  vraag1//sla het draakje of voer het draakje
var  vraag2//achter draakje aan rennen of spullen zoeken
var  vraag3//kampvuur maken of overnachten
var  vraag4
var  vraag5
var  vraag6
var  vraag7
var  vraag8
var  vraag9
var  vraag10
var  vraag11
var  vraag12
var  draakNaam
var playerName

    playerName = prompt("geef jezelf een naam")
    alert("je bent wakker geworden in een bos, je ziet naast je een klein draakje liggen.")
    alert("je kan hem wat eten geven uit je tas  [keus 1], of je slaat hem met de grote stok naast je   [keus 2]")

vraag1 = prompt("maak een keus type 1 voor keus 1, type 2 voor keus 2<br>")


         if (vraag1 == "2" ){
    alert("je hebt het draakje boos gemaakt, hij pakt je tas en vliegt weg")
    alert("je kan 2 dingen doe. je kan acher hem aan rennen [keus 1] of je zoekt wat spullen om te overleven [keus 2]")
vraag2 = prompt("maak een keus type 1 voor keus 1, type 2 voor keus 2")
document.write("je hebt ervoor gekozen om het draakje te slaan [keus 2]<br>")
}
         else if (vraag1 == "1"){
    alert("het draakje vind je eten lekker en is nu je vriend")
    alert("je pakt je tas en gaat met het draakje opzoek naar de bewoonde wereld")
    alert("je ziet een (mogelijk verlaten) huisje van een jager")
    alert("je kan door lopen en kijken of je een andere plek ziet om te overnachten [keus 1] of je gaat naar binnen en plunderd het huisje. [keus 2]")
vraag4 = prompt("maak een keus type 1 voor keus 1, type 2 voor keus 2")
document.write("je hebt ervoor gekozen het draakje te voeren [keus 1]<br>")
}
         if (vraag4 == "1"){
	alert("je loopt door onder tussen geef je je draakje een naam")
	draakNaam = prompt("wat is het naampje van het draakje")
	alert("je zegt tegen "  + draakNaam + " dat jij " + playerName + " heet")
    alert("je vind een grot je gaat naar binnen maar je komt een beer tegen.")
    alert("je kan 2 dingen doen,  je zegt tegen je draakje dat hij de beer moet verbranden. [keus 1]  of je gaat een 1 op 1 gevecht aan met de beer [keus 2]")
vraag5 = prompt("maak een keus type 1 voor keus 1, type 2 voor keus 2")
document.write("je hebt ervoor gekozen voorbij het hutje te lopen [keus 1]<br>")
}
         else if(vraag4 == "2"){
	alert("je gaat naar binnen er zag er naar uit dat de jager op draakjes jaagt.")
	alert("dus je pakte wat spullen maar de jager kwam net thuis hij zag jou en het draakje.")
	alert("hij schiet jullie allebij neer.")
	alert("je bent dood")
    document.write("je hebt ervoor gekozen het huisje te plunderen [keus 2]<br>")
}


         if (vraag5 == "1"){
    alert("het draakje ademt in en blaas een klein schattig vlammetje uit de beer verslinderd jullie allebij.")
    alert("je bent dood")
    document.write("je hebt ervoor gekozen " +draakNaam+ " voor je te laten vechten [keus 1]<br>")
    document.write("wat dacht je het is een klein draakje tuurlijk is de vlam klein.<br>")
}
         else if (vraag5 == "2"){
    alert("de beer en jij vechten de beer bewonderd je dapperheid en laat jullie overnachten en zijn schatten meenemen.")
    alert("jij en " + draakNaam + " zijn hellemaal uitgeslapen.")
    alert("jullie kijken tussen de schatten en jullie nemen een zwaard, een draken helmpje en een hamer mee.")
    alert("jullie zijn helemaal geared up en gaan verder.")
    alert("jullie komen echter de jager tegen die blijkbaar in het hutje leefde")
    alert("hij heeft een kooi vol met baby draakjes in zijn pickup.")
    alert("je rend ernaartoe en vraagt om een lift naar de bewoonde wereld [keus 1] of je rend naar het huisje en wacht hem daar op [keus 2]")
    vraag6 = prompt("maak een keus type 1 voor keus 1, type 2 voor keus 2")
    document.write("je hebt ervoor gekozen zelf met de beer te vechten [keus 2]<br>")
}

         if (vraag6 == "1"){
	alert("je gaat naar de jager en zegt dat je waker bent geworden in het bos")
	alert("en vraagt of hij je terug kan brengen naar de bewoonde wereld")
	alert("de jager zegt dat hij je naar de bewoonde wereld breng voor het draakje")
	alert("wat doe je.   je doet het en stopt " + draakNaam + " in de kooi [keus 1]  of jej zegt nee en gaat een 1 op 1 gevecht aan met de jager voor de truck")
	vraag7 = prompt("maak een keus type 1 voor keus 1, type 2 voor keus 2")
    document.write(" je hebt besloten de jager om een lift te vragen [keus 1]<br>")


}
         else if (vraag6 == "2"){
    alert("je rent naar het huisje en wacht hem daar op")
    alert("de jager komt thuis je convronteerd hem over het draakjes vangen")
    alert("hij word boos. je staat klaar om te vechten maar opeens vliegt je draakje weg.")
    alert("je kan achter " + draakNaam + " aan gaan rennen [keus 1]  of je negeert het en vecht met de jager.")
    vraag8 =  prompt("maak een keus type 1 voor keus 1, type 2 voor keus 2")
    document.write("je hebt gekozen om naar het hutje te rennen [keus 2]<br>")
}


         if (vraag8 == "1"){
    alert("je rent achter " + draakNaam + " aan")
    alert("terwijl je achter hem aan rent schiet de jager je in de rug.")
    alert("je bent dood")
    document.write("je hebt besloten om achter " +draakNaam+ " aan te rennen [keus 1]<br>")
}
         else if (vraag8 == "2"){
    alert("de jager trekt meteen een wapen")
    alert("maar je weet hem uit zijn hand te slaan.")
    alert("dan spring je op hem hij slaat je op de grond")
    alert("hij pakt zijn wapen op en houd je onder schot")
    alert("je accepteerd je dood [keus 1] of je geeft je over en vraagt hem waarom hij de baby draakjes vangt [keus 2]")
    vraag9 = prompt("maak een keus type 1 voor keus 1, type 2 voor keus 2")
    document.write("je hebt besloten om te vechten en " +draakNaam+ " weg te laten vliegen [keus 2]<br>")
}


         if (vraag9 == "1"){
    alert("de jager noemt je een watje")
    alert("hij pakt je zwaard en steekt je neer met je eigen zwaard.")
    alert("je bent dood")
    document.write("je hebt ervoor gekozen om je dood te accepteren<br>")
}
         else if (vraag9 == "2"){
    alert("hij geeft je een heel saai antwoord over hoe de draaken vroeger zij ouders hebben vermoord.")
    alert("en dat hij wraak zoekt maar tijdens het luisteren zag " + playerName + " een gigantische draak aan vliegen.")
    alert("je verteld het tegen de jager zodat jullie samen kunnen rennen [keus 1] of  je duwd de jager van je af en schuild achter de pickup truck")
    vraag10 = prompt("maak een keus type 1 voor keus 1, type 2 voor keus 2")
    document.write("je hebt besloten je over te geven. [keus 2]<br>")
}


         if (vraag10 == "1"){
    alert("je hebt het tegen de jager verteld")
    alert("hij ziet de draak en begint erop te schieten de draak land en stoot perongeluk een boom om.")
    alert("de boom land op je hoofd.")
    alert("je bent dood")
    document.write("je hebt besloten het tegen de jager te zeggen. [keus 1]<br>")
}
         else if (vraag10 == "2"){
    alert("de draak kwam dichterbij maar de draak was niet alleen")
    alert("het was " + draakNaam + " hij had zijn vader gehaald.")
    alert(" de grote draak ademt in om te vuren")
    alert("wat doe je.   je kijkt aan hoe hij vuur spuugd [keus 1] of je stapt in de pickup en rijd een stukje verder met de kooi draakjes")
    vraag11 = prompt("maak een keus type 1 voor keus 1, type 2 voor keus 2")
    document.write("je hebt besloten de jager van je af te duwen en te verstoppen achter de truck [keus 2]<br>")
}
         if (vraag11 == "1"){
	alert("de draak spuugd vuur en de vlammen zijn zo groot dat jij en de kooi vol draakjes ook verbranden.")
	alert("je bent dood")
    document.write("je hebt ervoor gekozen dom te blijfen kijken [keus 1] ps: wat dacht je wel niet het is vuur.<br>")
}
         else if (vraag11 == "2"){
    alert("de grote draak spuugd vuur de jager en het hutje zijn helemaal verbrand")
    alert("je kijkt naar de kooi en grijpt in je tas en slaat het slot kapot met de hamer.")
    alert("je brengt ze naar de grote draak.")
    alert("de grote draak kijkt je aan en zegt")
    alert("dankjewel " + playerName + " voor het reden van de draakjes")
    alert("de  grote draak en de kleine draakjes vliegen er vandoor " + draakNaam + " twijfelt")
    alert("wat doe je. vertel je " + draakNaam + " dat hij met zijn vader mee moet [keus 1] of je zegt dat hij met je mee mag komen [keus 2]")
    vraag12 = prompt("maak een keus type 1 voor keus 1, type 2 voor keus 2")
    document.write("je hebt ervoor gekozen de truck te verplaatsen [keus 2]<br>")
}


         if (vraag12 == "1"){
    alert( draakNaam + " vliegt met zijn vader mee.")
    alert("maar jij word 2 minuten later aangevallen door een wilde vos")
    alert("je bent dood")
    document.write("je hebt ervoor gekozen  om " +draakNaam+ " met zijn family te laten blijven<br>")
}
         else if (vraag12 == "2"){
    alert( draakNaam + " gaat mee en help je om veilig naar de bewoonde wereld te gaan.")
    alert("jullie kwamen bij de bewoonde wereld en besloten een toch een huisje bij het bos te maken om de draken te beschermen")
    alert(playerName + " hield contact met de bewoonde wereld terwijl " + draakNaam + " met de andere draken kon spelen")
    alert("jullie leefen nog lang en gelukkig")
    alert("gemaakt door: Anthony Inocencio Ramos")
    alert("van het davinci college in dordrecht")
    alert("opdracht: the Game")
    alert("toedols")
    document.write("je hebt ervoor gekozen " +draakNaam+ " mee te laten gaan [keus 2]<br>")
    document.write("je hebt het spel uitgespeeld<br>")
}


          if (vraag7 == "1"){
    alert("het draakje komt perongeluk vrij terwijl je hem in de kooi stopt")
    alert(draakNaam +"dood je omdat je hem veraden hebt")
    alert("je bent dood.")
    document.write("je hebt ervoor gekozen om " +draakNaam+ " te veraden [keus 1]<br>")
}
         else if (vraag7 == "2"){
    alert("de jager gaat het duel aan jullie vechten hevig.")
    alert(" tot de jager een pistool te voor schijn haalt.")
    alert("jij wilt je zwaard pakken maar je bent te laat de jager schiet je dood.")
    alert("hij pakt " + draakNaam + " en gooit hem in de kooi")
    alert("je bent dood")
    document.write("je hebt ervoor gekozen om te vechten voor de truck [keus 2]<br>")
}


          if (vraag2 == "1"){
    alert("je rent achter hem aan je hebt hem bijna maar valt dan in een ravijn.")
    alert("je bent dood")
    document.write("je hebt ervoor gekozen het draakje te volgen [keus 1]<br>")
}
         else if (vraag2 == "2"){
    alert("je hebt wat takken voor een kampvuur gevonden en wat vlees van een dood (mischien wel besmet) konijn")
    alert("wat doe je.  je maakt een kampvuur en kookt het konijn. [keus 1]  of je gaat vroeg slapen om morgen iets te vangen wat zeker gezond is. [keus 2] ")
vraag3 = prompt("maak een keus type 1 voor keus 1, type 2 voor keus 2")
document.write("je hebt ervoor gekozen om eten spullen te zoeken [keus 2]<br>")
}


         if (vraag3 == "1"){
	alert("je maakt een kampvuur en kookt het konijn")
	alert("het konijn was echter besmet je bent ziek geworden.")
	alert("je bent dood")
    document.write("je hebt ervoor gekozen het konijn te koken [keus 1]<br>")
}

         else if (vraag3 == "2"){
	alert("je gaat vroeg slapen om morgen zelf wat te vangen")
	alert("een beer rook het konijnen vlees en at het hij was nog niet tevreden en at jou ook op.")
	alert("je bent dood")
    document.write("je hebt er voor gekozen om vroeg te slapen [keus 2]<br>")
}