
let bus = document.getElementById("bus");
let bus2 = document.getElementById("bus2")
let car1 = document.getElementById("car1");
let car2 = document.getElementById("car2");
let bus3 = document.getElementById("bus3");
let timeout = 10;

function start(){
    setTimeout(car1Routine, 0);
    setTimeout(car2Routine, 0);
    setTimeout(busRoutine, 0);
    setTimeout(bus2Routine,1500);
    setTimeout(bus3Routine,5000);

}

function car2Routine(){
    car2.style.left = "215px";
    car2.style.top = "440px";
    car2.style.transform = "rotate(-90deg)";

    setTimeout(car2DriveUp,0);
    setTimeout(car2TurnRight,4000);
    setTimeout(car2LoadAndDropOff, 7070);
    setTimeout(car2DriveAgain, 10000);
    setTimeout(car2TurnOffStreet, 15000);

}

function car2TurnOffStreet(){
    let deg = 0;
    let deg2 = 15;
    let left = 700;
    let top = 223; // get to 245
    let s;
    let slow= 0;

    let id = setInterval(frame, timeout + 5);
    function frame(){
        if(left <= 790){
            left++;
            car2.style.left = left + "px";

            if(deg <= 90){

                    deg++;
                    s = "rotate(" + deg + "deg)";
                    car2.style.transform = s;

            }

            slow++;
            if(slow % 4 === 0) {
                top++;
                car2.style.top = top + "px";
            }

        }else{

            if(top <= 450){
                top++;
                car2.style.top = top + "px";
                if(deg <= 90){
                    deg++;
                    s = "rotate(" + deg + "deg)";
                    car2.style.transform = s;
                }
            }
            else {
                clearInterval(id);
                }
        }
    }

}

function car2DriveAgain(){
    let deg = 0;
    let deg2 = -15;
    let left = 475;
    let top = 245; // need to get to 225
    let s;
    let w;

    let id = setInterval(frame, timeout + 10);
    function frame(){
        if(deg > -15){
            deg--;
            s = "rotate(" + deg + "deg)";
            car2.style.transform = s;

            if( top > 223){
                top--;
                car2.style.top = top + 'px';
            }
            if(left < 600){
                left++;
                car2.style.left = left + 'px';
            }

        }else{
            if(deg2 < 0 ){
                deg2++;
                w = "rotate(" + deg2 + "deg)";
                car2.style.transform = w;

                if( top > 223){
                    top--;
                    car2.style.top = top + 'px';
                }
                if(left < 600){
                    left++;
                    car2.style.left = left + 'px';
                }


            }else {
                if(left < 700){
                    left++;
                    car2.style.left = left + 'px';
                }else {
                    clearInterval(id);
                }
            }
        }
    }

}

function car2LoadAndDropOff(){
    let deg = 0;
    let deg2 = 15;
    let left = 450;
    let top = 223;
    let s;
    let w;

    let id = setInterval(frame, timeout + 10);
    function frame(){
        if(deg <= 15) {
            deg++;
            s = "rotate(" + deg.toString() + "deg)";
            car2.style.transform = s;

            if (top < 245) {
                top++;
                car2.style.top = top + 'px';
            }
            if(left <= 475) {
                left++;
                car2.style.left = left + 'px';
            }

        } else{

            if(deg2 >= 0){
                deg2--;
                w = "rotate(" + deg2.toString() + "deg)";
                car2.style.transform = w;

                if (top < 245) {
                    top++;
                    car2.style.top = top + 'px';
                }

                if(left <= 475) {
                    left++;
                    car2.style.left = left + 'px';
                }

            }else {
                if(left <= 475){
                    left++;
                    car2.style.left = left + 'px';
                }else {
                    clearInterval(id);
                }
            }
        }

    }


}

function car2TurnRight(){
    let top = 310;
    let left = 215;
    let deg = -90; // need to get to 0
    let s;
    let slow = 0
    let id = setInterval(frame, timeout);
    function frame(){
        if(top > 223){
            top--;
            car2.style.top = top + 'px';

            if(deg <= 0 && top <= 270){
                deg++;
                s = "rotate(" + deg.toString() + "deg)";
                car2.style.transform = s;
            }

            slow++;
            if(slow % 8 === 0){
                left++;
                car2.style.left = left + 'px';
            }

        }else{


            if(left < 450){
                left++;
                car2.style.left = left + 'px';

                if(deg <= 0){
                    deg++;
                    s = "rotate(" + deg.toString() + "deg)";
                    car2.style.transform = s;
                }
            }
            else{clearInterval(id);}
        }
    }
}

function car2DriveUp(){
    let top = 440;

    let id = setInterval(frame, timeout);
    function frame(){
        if(top > 310){
            top--;
            car2.style.top = top + 'px';
        }else{
            clearInterval(id);
        }
    }

}

function bus2Routine(){
    bus2.style.left = '1000px';
    bus2.style.top = '200px';
    //bus2.style.transform = 'rotate(180deg)';
    setTimeout(bus2Drive, 0);
}

