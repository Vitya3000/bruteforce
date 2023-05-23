//bruteforce v1.0----------------------
//uns ist klar dass das Programm kein echtes bruteforce ist aber durch die leistung des calliopes wird der Wert näher an das Ergebniss eines Modernen Chips gebracht

//Passwort in Morsecode
let msg="";
//passwort in latin
let pass="";

//versuch
let guess="";





//zeit
let time=0;
let stop=false;
let t1,t2;


basic.forever(function() { 
  //zeigt angabe
                     if(!stop)
                    basic.showString(pass);
   

    

   

   
        
    
                    //startet das bruteforce
                      input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {

                         stop=false;
                            t1 = control.millis();
     
                          for (let i = 0; i < pass.length; i++) {

                                for (let a = 0; a < 26; a++) {
                                  if(pass[i]==alphabet[a]){
                                     guess+=alphabet[a];
                                  }
                             }

         
                          }
        
        
                          //differenz zwischen zeit vor und nach operation
                         basic.showString(control.millis() - t1 + "ms");

       
       
        

         


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