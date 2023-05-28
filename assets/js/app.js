let cl = console.log;

// 'use strict'

function setZero (num){
    // if(num < 10){
    //     return '0' + num
    // }else{
    //     return num
    // }

    return num < 10 ? ('0' + num) : num
}
function createDigitalClock(){
    const clock = document.getElementById('digitalClock');

    let d = new Date();
    cl(d);

    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = 'AM';

    // var result = `${setZero(hr)} : ${setZero(min)} : ${sec} ${setZero(session)}` //comes prb time show in 24hrs

if(hr >= 12){ // used for makes clock 12hrs
    session = 'PM';
    hr = hr - 12 //4:51 used for after 12pm time show in 12hrs.
}

// if(hr < 10){
    // hr = 0 + hr// addition
    //    hr = '0' + hr
// }

// if(min < 10){
//     min = '0' + min
// }


// if(sec < 10){
//     sec = '0' + sec
// }

// if(hr < 10){
//     hr = '0' + hr
// }else{
//     hr = hr
// }

// hr = setZero(hr)
// min = setZero(min)
// sec = setZero(sec)

let result = `${setZero(hr)} : ${setZero(min)} : ${sec} ${setZero(session)}`

//ternary opr
// (hr < 10) ? (hr = '0' + hr) : hr = hr; // these think repeat thats why we create one more function.
// (min < 10) ? (min = '0' + min) : min = min;
// (sec < 10) ? (sec = '0' + sec) : sec = sec

clock.innerHTML = result;
setTimeout(createDigitalClock, 1000)// it is used for change the time continously and setTimeout method having two arguments one is function name another is 1000ms.

}


createDigitalClock();