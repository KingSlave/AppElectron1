var x,n=2;

function mensaje(){
  var texto  = document.getElementById('tiempo');
  texto.innerHTML=n;
  x=setInterval(showMensaje,1000);
setTimeout(showMensaje1,3000);
}

function showMensaje(){
  if(n>0){
    var texto  = document.getElementById('tiempo');
    n--;
    texto.innerHTML=n;
  }else
  clearInterval(x);
}

function showMensaje1(){
  alert('Mensaje de una sola vez');
}
