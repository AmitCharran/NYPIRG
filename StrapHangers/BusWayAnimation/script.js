

let busID = document.getElementById("bus");
let container = document.getElementById("everything");
let test = document.getElementById("testBox");
let timeout  = 10;
function moveForward(){

    setTimeout(busRoutine, 0);
    setTimeout(busRoutine, 20000);

}


function busRoutine(){
    busID.style.left = '-50px';
    busID.style.top = '110px';
    setTimeout(firstMove, 0);
    setTimeout(park, 1000);
    setTimeout(unpark, 3000);
    setTimeout(driveToEnd, 3500)
}

function firstMove(){
    let position = -50;
    let id = setInterval(frame, timeout);
    function frame(){
        if (position === 80){
            clearInterval(id);
        }else{
            position++;
            busID.style.left = position + "px";
        }
    }
}


function park(){
    let deg = 0;
    let deg2 = 30;
    let pos = 80;
    let top = 110;
    let id2 = setInterval(frame2, timeout);
    let slow = 0;
    let s;
    let w;
    function frame2(){
        deg++;
        s = "rotate(" + deg.toString() + "deg)";
        w = "rotate(" + deg2.toString() + "deg)";
        slow++;
        if(deg > 30){
            deg2--;
        }
        if(deg2 === 0)
        {
            clearInterval(id2);
        }else{
            if(deg < 30) {
                busID.style.transform = s;
                if(slow % 2 === 1) {
                    top++;
                    busID.style.top = top + "px";
                }
            }
            else{
                busID.style.transform = w;
                pos++;
                busID.style.left = pos + "px";
            }
        }
    }

}


function unpark(){

    let top = 125; // need to get to 110
    let left = 110; // maybe go 160 more
    let deg = 0; // -15
    let deg2 = -15; // to 0
    let s;
    let w;
    let slow = 0;
    let id = setInterval(frame, timeout + 10);
    function frame(){
        slow++;
        if(deg > -15) {
            deg--;
            if (slow % 2 === 0) {
            left++;
        }
            s = "rotate(" + deg.toString() + "deg)";
            busID.style.transform = s;

            busID.style.left = left + 'px';

            top--;
            if(top >= 110){
                busID.style.top = top + 'px';
            }

        }else{
            left++;
            w = "rotate(" + deg2.toString() + "deg)";
            if(deg2 < 0){
                deg2++;
                busID.style.left = left + 'px';
                busID.style.transform = w;

            }
            else{clearInterval(id);
            }
        }
    }

}

function driveToEnd(){
    let left = 129;
    let top = 112;
    let slow = 0;
    let id = setInterval(frame, timeout);
    function frame(){
        if (left < 1000){
            left++;
            busID.style.left = left + 'px';
            if(top > 105){
                slow++;
                if(slow % 10 === 1) {
                    top--;
                    busID.style.top = top + 'px';
                }
            }
        }else{
            clearInterval(id);
        }

    }
}
