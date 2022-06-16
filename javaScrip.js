var currentNumberWrapper = document.getElementById('currentNumber');

currentNumber = 0;

var btnAdicionar = document.getElementsByTagName('button')[1];
var btnSubtrair = document.getElementsByTagName('button')[0];

btnAdicionar.addEventListener('click',function(){
    
    if(currentNumber >= 10){
        alert('Este Contador vai ate o numero 10, Para adquirir mais numeros compre nosso plano plus 😄');
        btnAdicionar.disabled = true;
        btnAdicionar.style.backgroundColor = 'red'
    }else{
        currentNumber++;
        currentNumberWrapper.innerText = currentNumber;
        
        btnSubtrair.disabled = false;
        btnSubtrair.style.backgroundColor = '#06bcfb'
    }
})
btnSubtrair.addEventListener('click',function(){
    if(currentNumber <= 0){
        alert('Incremente o Numero Primeiro');
        btnSubtrair.disabled = true;
        btnSubtrair.style.backgroundColor = 'red'
    }else{
        currentNumber--;
        currentNumberWrapper.innerText = currentNumber;
        btnAdicionar.disabled = false;
        btnAdicionar.style.backgroundColor = '#06bcfb'
    }
})

