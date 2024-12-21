function realizarPago() {
    const monto = document.getElementById('monto').value;
    const metodoPago = document.getElementById('metodoPago').value;
    const saldoActual = 100000// Saldo inicial ficticio
    const email=document.getElementById('email').value
    // Validación básica

    if (email !=""){
      
        alert('el destinatario es '+ email)
    }
    else{
        alert('no tiene un destinatario')
        alert('por favor ingrese uno')
        return;
    }


    if (monto <= 0) {
      alert('El monto debe ser mayor a cero.');
      return;
    }

    // Simulación de procesamiento del pago
    if (metodoPago === 'tarjeta') {
      // Aquí podrías agregar validaciones más exhaustivas para los datos de la tarjeta
      alert('Tu transaccion va a ser realizado desde tu tarjeta de credito.');
    } else {
      alert('Tu transaccion va a ser realizado desde tu tarjeta de debito.');
    }

    if (saldoActual>monto) {
        alert('transaccion realizado')
        const nuevoSaldo = saldoActual - monto;
        document.getElementById('saldo').textContent = nuevoSaldo; 
    } else {
        alert('El monto debe ser menor que el saldo actual')
    }
    // Actualizar saldo (simulado)

  }