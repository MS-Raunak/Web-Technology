let getAddId = document.getElementById('addItem');
let getRemoveId = document.getElementById('removeItem');
let getTotalId = document.getElementById('total');
let getMessage = document.getElementById('msg');


let totalProduct = 0;
getTotalId.innerText = totalProduct;

getAddId.addEventListener('click', function(){
    if(totalProduct==0) getMessage.innerText = "Welcome to Cart!"

    totalProduct++;
    getTotalId.innerText = totalProduct;
})

getRemoveId.addEventListener('click', function(){
    if(totalProduct===0) {
        getMessage.innerText = "Your Cart is Empty, Please add item!";
        return;
    };
    totalProduct--;
    getTotalId.innerText = totalProduct;
})