// get element id
let getLike = document.getElementById("likeId")
let getdislike = document.getElementById('dislikeId')
let getResult  = document.getElementById('resultId')
let getLikeIcon = document.getElementById('iLike')
let getDislikeIcon = document.getElementById('iDislike')
let getImg = document.getElementById('img')

// get button id
let btnlike = document.getElementById('btnLike');
let btndislike = document.getElementById('btnDislike');

// set result 0 initially
// let like = 0;
let like = localStorage.getItem('likes')? localStorage.getItem('likes') : 0;
// let dislike = 0;
let dislike = localStorage.getItem('dislikes')? localStorage.getItem('dislikes') : 0;
// let result = 0;
let result = localStorage.getItem('results')? localStorage.getItem('results') : 0;

getLike.innerText = like;
getdislike.innerText = dislike;
getResult.innerText = result;


localStorage.clear()


// like button function
btnlike.addEventListener('click', function(){
   /* like++;
    result++;
    getLike.innerText = like;
    getLikeIcon.style.color='green'
    getResult.innerText = result;
    if(like==1){
        getImg.innerHTML = "<h2>Hello</h2>"
        
    }
    */
   
    like++
    localStorage.setItem('likes', like)
    getLike.innerText = localStorage.getItem('likes');
    result++;
    localStorage.setItem('results', result)
    getResult.innerText = localStorage.getItem('results')
    getLikeIcon.style.color='green'
    // if(like===5) getLike.innerText = "Hi Deepu!"


})

// dislike button function
btndislike.addEventListener('click', function(){
    // dislike++;
    // result++;
    // getdislike.innerText = dislike;
    // getDislikeIcon.style.color = 'red'
    // getResult.innerText = result;

    dislike++
    localStorage.setItem('dislikes', dislike)
    getdislike.innerText = localStorage.getItem('dislikes');
    result++;
    localStorage.setItem('results', result)
    getResult.innerText = localStorage.getItem('results')
    getDislikeIcon.style.color = 'red'
})


