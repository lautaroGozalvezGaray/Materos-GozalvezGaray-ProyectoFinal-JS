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
mate = document.getElementsByClassName("mates");
termo = document.getElementsByClassName("termos");
mochila = document.getElementsByClassName("mochilas");

radio0.addEventListener( 'change', function() {
    if(this.checked) {
        for(let i=0; i<=4; i++){
            termo[i].style.display="";
            mate[i].style.display="";
            mochila[i].style.display="";
        }
    }});

radio1.addEventListener( 'change', function() {
if(this.checked) {
    for(let i=0; i<=4; i++){
        mate[i].style.display="";
        mochila[i].style.display="none";
        termo[i].style.display="none";
    }
}});

radio2.addEventListener('change', function(){

    if(this.checked){
        for(let i=0; i<=4;i++){
            mate[i].style.display="none";
            mochila[i].style.display="none";
            termo[i].style.display="";
        }
    }

});
radio3.addEventListener('change', function(){
    if(this.checked){
        for(let i=0; i<=4; i++){
            termo[i].style.display="none";
            mate[i].style.display="none";
            mochila[i].style.display="";
        }
    }
    

});