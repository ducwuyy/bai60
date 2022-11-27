var img=[];
var curimg=0;
function load_images(){
    for(i=2;i<6;i++){
        img[i]=new Image();
        img[i].src="http://bizweb.dktcdn.net/thumb/grande/100/340/942/products/hoa-hong-leo-phap-nahema-rose-1.jpg?v=1550909912557"+i+".jpeg";
    }
}
function next(){
    if (curimg<img.length-1){
        curimg++;
        document.getElementById("rose").src=img[curimg].src;
    }
    if(curimg==img.length-1){
        curimg=0;
    }
}