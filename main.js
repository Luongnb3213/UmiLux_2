const navbar = document.querySelector('.navbar_item_list')
const navbar_mobile = document.querySelector('.navbar_mobile')
const layer = document.querySelector('.layer')
const close = document.querySelector('.close')
const footer_icon = document.querySelectorAll('.footer_icon');

if(navbar_mobile){
    navbar_mobile.onclick= function(){
        if(navbar.classList.contains('slideout')){
            navbar.classList.remove('slideout')
        }
        navbar.classList.add('slidein')
        layer.classList.add('showup')
    }
}
if(close){
    close.onclick= function(){
        navbar.classList.remove('slidein')
        navbar.classList.add('slideout')
        layer.classList.remove('showup')
    }
}
if(footer_icon){
    footer_icon.forEach((i) => {
        i.onclick= function(){
          let parentElement = i.parentElement.parentElement;
          let footer_list = parentElement.querySelector('.footer_list')
          footer_list.classList.toggle('godown')
            this.classList.toggle('rotate')
        }
       
    })
}