function bus3Routine(){
    bus3.style.left = '1000px';
    bus3.style.top = '200px';
    bus3.style.transform = 'rotate(180deg)';
    setTimeout(bus3Drive, 0);
}

function bus3Drive(){
    let left = 1000;
    let id = setInterval(frame, timeout);
    function frame(){
        if(left >= -65){
            left--;
            bus3.style.left = left + 'px';
        }else{
            clearInterval(id);
        }
    }
}


function busRoutine(){
    bus.style.top = '223px';
    bus.style.left = '-50px';
    setTimeout(initialDrive, 0);
    setTimeout(park, 3200);
    setTimeout(unpark, 6800);
}

function car1Routine(){
    car1.style.left = '225px';
    car1.style.top = '0px';
    car1.style.transform = "rotate(90deg)";
    setTimeout(carInitialDrive, 0);
    setTimeout(carTurnToEnd,4000);
}

function bus2Drive(){
    let left = 1000;
    let id = setInterval(frame, timeout);
    function frame(){
        if(left >= -65){
            left--;
            bus2.style.left = left + 'px';
        }else{
            clearInterval(id);
        }
    }
}

function carInitialDrive(){
    let top = 0;

    let id = setInterval(frame, timeout);
    function frame(){
        if(top <= 125){
            top++;
            car1.style.top = top + 'px';
        }else{
            clearInterval(id);
        }
    }
}

function carTurnToEnd(){
let top = 125;
let left = 225;
let deg = 90; // got to 180
    let s;
    let w;
    let slow = 0;
    let id = setInterval(frame, timeout);
    function frame(){
        if(top <= 200){
                top++;
                car1.style.top = top + 'px';


            if(deg <= 180 && top >=150){

                    deg++;
                    s = "rotate(" + deg.toString() + "deg)";
                    car1.style.transform = s;

            }
            slow++;
            if(slow % 6 === 0 ) {
                left--;
                car1.style.left = left + 'px';
            }



        }else{

            if(left >= -40){
             left--;
             car1.style.left = left + 'px';
                /*
                if(top > 180){
                    top--;
                    car1.style.top = top + 'px';
                }
                */


                if(deg <= 180){
                    deg++;
                    s = "rotate(" + deg.toString() + "deg)";
                    car1.style.transform = s;
                }
            }else {
                clearInterval(id);
            }

        }

    }

}

function unpark(){
    let pos = 325;
    let deg = 0;
    let deg2 = -15;
    let top = 245; // go down to 223
    let s;
    let w;
    let slow = 0;
    let id = setInterval(frame, timeout + 5);
    function frame(){
        if(pos <= 400) {
            pos++;
            bus.style.left = pos + 'px';
        }
        s = "rotate(" + deg.toString() + "deg)";
        // w = "rotate(" + deg2.toString() + "deg)";
        if(deg >= -15){
            slow++;
            if(slow % 2 === 1) {
                deg--;
                bus.style.transform = s;
                if(top > 223){
                    top--;
                    bus.style.top = top + 'px';
                }
            }

        }else{
            if(deg2 < 0){
                slow++;
                if(slow % 2 === 1) {
                    deg2++;
                    w = "rotate(" + deg2.toString() + "deg)";
                    bus.style.transform = w;

                if(top > 223) {
                    top--;
                    bus.style.top = top + 'px';
                 }
                }
            }else {
                if(pos <= 1000){
                    pos++;
                    bus.style.left = pos + "px";
                }
                else {
                    clearInterval(id);
                }
            }
        }
    }

}

function initialDrive(){
    let pos = -50;
    let id = setInterval(frame, timeout);
    function frame(){
        if (pos === 270){
            clearInterval(id);
        }else{
            pos++;
            bus.style.left = pos + 'px';
        }
    }

}

function park(){
    let pos = 270;
    let deg = 0; // get to 15
    let deg2 = 15; // get to 0
    let top = 223; // need to get to 245
    let s;
    let w;
    let slow = 0;

    let id = setInterval(frame, timeout + 5);

    function frame(){
        slow++;
        deg++;
        s = "rotate(" + deg.toString() + "deg)";
        if(deg <= 15){
            bus.style.transform = s;
            top++;
            pos++;
            bus.style.left = pos + 'px';
            if(top <=245){
                bus.style.top = top + 'px';
            }
        }else{

            if(slow%2 === 1) {
                deg2--;
            }
            pos++;
            bus.style.left = pos + 'px';
            if(deg2 >= 0){

                if(top <=245){
                    bus.style.top = top + 'px';
                }
                w = "rotate(" + deg2.toString() + "deg)";
                bus.style.transform = w;

            }else {
                top++;
                if(top <=245){
                    bus.style.top = top + 'px';
                    bus.style.left = pos + 'px';
                }else {

                    if(pos <= 325){
                        bus.style.left = pos + 'px';
                    }
                    else {
                        clearInterval(id)
                    }
                }
            }
        }

    }
}


