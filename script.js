let add= document.querySelector("#add-btn")
let list=document.querySelector("#todo-list")
let todoinput=document.querySelector("#todo-input")

let turn=0
add.addEventListener("click",(evt)=>{
    if(todoinput.value!==""){
    let newitem=document.createElement("li")
    newitem.innerText=todoinput.value
    newitem.classList.add("todo-item")
    newitem.addEventListener("dblclick",()=>{
        if(turn=="0"){
            newitem.classList.remove("todo-item")
            newitem.classList.add("completed")
            turn=1
        }else{
            newitem.classList.add("todo-item")
            newitem.classList.remove("completed")
            turn=0
        }
    })
    todoinput.value=""
    list.prepend(newitem)} 
})



