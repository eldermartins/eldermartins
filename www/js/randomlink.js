function randomlink(){
    var myrandom=Math.round(Math.random()*14)
    var links=new Array()
    links[0]="01.html"
    links[1]="02.html"
    links[2]="03.html"
    links[3]="04.html"
    links[4]="05.html"
    links[5]="06.html"
    links[6]="07.html"
    links[7]="08.html"
    links[8]="09.html"
    links[9]="10.html"
    links[10]="11.html"
    links[11]="12.html"
    links[12]="13.html"
    links[13]="14.html"
    links[14]="15.html"

    window.location=links[myrandom]
}
