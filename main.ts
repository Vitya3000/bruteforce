//bruteforce v1.0----------------------

//Passwort in Morsecode
let msg="";
//passwort in latin
let pass="";

//versuch
let guess="";
//zufallszahl

let ran=0;

//zeit
let time=0;
let stop=false;

basic.forever(function() { 
   
   ran = randint(0,25);
   



   

   
        
    
//startet das bruteforce
    input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {

        
        loops.everyInterval(100, function() {
            if(!stop)
            time+=100;
        })
        
        for (let i = 0; i < pass.length; i++) {

            for (let a = 0; a < 26; a++) {
                if(pass[i]==alphabet[a]){
                    guess+=alphabet[a];
                }
            }


        }
        
        

         


    })
    
})








//Passwort eingabe

    input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
        msg += '.';
    })
    input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
        msg += '-';
    })
    input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function() {
        
    })
    input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {


        for (let i = 0; i < 26; i++) {
            if (msg == morsecode[i]) {
                pass += alphabet[i];
            }
        }
        msg="";
    })
    

//2D morsearray
let morsecode = [
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..'
];
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];