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
function vh(){
    let s=document.getElementById('s');
    let sl=s.value;
    document.getElementById('rec').innerText = `${sl}.`;
}
function veri(){
    var re=document.getElementById("num").value
    if(re<=-1){
        document.getElementById("w").innerHTML="El numero " + re + " es negativo";
    }else{
        document.getElementById("w").innerHTML="El numero "+ re + " es positivo";
    }
}
function verifi(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    if(n1>n2 && n1>n3){
        document.getElementById("e").innerHTML="El numero mayor es: " + n1;
    }
    if(n2>n1 && n2>n3){
        document.getElementById("e").innerHTML="El numero mayor es: " + n2;
    }
    if(n3>n1 && n3>n2){
        document.getElementById("e").innerHTML="El numero mayor es: " + n3;
    }
}
window.addEventListener("DOMContentLoaded",function(){
    document.getElementById('y').addEventListener('click',function(){
    var op = document.getElementById('op').value,
    nl1 = parseInt((document.getElementById('nl1')).value);
    nl2 = parseInt((document.getElementById('nl2')).value);
    if(op==1){
        operacion=nl1*nl2;
        document.getElementById('ad').innerHTML = operacion;
    } if(op==2){
        operacion=nl1-nl2;
        document.getElementById('ad').innerHTML = operacion;
    } if(op==3){
        operacion=nl1/nl2;
        document.getElementById('ad').innerHTML = operacion;
    } if (op==4){
        operacion=nl1+nl2;
        document.getElementById('ad').innerHTML = operacion; 
    }
    }); 
  });