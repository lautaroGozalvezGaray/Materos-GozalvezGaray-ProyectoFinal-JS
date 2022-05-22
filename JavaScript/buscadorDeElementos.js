//BUSCADOR DE ELEMENTOS

const cards = document.querySelectorAll('.cardd')
console.log(cards)

document.addEventListener('keyup', (e) => {
    if(e.target.matches('.filter')){
        document.querySelectorAll('.cardd').forEach(cardd => {
            if(cardd.textContent.toLocaleLowerCase().includes(e.target.value)){
                cardd.style.display='';
            }else{
                cardd.style.display='none';

            }

        })
        
        
    }
})




//input radio - se seleccionan los elementos a mostrar

let radio0 = document.querySelector(".all");
let radio1 = document.querySelector(".mate");
let radio2 = document.querySelector(".termo");
let radio3 = document.querySelector(".mochila");
mate = document.getElementById("mates");
termo = document.getElementById("termos");
mochila = document.getElementById("mochilas");

radio0.addEventListener( 'change', function() {
    if(this.checked) {
        mate.style.display='';
        termo.style.display='';
        mochila.style.display=''; 
    }});

radio1.addEventListener( 'change', function() {
if(this.checked) {
    mate.style.display='';
    termo.style.display='none';
    mochila.style.display='none'; 
}});

radio2.addEventListener('change', function(){

    if(this.checked){
        termo.style.display='';
        mate.style.display='none';
        mochila.style.display='none'
    }

});

radio3.addEventListener('change', function(){

    if(this.checked){
        termo.style.display='none';
        mate.style.display='none';
        mochila.style.display=''
    }

});