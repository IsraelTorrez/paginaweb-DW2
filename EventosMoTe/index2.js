document.addEventListener('DOMContentLoaded', function() {
var btn=document.getElementById('btn'),
    caja=document.getElementById('caja'),
    contador=0;
    btn.addEventListener('click', cambio);
    function cambio()
    {
        if(contador ==0){
            caja.classList.add('azul');
        }
        else{
            caja.classList.remove('azul');
            contador=0;
        }
    }

});