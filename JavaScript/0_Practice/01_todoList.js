let inputBox = document.getElementById('inputBox');
let addBtn = document.getElementById('btnAdd');
let displayItems = document.getElementById('displayItems');



let tasks = [];
addBtn.addEventListener('click', () => {
    let inputText = inputBox.value;
    if(!inputText) {
        alert("Please enter task!")
    }
   
    else{
        tasks.unshift(inputText)
        printItems();
    }
})

function printItems(){
    let str = " ";
    tasks.forEach((ele, i) => {
        str+= `
                <div class="col-md-3 mt-1">
                    <div class="card bg-secondary">
                        <div class="card-body">
                            <p>${ele}</p>
                            <button class="btn btn-danger" onclick="deleteTask(${i})">Delete</button>
                            <button class="btn btn-primary">Edit</button>
                        </div>
                    </div>
                </div>`
    })
    displayItems.innerHTML = str;
    inputBox.value = "";

}

function deleteTask(index){
    console.log(index);
    tasks.splice(index, 1)
 
    printItems()
}