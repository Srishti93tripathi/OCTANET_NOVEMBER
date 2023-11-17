let btn= document.querySelector("button");
let ul= document.querySelector("ul");
let input= document.querySelector("input");
btn.addEventListener("click", function() {
      let item= document.createElement("li");
      item.innerText=input.value;
      let delbtn= document.createElement("button");
      delbtn.innerText="delete";
      delbtn.classList.add("delete");

      item.appendChild(delbtn);
      ul.appendChild(item);

      console.log(input.value);
      input.value="";
}
);
ul.addEventListener("click", function(event){
     if(event.target.nodeName=="BUTTON"){
           let listItem=event.target.parentElement;
           listItem.remove();
     }
});



/*delbtns= document.querySelectorAll(".delete");
item= document.querySelector("li");
for(delbtn of delbtns){

delbtn.addEventListener("click", function(){
      let par= this.parentElement;
      par.remove();
});
}*/