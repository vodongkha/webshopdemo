const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNuber = document.querySelectorAll('.slider-content-left-top img')
// console.log (imgNuber)
let index = 0
rightbtn.addEventListener ("click" , function(){
    index = index+1
    if(index> imgNuber.length-1){
        index =0
    }
    document.querySelector(".slider-content-left-top").style.right = index *110+"%"
})

leftbtn.addEventListener ("click" , function(){
    index = index-1
    if(index <0){
        index = imgNuber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index *110+"%"
})

// slider--------------------
const imgNubeli = document.querySelectorAll('.slider-content-left-bottom li')
imgNubeli.forEach(function(image,index){
    image.addEventListener("click" ,function(){
        document.querySelector(".slider-content-left-top").style.right = index *110+"%"
    })
})

// auto slider----------
function imgauto () {
    index = index+1
    if(index> imgNuber.length-1){
        index =0
    }
    document.querySelector(".slider-content-left-top").style.right = index *110+"%"
}
setInterval(imgauto,3000)

// slider product 1---------------------
const rightbtnone = document.querySelector('.fa-chevron-right-one')
const leftbtnone = document.querySelector('.fa-chevron-left-one')
const imgNuberone= document.querySelectorAll('.slider-product-one-content-items')
// console.log(rightbtnone)
// console.log(leftbtnone)

rightbtnone.addEventListener ("click" , function(){
    index = index+1
    if(index> imgNuberone.length-1){
        index =0
    }
    document.querySelector(".slider-product-one-content-items-container").style.right = index *110+"%"
})

leftbtnone.addEventListener ("click" , function(){
    index = index-1
    if(index <0){
        index = imgNuberone.length-1
    }
    document.querySelector(".slider-product-one-content-items-container").style.right = index *110+"%"
})

// slider product 2---------------------
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNubertwo= document.querySelectorAll('.slider-product-two-content-items')
// console.log(rightbtntwo)
// console.log(leftbtntwo)

rightbtntwo.addEventListener ("click" , function(){
    index = index+1
    if(index> imgNubertwo.length-1){
        index =0
    }
    document.querySelector(".slider-product-two-content-items-container").style.right = index *110+"%"
})

leftbtntwo.addEventListener ("click" , function(){
    index = index-1
    if(index <0){
        index = imgNubertwo.length-1
    }
    document.querySelector(".slider-product-two-content-items-container").style.right = index *110+"%"
})

// slider product 3--------------------------------

const rightbtnthree = document.querySelector('.fa-chevron-right-three')
const leftbtnthree = document.querySelector('.fa-chevron-left-three')
const imgNuberthree= document.querySelectorAll('.slider-product-three-content-items')
// console.log(rightbtnthree)
// console.log(leftbtnthree)

rightbtnthree.addEventListener ("click" , function(){
    index = index+1
    if(index> imgNuberthree.length-1){
        index =0
    }
    document.querySelector(".slider-product-three-content-items-container").style.right = index *110+"%"
})

leftbtnthree.addEventListener ("click" , function(){
    index = index-1
    if(index <0){
        index = imgNuberthree.length-1
    }
    document.querySelector(".slider-product-three-content-items-container").style.right = index *110+"%"
})


// slider product 4-------------------------
const rightbtnfour = document.querySelector('.fa-chevron-right-four')
const leftbtnfour = document.querySelector('.fa-chevron-left-four')
const imgNuberfour= document.querySelectorAll('.slider-product-four-content-items')
// console.log(rightbtnfour)
// console.log(leftbtnfour)

rightbtnfour.addEventListener ("click" , function(){
    index = index+1
    if(index> imgNuberfour.length-1){
        index =0
    }
    document.querySelector(".slider-product-four-content-items-container").style.right = index *110+"%"
})

leftbtnfour.addEventListener ("click" , function(){
    index = index-1
    if(index <0){
        index = imgNuberfour.length-1
    }
    document.querySelector(".slider-product-four-content-items-container").style.right = index *110+"%"
})