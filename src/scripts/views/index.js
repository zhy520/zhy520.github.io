require('../lib/zepto.min.js');
var indexTpl=require('../tpl/index.string');
document.body.innerHTML+=indexTpl;

$(function(){
  // var myIscroll=new IScroll('#index_scroll`');
  var myScroll = new IScroll('#index-scroll');
})

var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical',
    loop: true,
    autoplay:2500,
    speed:1000,
    // 如果需要分页器
    pagination: '.swiper-pagination',

    // // 如果需要前进后退按钮
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    //
    // // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
  })
