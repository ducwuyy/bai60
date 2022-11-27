// slide ảnh
var index = 1;
            changeImage = function(){
                var imgs = ["img/slide2.png","img/slide3.png","img/slide1.png"];
                document.getElementById('img').src = imgs[index];
                index++;
                if(index==3){
                    index = 0;
                }
            }
            setInterval(changeImage,2000);
// menu 
$(document).ready(function(){
    $('#toggle').click(function(){
        $('nav').slideToggle();
    });
})
