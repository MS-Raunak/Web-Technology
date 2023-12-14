let getMessage = document.getElementById('msg')
let startTyping = document.getElementById('typing')
let getSecond = document.getElementById('second')
let getMinute = document.getElementById('minute')
let getSpan = document.getElementById('sp')

let getBtn1 = document.getElementById('btn-1')
let getBtn2 = document.getElementById('btn-2')
let getBtn3 = document.getElementById('btn-3')
let getBtn4 = document.getElementById('btn-4')

let arr = ["Hi,how are you?", "Where are you going?", "Best of Luck!", "You are great man!"];
let message = " ";
let seconds = 0;
let minutes = 0;
let milliSeconds = 0


let interval = null;

let flag = false;




getBtn1.addEventListener('click', ()=>{
    main();
    getMessage.innerText = arr[0]
    message = arr[0]
})

getBtn2.addEventListener('click', ()=>{
    getMessage.innerText = arr[1]
    message = arr[1]
})

getBtn3.addEventListener('click', ()=>{
    getMessage.innerText = arr[2]
    message = arr[2]
})

getBtn4.addEventListener('click', ()=>{
    
    getMessage.innerText = arr[3]
    message = arr[3]
})



function main(){
    startTyping.addEventListener('keyup', () => {
        if(startTyping.value ){
            interval = setInterval(startTimer, 10);
        }
        if(startTyping.value === "Hi"){
            getSpan.innerText = "Green"
        }
        
    })
}



function startTimer(){
    
    milliSeconds+=10;
    
    if(milliSeconds === 1000)
    {
        seconds = seconds + 1;
        getSecond.innerText =  addZero(seconds)
        milliSeconds = 0;

        if(seconds===60){
            minutes+=1;
            getMinute.innerText = addZero(minutes)
            seconds=0;
        }
    }

    function addZero(time){
        if(time<10){
            time= "0" + time
        }
        return time
    }
    
}


