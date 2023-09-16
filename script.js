const food = {
    plainBurger : {
        name : "GAMBURGER " , 
        price : 10000 ,
        amount : 0 ,
        kcall : 400 ,
    } ,

    freshBurger : {
        name : "GAMBURGER FRESH" , 
        price : 10000 ,
        amount : 0 ,
        kcall : 400 ,
    } , 
    freshCombo : {
        name : "FRESH COMBO" , 
        price : 10000 ,
        amount : 0 ,
        kcall : 400 ,
    } 

}

const btn = [...document.querySelectorAll('.main__product-btn')]

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click' , () => {
        console.log(this.closest(".main__product").getAttribute('id'))
    })
    
}