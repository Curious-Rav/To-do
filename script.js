let add= document.querySelector("#add-btn")
let list=document.querySelector("#todo-list")
let todoinput=document.querySelector("#todo-input")

let turn=0
add.addEventListener("click",(evt)=>{
    if(todoinput.value!==""){
        let newitem=document.createElement("li")
        newitem.classList.add("todo-item")
        

        // 1. Create a span for the text to separate it from the button
        let textSpan = document.createElement("span")
        textSpan.innerText = todoinput.value
        newitem.appendChild(textSpan) // Put text inside li

        // 2. Create the delete button
        let newdel=document.createElement("button")
        newdel.classList.add("delete-btn")
        newdel.innerHTML=`<i class="fa-solid fa-trash" aria-hidden="true"></i>`
        newdel.addEventListener("click",()=>{
            newitem.remove()
        })
        
        // 3. CRITICAL: Append the delete button inside the li element!
        newitem.appendChild(newdel) 

        // Your existing dblclick listener
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
        list.prepend(newitem)
    } 
})
let clear=document.querySelector(".clear")

clear.addEventListener("click",()=>{
    while(list.hasChildNodes("li")==true){
        list.firstChild.remove()
    }
})



