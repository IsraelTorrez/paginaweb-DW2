

document.addEventListener("DOMContentLoaded", function() {
   
    var cantidadNumeros = 12;

   
    var listaNumeros = document.getElementById("listaNumeros");
   let x=1
    while (x<=12) {
    
        var nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = "Número " + x;
        listaNumeros.appendChild(nuevoElemento);
        x++
    }
    
   // for (var i = 1; i <= cantidadNumeros; i++) {
       
    //    var nuevoElemento = document.createElement("li");

        
     //   nuevoElemento.textContent = "Número " + i;

       
      //  listaNumeros.appendChild(nuevoElemento);
   // }
});





