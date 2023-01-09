const arrayObj=[];
const miniObjArray = [];

let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");

function addTaskInput() {
    document.getElementById("container").style.filter = "blur(5px)";
    document.getElementById("focus").style.visibility ="visible";
    document.getElementById("homepgtxt").style.display = "none";
}

function addDataObj(){
    let invalue = document.getElementById("inputbox").value;
  
    let objData = {
      id: Date.now(),
      taskName: invalue,
    }
  
    arrayObj.push(objData);
    addCard()
  
  }

  function addCard() {
   
    let divElement = document.createElement("div")
    let headDiv = document.createElement("div");
    let middleDiv = document.createElement("div");
    let iconDiv = document.createElement("div");
    let h = document.createElement("h1");
    let iconAdd = document.createElement("i");
    let iconDelete = document.createElement("i");

    divElement.setAttribute("class", "card-1");
    divElement.setAttribute("id", "cardId");
    headDiv.setAttribute("class", "head-div");
    headDiv.setAttribute("id", "head-div-Id");
    middleDiv.setAttribute("class", "middle-div");
    middleDiv.setAttribute("id", "middle-div-Id");
    iconDiv.setAttribute("class", "icon-div");
    iconDiv.setAttribute("id", "icon-div-Id");
    iconAdd.setAttribute("class", "fas fa-plus-circle");
    iconAdd.setAttribute("id", "add-icon");
    iconDelete.setAttribute("class", "fas fa-trash-alt");
    iconDelete.setAttribute("id", "deleteIcon");
    
    let headingText = document.createTextNode(arrayObj[arrayObj.length-1].taskName);
    h.appendChild(headingText)
    headDiv.appendChild(h);
    divElement.appendChild(headDiv);
    divElement.appendChild(middleDiv);
    iconDiv.appendChild(iconDelete);
    iconDiv.appendChild(iconAdd);
    divElement.appendChild(iconDiv);

//deleting the card

  iconDelete.addEventListener('click', ()=>{
    divElement.remove();
  })

  //creating again mini item
    iconAdd.addEventListener('click', ()=>{
    document.getElementById("container").style.filter = "blur(8px)";
    document.getElementById("focus2").style.visibility =
    "visible";

  })

    let btn1_i = document.getElementById("btn1-i");
    btn1_i.addEventListener("click", miniItemObj);

    document.getElementById("list-container").appendChild(divElement); 
    document.getElementById("focus").style.visibility =  "hidden";
    
    document.getElementById("container").style.filter = "blur(0px)";

  
    headDiv.addEventListener('click', ()=>{
    document.getElementById("heading1").style.visibility="hidden";
    document.getElementById("middletxt").style.fontSize="70px";
    document.getElementById("middletxt").innerText=h.innerText;
    document.getElementById("backbtn").style.visibility="visible";
    backbtn.addEventListener("click",()=>{
    document.getElementById("heading1").style.visibility="visible";
    document.getElementById("middletxt").style.visibility="hidden";
    document.getElementById("backbtn").style.visibility="hidden";
    });
    
    document.getElementById("card-header-content").style.display = "block";
    document.getElementById("middle-mini-item-heading").innerHTML = arrayObj[arrayObj.length-1].taskName;
    document.getElementById("addcard").innerText = "";
    document.getElementById("list-container").style.visibility = "hidden";
    divElement.style.visibility = "visible";
    document.getElementById("middle-mini-item-heading").style.fontSize = "50px";
  })
  }

// 2nd half
function closeDataObj()
{
    document.getElementById("container").style.filter = "blur(0px)";
    document.getElementById("focus").style.visibility ="hidden";
    document.getElementById("homepgtxt").style.display = "none";
}

let btn2_i=document.getElementById("btn2-i").addEventListener("click",()=>{
    document.getElementById("container").style.filter = "blur(0px)";
    document.getElementById("focus").style.visibility ="hidden";
    document.getElementById("homepgtxt").style.display = "none";
    document.getElementById("focus2").style.visibility ="hidden";
})


function miniItemObj(){
    let inputValue = document.getElementById("inputbox2").value;
    let miniObj = {
    id: Date.now(),
    miniItemName: inputValue,
    }

    miniObjArray.push(miniObj);
    addItem()

}

function addItem(){
    let miniItemDiv = document.createElement("div");
    let itemSpan = document.createElement("span");
    let cancelItemSpan = document.createElement("span");
    let v = document.createTextNode(miniObjArray[miniObjArray.length-1].miniItemName);
    let i = document.createTextNode("Mark Done");


    miniItemDiv.setAttribute("class", "mini-item-div");
    itemSpan.setAttribute("id", "mini-item");
    cancelItemSpan.setAttribute("id", "cancel-item");


    miniItemDiv.appendChild(itemSpan);
    miniItemDiv.appendChild(cancelItemSpan);
    itemSpan.appendChild(v);
    cancelItemSpan.appendChild(i);
    document.getElementById("middle-div-Id").appendChild(miniItemDiv);
    
    cancelItemSpan.addEventListener('click', ()=>{
    cancelItemSpan.remove();
    itemSpan .style.textDecoration = "line-through";
    itemSpan .style.color = "red";

})

    document.getElementById("focus2").style.visibility =  "hidden"; 
    document.getElementById("container").style.filter = "blur(0px)";

}