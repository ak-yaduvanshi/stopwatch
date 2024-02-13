let hr=0;
let min=0;
let sec=0;
let msec=0;

let timer = false;

function myfun() {
    if (timer == true) {    
        msec++;
        
        if (msec == 99) {
            sec++;
            msec = 0;
        }
        if (sec == 59) {
            min++;
            sec = 0;
        }
        if (min == 59) {
            hr++;
            min = 0;
        }


        let msec_str = msec;
        let sec_str = sec;
        let min_str = min;
        let hr_str = hr;
        if(msec<10){
            msec_str="0"+msec;
        }
        if(sec<10){
            sec_str="0"+sec;
        }
        if(min<10){
            min_str="0"+min;
        }
        if(hr<10){
            hr_str="0"+hr;
        }
        setTimeout("myfun()", 10)


        document.querySelector("#msec").innerHTML = msec_str;
        document.querySelector("#sec").innerHTML = sec_str;
        document.querySelector("#min").innerHTML = min_str;
        document.querySelector("#hr").innerHTML = hr_str;
    }
}


document.querySelector(".start").addEventListener("click", () => {
    timer = true;
    myfun();
})
document.querySelector(".stop").addEventListener("click", () => {
    timer = false;
})
document.querySelector(".reset").addEventListener("click", () => {
    location.reload();
})