let d = new Date();
let time  = d.toLocaleDateString();

setInterval(printDate, 1000, time);

function printDate(time){
    console.log(time);
}