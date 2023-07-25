 const containerE1 =document.querySelector(".container")

 const btnE1 =document.querySelector(".btnE1")

 const popupContainerE1 =document.querySelector(".popup-containerE1")

 const closeIconE1 =document.querySelector(".close-icon")

 btnE1.addEventListener("click", () => {

    containerE1.classList.add("active");
    
    popupContainerE1.classList.remove("active");

 } );