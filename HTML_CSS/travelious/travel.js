document.addEventListener("DOMContentLoaded",function (e){
    console.log(e)
});

function handleClickEvent(){
    let element = document.getElementsByClassName("top-header-container")
    console.log(element)
    element[0].style.backgroundImage = `linear-gradient(rgba(0,0,0,0.527)),rgba(0,0,0,0.5)),url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`
}

function showModal(){
    let containerElement = document.getElementsByClassName("container")
    let modalContainer = document.createElement("div")

    let closeButton = document.createElement("button")
    closeButton.innerText = "X"
    closeButton.style.border = "unset"
    closeButton.style.outline = "unset"
    closeButton.style.borderRadius = "50%"
    closeButton.style.padding = "2% 3.5%"
    closeButton.style.backgroundColor = "white"
    closeButton.style.float = "right"
    closeButton.style.fontWeight = "bold"

    closeButton.addEventListener("click", function(e){
        modalContainer.style.display = "none"
    })

    modalContainer.appendChild(closeButton)
   
   

    modalContainer.className = "show_modal"
    containerElement[0].appendChild(modalContainer)
}

function handleInputChange(event){ 
    console.log(event)
}