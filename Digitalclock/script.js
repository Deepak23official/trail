const clock = document.querySelector('.Clock')
function digitalClock(){
    let hrs = new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()
    let txt = ''
    if(hrs>=12){
        txt = "PM"
    }else if(hrs<12){
        txt = "AM"
    }
    hrs = hrs<10 ? "0"+hrs : hrs
    clock.innerHTML = `${hrs} : ${min} : ${sec}  ${txt}`
    
}
setInterval(digitalClock,1000)


