let pedra = document.getElementById('pedraPlay')
let papel = document.getElementById('papelPlay')
let tesoura = document.getElementById('tesouraPlay')

let pedraADV = document.getElementById('pedraAdv')
let papelADV = document.getElementById('papelAdv')
let tesouraADV = document.getElementById('tesouraAdv')

let adversario = Math.floor(Math.random()*3)
let contadorPlay = 0
let contadorAdv = 0


//papel =0
//pedra =1
//tesoura =2

function joguePapel(){
    if(adversario == 0 ){
        
        document.getElementById('papelPlay').style.backgroundColor='red'
        document.getElementById('papelAdv').style.backgroundColor= 'blue'
    }else if(adversario ==1){
        document.getElementById('papelPlay').style.backgroundColor='red'
        document.getElementById('pedraAdv').style.backgroundColor ='blue'
        contadorPlay++
        document.getElementById('p1').innerHTML = contadorPlay
    }else if(adversario ==2){
        document.getElementById('papelPlay').style.backgroundColor='red'
        document.getElementById('tesouraAdv').style.backgroundColor='blue'
        contadorAdv++
        document.getElementById('p2').innerHTML = contadorAdv
    }
   document.getElementById('pedraPlay').disabled = true;
   document.getElementById('tesouraPlay').disabled = true;

}
function joguePedra(){
    if(adversario == 0 ){
        
        document.getElementById('pedraPlay').style.backgroundColor='red'
        document.getElementById('papelAdv').style.backgroundColor= 'blue'
        contadorAdv++
        document.getElementById('p2').innerHTML=contadorAdv
    }else if(adversario ==1){
        document.getElementById('pedraPlay').style.backgroundColor='red'
        document.getElementById('pedraAdv').style.backgroundColor ='blue'
        
    }else if(adversario ==2){
        document.getElementById('pedraPlay').style.backgroundColor='red'
        document.getElementById('tesouraAdv').style.backgroundColor='blue'
        contadorPlay++
        document.getElementById('p1').innerHTML=contadorPlay
    }
    document.getElementById('papelPlay').disabled = true;
    document.getElementById('tesouraPlay').disabled = true;
}
function jogueTesoura(){
    if(adversario == 0 ){
        
        document.getElementById('tesouraPlay').style.backgroundColor='red'
        document.getElementById('papelAdv').style.backgroundColor= 'blue'
        contadorPlay++
        document.getElementById('p1').innerHTML=contadorPlay

    }else if(adversario ==1){
        document.getElementById('tesouraPlay').style.backgroundColor='red'
        document.getElementById('pedraAdv').style.backgroundColor ='blue'
        contadorAdv++
        document.getElementById('p2').innerHTML=contadorAdv
        
    }else if(adversario ==2){
        document.getElementById('tesouraPlay').style.backgroundColor='red'
        document.getElementById('tesouraAdv').style.backgroundColor='blue'
    }
    document.getElementById('pedraPlay').disabled = true;
    document.getElementById('papelPlay').disabled = true;
}

function resetar(){
    document.getElementById('tesouraPlay').removeAttribute('style')
    document.getElementById('pedraPlay').removeAttribute('style')
    document.getElementById('papelPlay').removeAttribute('style')
    document.getElementById('papelAdv').removeAttribute('style')
    document.getElementById('tesouraAdv').removeAttribute('style')
    document.getElementById('pedraAdv').removeAttribute('style')

    document.getElementById('pedraPlay').disabled = false;
    document.getElementById('papelPlay').disabled = false;
    document.getElementById('tesouraPlay').disabled = false;

     adversario = Math.floor(Math.random()*3)
}

console.log(adversario)