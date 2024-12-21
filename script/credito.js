function realizarPago() {
    const monto = parseInt(document.getElementById('monto').value);
    const metodoPago = document.getElementById('metodoPago').value;
    const saldoActual = 100000;
// Saldo inicial ficticio
    const motivo=document.getElementById('text').value
    const email=document.getElementById('email').value
    // Validación básica
if(email!=''){
    if (motivo !=""){
      
        if (monto <= 0) {
            alert('El monto debe ser mayor a cero.');
            return;
          }
          else
          {
            if(monto>=19000000){
                alert('el monto sobre pasa la cantidad maxima de los prestamos')
                return;
            }
            else{
                alert('El banco está revisando tu petición por favor espere un momento');
                let contador = 0; // Inicializamos el contador
                let numeroDeEjecuciones = 0; // Para contar cuántas veces se ha ejecutado la función generarNumeroAleatorio
                
                // Función que se llama cada vez que se ejecuta el setInterval
                function generarNumeroAleatorio() {
                    const numeroAleatorio = Math.floor(Math.random() * 10); // Genera un número entre 0 y 9
                
                    // Verificamos una condición (por ejemplo, si el número es mayor a 5)
                    if (numeroAleatorio > 5) {
                        contador++; // Aumentamos el contador si la condición se cumple
                      
                    } else {
                      
                    }
                    
                    numeroDeEjecuciones++; // Incrementamos el contador de ejecuciones
                    if (numeroDeEjecuciones >= 5) {  // Por ejemplo, queremos que se ejecute 5 veces
                        clearInterval(intervalo); // Detenemos el setInterval
                        
                        // Ejecutamos la función solo una vez después de que el contador haya terminado
                        generarNumeroAleatorioFinal();
                    }
                }
                
                // Llamamos a la función varias veces (puedes usar un temporizador de 5 segundos)
                let intervalo = setInterval(generarNumeroAleatorio, 1000);
                
                // Esta función se ejecutará solo una vez después de que termine el contador
                function generarNumeroAleatorioFinal() {
                    const numeroAleatorioFinal = Math.floor(Math.random() * 10); // Genera un número en

                    if(numeroAleatorioFinal>5){
                        
                     alert('El banco a aceptado su prestamo')
                            const saldonuevo = saldoActual + monto;
                             document.getElementById('saldo').textContent = saldonuevo; 
                             if (metodoPago === 'tarjeta') {
                                alert('Tu transaccion va a ser realizada a tu tarjeta de credito.');
                              } else {
                                alert('Tu transaccion va a ser realizada a tu tarjeta de debito.');
                              }
                    }
                        else{
                            alert('Lo siento mucho, pero el banco a denegado su prestamo. si desea saber mas contactenos en nuestro servicio al cliente ')
                        }
                  
                }
            }}


    }
    else{
        alert('no ha rellanado el campo del motivo de su prestamo')
        alert('por favor ingrese uno')
        return;
    }
}
else
{
alert('por favor ingrese su correo de cuenta ')
return;
}
   



   // if (saldoActual>monto) {
   //     alert('transaccion realizado')
   //     const nuevoSaldo = saldoActual + monto;
   //     document.getElementById('saldo').textContent = nuevoSaldo; 
   // } else {
   //     alert('El monto debe ser menor que el saldo actual')
   // }
    // Actualizar saldo (simulado)

  }