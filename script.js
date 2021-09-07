let button = document.getElementsById("btn_mobile");
let menu_item = document.getElementById("menu_item");

button.addEventListener("click",()=>{
    if (getComputedStyle(menu_item).display != none){
        menu_item.style2.display="none";
    }else{
        menu_item.style2.display="block";
    }
});