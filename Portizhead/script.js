

//generate the random number

//console.log(document.querySelector('.number')); todo esto es el numero dentro de la caja blanca
let range = []
for(let i = 1; i <= 20; i++){ //aqui ya tenemos el rango
    range.push(i);
};

//ahora sacamos el numero aleatorio para la caja blanca

let random = Math.round(Math.random() * range.length); //auqi ya tenemos el random

document.querySelector('.number').textContent = random; //el random number esta dentro de la cajita con esto

//ahora vamos a hacer que la comparacion entre el guessing number y el random ocurra cuando demos click en el boton check!

let score = document.querySelector('.score').textContent;

let highScore = parseInt(document.querySelector('.highscore').textContent);


document.querySelector('.btn.check').addEventListener('click', function () {//primero seleccionamos el elemento boton o sea la clase btn check, y luego necesitamos la sintaxis del add event listener para que se cree el evento, y la clase del evento seria click para que al hacer click en ese boton se ejecute lo que este dentro de la funcion call back, 
    let guessingNumber = document.querySelector('.guess').value;//con esto metemos el numero que el usuario typee en la pagina, como es un input el html tag guarda el value y se lo asignamos a esta variable

    if(!guessingNumber){
        
        document.querySelector('.message').textContent = 'theres no number type something!';
        score--;
        document.querySelector('.score').textContent = score;
        
    }else if(guessingNumber < document.querySelector('.number').textContent){
        
        document.querySelector('.message').textContent = 'its too low';
        score--;
        document.querySelector('.score').textContent = score;
    }else if(guessingNumber > document.querySelector('.number').textContent){
        
        document.querySelector('.message').textContent = 'its too high';
        score--;
        document.querySelector('.score').textContent = score;
    }else if(guessingNumber == document.querySelector('.number').textContent){
    
        document.querySelector('.message').textContent = 'They are equal'; 

        if(score > document.querySelector('.highscore').textContent) {
            document.querySelector('.highscore').textContent = score;
        }
    }

    document.querySelector('.btn.again').addEventListener('click', () => {
        document.querySelector('.score').textContent = 20;
        score = 20;
        document.querySelector('.number').textContent = Math.round(Math.random() * range.length);
       
    })

});

