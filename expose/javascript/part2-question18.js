let nIntervId;

function changeColor() {
  
  
    nIntervId = setInterval(printDate, 1000);
  
}

function printDate(){
    let d = new Date();
    let time = d.toLocaleDateString();

    console.log(time);
}