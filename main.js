const button = document.querySelector(".submission button");
const list = document.querySelector(".list ul");
const itemList = document.querySelector(".list");
const deleteBtns = document.querySelectorAll("#delete");
const parentList = document.querySelector(".parent-list");
const clearItems = document.querySelector(".clear button");
const editBtn = document.querySelector("#edit");

//Get the value of the input field
const inputValue = document.querySelector(".input-type");

const handleOutgoingChat = () =>{
    const html = ` 
    <div class="item">
        <p class="groc">Vegetables</p>
    </div>
   
    <div class="icons">
    <i class="fa-solid fa-pen-to-square" id="edit"></i>
    <i class="fa-solid fa-trash" id="delete"></i>
    </div>`

let content = inputValue.value;

const myElement = document.createElement("li");
myElement.innerHTML=html;
myElement.querySelector(".groc").textContent = content;

//If input field is empty
if(inputValue.value==="") return;
list.appendChild(myElement);    

itemList.scrollTop = itemList.scrollHeight; //Scroll to the bottom 

//clear the input filed after adding the item
inputValue.value="";
}

const removeAllItems = () =>{
  parentList.innerHTML="";
}

button.addEventListener("click", (e) =>{
    e.preventDefault();
    handleOutgoingChat();
})

//Delet the item when clicked and used event delegation method
parentList.addEventListener("click", function(e){
    //e.target is clicked element
    //if it was a list item 
    if(e.target && e.target.id === "delete"){
        e.target.closest("li").remove();
    }
});

//Clear all items
clearItems.addEventListener("click", removeAllItems);

//Edit eventListener
parentList.addEventListener("click", function(e){
    //e.target is clicked element
    //if it was a list item 
    if(e.target && e.target.id === "edit"){
        let list= e.target.closest("li");
        list = list.querySelector(".groc").textContent;
        inputValue.value=list;

        e.target.closest("li").remove();
    }
});



