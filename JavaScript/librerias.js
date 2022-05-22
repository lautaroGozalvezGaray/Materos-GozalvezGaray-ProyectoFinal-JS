
function AlertEndBuy(){
    Swal.fire({
        title: 'Gracias por su compra!',
        text: ' El total de sumpra es de: $' + total +'.'+ ' Presione confirmar para realizar el pago.',
        icon: 'success',
        confirmButtonText: 'Confirmar'
    })
    
}

function alertClearBuy(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
      
    Toast.fire({
        icon: 'warning',
        title: 'Se vació carrito de compra'
    })
}

function AlertAddBuy(){
    Toastify({
        text: "Se agregó el producto al carrito",
        duration: 3000,
        offset: {
            x: 0,
            y: 120
        }, 
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
}