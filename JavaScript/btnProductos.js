
//array donde se van almacenar los objetos del storage

let arrayProductos = [];

const agregarALocalStorage = (producto) => {
    // Obtenemos los productos del localStorage

    const stock = localStorage.getItem("productos");

    stock !== null && (arrayProductos = JSON.parse(stock));

    // Agregamos el nuevo producto al localStorage

    arrayProductos.push(producto);

    // Setear el localStorage

    localStorage.setItem("productos", JSON.stringify(arrayProductos));
}


//CREAMOS UNA FUNCION QUE VA CALCULAR EL TOTAL DEPENDIENDO LOS OBJ QUE HAY EN EL STORAGE

let total="";


const sumarTotal = () => {
    for (const costo of arrayProductos){
        total=parseInt(total+costo.precio);
    }
    let p = document.getElementById("total");
    
    p.innerText=`El total de su compra es de $ ${total}`;

    btnTotal.setAttribute("disabled","false");//desactivar boton de total
}

//FUNCION PARA VACIAR CARRITO Y PONER EN 0 EL TOTAL
const clearBuy = () => {
    total=0;
    arrayProductos=[];
    btnTotal.removeAttribute("disabled");//activar boton de total
    localStorage.clear();
    let pb = document.getElementById("total");
    pb.innerText="";

    let table=document.getElementById("productoSeleccionados");
    while(table.lastChild){
        table.removeChild(table.lastChild);
    }
}

//FUNCION CAMBIAR COLOR DEL BOTON DEL CARRITO SI SE LE AGREGA ELEMENTOS.
let btnBuy = document.getElementById("btnBuy");
const changeColor = () =>{
    btnBuy.className = "btnBuy btn btn-danger";
    btnBuy.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16"> <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/></svg>'

}


//BOTON CALCULAR TOTAL

let btnTotal = document.getElementById("btnTotal");
btnTotal.addEventListener("click", (e) => {
    sumarTotal();
    btnFinalizar.removeAttribute("disabled");//activar boton de total
})

//BOTON FINALIZAR COMPRA

let btnFinalizar = document.getElementById("btnFinalizar");
btnFinalizar.setAttribute("disabled","false");//el Boton finalizar esta desactivado hasta que se calcule el total
btnFinalizar.addEventListener("click", (e) => {
    AlertEndBuy();
    clearBuy();
    btnBuy.className="btnBuy btn btn-success";
    btnBuy.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>'
    btnFinalizar.setAttribute("disabled","false");

    
})

//BOTON BORRAR TOTAL. PERMITE AGREGAR NUEVOS PRODUCTOS Y CALCULAR DE NUEVO EL TOTAL

let btnborrar = document.getElementById("btnborrar");
btnborrar.addEventListener("click", (e) => {
    clearBuy();
    alertClearBuy()
    btnFinalizar.setAttribute("disabled","false");//el Boton finalizar esta desactivado hasta que se calcule el total
    btnBuy.className="btnBuy btn btn-success";
    btnBuy.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>'
}) 

//BOTONES DE PRODUCTOS

const table = document.getElementById("productoSeleccionados");

//funcion que agrega al localstorage y añade el elemento al carrito
const btnProduct = (producto) => {
    agregarALocalStorage(producto);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto.categoria}</td> <td>${producto.tipo}</td> <td>$${producto.precio}*</td>`;
    // agregando columnas a tabla
    table.append(td);
    return producto;
}

let btn1 = document.getElementById("btn1");
btn1.addEventListener('click', (e) => {
    btnProduct(stock[0]);
    AlertAddBuy();
    changeColor();
})

let btn2 = document.getElementById("btn2");
btn2.addEventListener('click', (e) => {
    btnProduct(stock[1]);
    AlertAddBuy();
    changeColor();
})

let btn3 = document.getElementById("btn3");
btn3.addEventListener('click', (e) => {
    btnProduct(stock[2]);
    AlertAddBuy();
    changeColor();
})

let btn4 = document.getElementById("btn4");
btn4.addEventListener('click', (e) => {
    btnProduct(stock[3]);
    AlertAddBuy();
    changeColor();
})

let btn5 = document.getElementById("btn5");
btn5.addEventListener('click', (e) => {
    btnProduct(stock[4]);
    AlertAddBuy();
    changeColor();
})

let btn6 = document.getElementById("btn6");
btn6.addEventListener('click', (e) => {
    btnProduct(stock[5]);
    AlertAddBuy();
    changeColor();
})

let btn7 = document.getElementById("btn7");
btn7.addEventListener('click', (e) => {
    btnProduct(stock[6]);
    AlertAddBuy();
    changeColor();
})

let btn8 = document.getElementById("btn8");
btn8.addEventListener('click', (e) => {
    btnProduct(stock[7]);
    AlertAddBuy();
    changeColor();
})

let btn9 = document.getElementById("btn9");
btn9.addEventListener('click', (e) => {
    btnProduct(stock[8]);
    AlertAddBuy();
    changeColor();
})

let btn10 = document.getElementById("btn10");
btn10.addEventListener('click', (e) => {
    btnProduct(stock[9]);
    AlertAddBuy();
    changeColor();
})

let btn11 = document.getElementById("btn11");
btn11.addEventListener('click', (e) => {
    btnProduct(stock[10]);
    AlertAddBuy();
    changeColor();
})

let btn12 = document.getElementById("btn12");
btn12.addEventListener('click', (e) => {
    btnProduct(stock[11]);
    AlertAddBuy();
    changeColor();
})

let btn13 = document.getElementById("btn13");
btn13.addEventListener('click', (e) => {
    btnProduct(stock[12]);
    AlertAddBuy();
    changeColor();
})

let btn14 = document.getElementById("btn14");
btn14.addEventListener('click', (e) => {
    btnProduct(stock[13]);
    AlertAddBuy();
    changeColor();
})

let btn15 = document.getElementById("btn15");
btn15.addEventListener('click', (e) => {
    btnProduct(stock[14]);
    AlertAddBuy();
    changeColor();
})

//CARGAMOS EL CARRITO DE NUEVO SI SE RECARGA LA PAGINA

let addAgain = ( function () {
    if(arrayProductos = []){
        const stock = localStorage.getItem("productos");
    
        stock !== null && (arrayProductos = JSON.parse(stock));
        
        // Crear columnas
        for(producto of arrayProductos) {
            const td = document.createElement("tr");
            td.innerHTML = `<td>${producto.categoria}</td> <td>${producto.tipo}</td> <td>$${producto.precio}*</td>`;
            // agregando columnas a tabla
            table.append(td); 
        };
    }
    if(arrayProductos.length != 0){
        changeColor();
    }
})();



