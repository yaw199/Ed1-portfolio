//Selectors//
const subtitle = document.querySelectorAll(".subtitle");
const imageContainer = document.querySelectorAll(".portfolio-item-wrapper");







//AddEventlistener//

imageContainer.forEach(item=>{
    item.addEventListener("mouseover", function (){
        this.lastElementChild.childNodes[3].classList.add("sub-active");
        this.childNodes[1].classList.add("img-darken");
        
        
    })
    item.addEventListener("mouseout", function (){
        item.lastElementChild.childNodes[3].classList.remove("sub-active");
         item.childNodes[1].classList.remove("img-darken");
        
        
    })
})

