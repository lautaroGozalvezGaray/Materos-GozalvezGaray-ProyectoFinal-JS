class Productos{
    constructor(categoria, precio, tipo){
        this.categoria=categoria;
        this.precio=parseFloat(precio);
        this.tipo=tipo;
    }
    sumarIva(){
        this.precio*=1.21;
    }
}

let stock=[];

fetch("/objetArray.json")
    .then((response) => {
        return response.json();
    }).then((objet) => {
        objet.forEach(element => {
            stock.push(new Productos(element.categoria, element.precio, element.tipo));
        });
        //se le suma iva a cada producto
        for (const producto of stock){
            producto.sumarIva();
        }
})




