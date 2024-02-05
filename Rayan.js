let Button = document.querySelector('.btn');







addEventListener('scroll',ev=>{


    if (scrollY >= 110){
        Button.style.opacity = '100%';
        Button.style.display = 'inline-block'
    
    }
else{

    Button.style.display = 'none'

}


})


Button.onclick = function () {


window.scrollTo({
top:0,

})


}