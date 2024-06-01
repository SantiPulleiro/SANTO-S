const addtoshoppingcardbutton = document.querySelectorAll(".boton_añadir_carrito")
addtoshoppingcardbutton.forEach(addtocar => {addtocar.addEventListener("click", add_to_card_clicked)

funtion add_to_card_clicked(event){
    const button = event.target
    const item = button.close(."item")

    const itemlist = item.querySelector(".item-tite").textcontent   
}