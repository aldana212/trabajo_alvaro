window.onscroll = function(){

    scrolls = document.documentElement.scrollTop;
    header = document.getElementById("header");

    if(scrolls > 20){
      header.classList.add("nav_header");
    }else if(scrolls < 20){
        header.classList.remove("nav_header");
    }
}