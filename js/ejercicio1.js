

function promedio(){
  var cajas = document.getElementsByClassName('caja');
  var suma=0;
  for(var i=0;i<cajas.length;i++){
    suma = suma + parseFloat(cajas[i].value);
  }
  var promedio = suma / cajas.length;
  alert('El promedio es: '  + promedio.toFixed(2));
}

function agregarCaja(){
  var con = document.getElementById('contenedor');
  var cajas = document.getElementsByClassName('caja');
  con.innerHTML = con.innerHTML +
  '<div id="c'+(cajas.length+1)+'">'+
    '<label for="num2">Escribe un numero: </label>'+
    '<input type="number" class="caja">'+
  '</div>';
}

function quitarCaja(){
  var cajas = document.getElementsByClassName('caja');
  document.getElementById('c'+cajas.length).remove();
}
