function time(){
    let d = new Date();
    let time= d.toLocaleTimeString();
    console.log(time);
}
setInterval(time, 1000);

