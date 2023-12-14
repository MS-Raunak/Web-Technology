let getAddItem1 = document.getElementById('addItem1')
let getAddItem2 = document.getElementById('addItem2')
let getAddItem3 = document.getElementById('addItem3')
let getAddItem4 = document.getElementById('addItem4')
let getAddItem5 = document.getElementById('addItem5')

let getRemoveItem1 = document.getElementById('removeItem1')
let getRemoveItem2 = document.getElementById('removeItem2')
let getRemoveItem3 = document.getElementById('removeItem3')
let getRemoveItem4 = document.getElementById('removeItem4')
let getRemoveItem5 = document.getElementById('removeItem5')

let getItem1 = document.getElementById('item1');
let getItem2 = document.getElementById('item2');
let getItem3 = document.getElementById('item3');
let getItem4 = document.getElementById('item4');
let getItem5 = document.getElementById('item5');

let getPrice1 = document.getElementById('price1')
let getPrice2 = document.getElementById('price2')
let getPrice3 = document.getElementById('price3')
let getPrice4 = document.getElementById('price4')
let getPrice5 = document.getElementById('price5')

let getTotal1 = document.getElementById('total1')
let getTotal2 = document.getElementById('total2')
let getTotal3 = document.getElementById('total3')
let getTotal4 = document.getElementById('total4')
let getTotal5 = document.getElementById('total5')

let price1 = 80;
let total1 = 0;
let item = 0;

getItem1.innerText = item;
getItem2.innerText = item;
getItem3.innerText = item;
getItem4.innerText = item;
getItem5.innerText = item;

getPrice1.innerText = price1;
getTotal1.innerText = total1;


getAddItem1.addEventListener('click', function(){
    item++;
    getItem1.innerText = item;
    getTotal1.innerText = item*price1;
})

getRemoveItem1.addEventListener('click' , function(){
    if(item==0) return;
    item--;
    getItem1.innerText = item;
    getTotal1.innerText = item*price1;
})



