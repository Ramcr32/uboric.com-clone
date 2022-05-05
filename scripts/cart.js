

import {quantity_div} from "../components/common.js"
// console.log(quantity_div())
start()
function start() {
    let id;
    let col=["#ee7752","#e73c7e","#23a6d5","#23d5ab"]
    let i=0

    let div=document.querySelector("#r_items>div:first-child")

    // div.style.backgroundColor="green"
    id=setInterval(()=>{
        if(i==col.length){
            i=0;
        }
        div.style.backgroundColor=col[i]
        i++;
    },1000)

}
// function stop(){
//     clearInterval(id)
// }

// stop()
function getEl(id){
    return document.getElementById(id)
}

// collect data from local storage and append the data id r_data
let data= JSON.parse(localStorage.getItem("cart"))
// console.log(data)
function appendData(data) {
    console.log(data)
    data.forEach(({Poster,Title,image,name,price,quantity},index)=>{
        console.log(index)
        let main=document.createElement("div")

        let col1=document.createElement("div")
        col1.id="r_col1"
        let cancel=document.createElement("img")
        cancel.id="r_cancel";
        cancel.src="../components/circle-xmark-solid.svg"
        cancel.addEventListener("click",()=>{
            remove(data,index)
        })
        let img=document.createElement("img")
        img.id="r_img";
        img.src=image;
        col1.append(cancel,img)
        let pName=document.createElement("p")
        pName.id="r_col2"
        let pPrice=document.createElement("p")
        pPrice.id="r_col3"
        pName.innerText=name;
        pPrice.innerText=price;
        let col4=document.createElement("div")
        col4.className="r_inQuntity";
        col4.innerHTML=quantity_div();
        let col5=document.createElement("p")
        col5.innerText=pPrice*col4;

        main.append(col1,pName,pPrice,col4,col5)
        document.getElementById("r_data").append(main)







    })

}
function remove(data,index){
    console.log(index)
}
appendData(data)