





const color = document.querySelector('#color');
const cantidad = document.querySelector('#cantidad');
const calcular = document.querySelector('.boton');
const precio = 250000
console.log('cantidad: ', cantidad)
console.log('color: ', color)

calcular.addEventListener('click',funcionCalcular);

function funcionCalcular(){
    /*alert('entrando a la funcion')*/
    
    let valorTotal
    valorTotal = cantidad.value * precio
    console.log('valortotal: ', valorTotal)
    console.log('cantidad: ', cantidad.value)
    console.log('color: ', color.value)
    
    

    let cantidadr = document.querySelector('#cantidadr');
    cantidadr.innerHTML = cantidad.value
   
    let totalr = document.querySelector('#totalr');
    totalr.innerHTML = valorTotal
   
    let colorr = document.querySelector('#colorr');
    colorr.innerHTML = color.value
    
}






















