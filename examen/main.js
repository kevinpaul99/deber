function hora(){
    var a = document.getElementById("q").value;
    if(a<=3 && a>=1 ){
        document.getElementById("re").innerHTML="Futbol";
    }
    if(a>3 && a<=6){
        document.getElementById("re").innerHTML="Futbol Americano"
    }
    if(a>6 && a<=9){
        document.getElementById("re").innerHTML="Atletismo"
    }
}