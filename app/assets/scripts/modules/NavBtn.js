import $ from 'jquery';


class NavBtn  {
  constructor(){
    this.navBtn = $(".nav-button");
    this.navBtnExpand = $(".nav-button__expanded");
    this.events();
    this.hiddenBtn();
  }


  events(){
    this.navBtn.click(this.toggleTheMenu.bind(this));
  }


  toggleTheMenu(){
    this.navBtnExpand.toggleClass('nav-button__expanded--is-active');
    this.navBtn.toggleClass('nav-button--close-x');

  }

  hiddenBtn(){
    var that = this;
    var lastScrollTop = 0,
        delta = 300,
        scrollingDown = false;
    $(window).scroll(function(){
       var top = $(this).scrollTop();

       if(Math.abs(lastScrollTop - top) <= delta)
          return;

        if (top > lastScrollTop){
          scrollingDown = true;

        } else {
          scrollingDown = false;
        }
      lastScrollTop = top;

          if (scrollingDown){
              that.navBtn.addClass('nav-button--is-hidden');

          } else {
              that.navBtn.removeClass('nav-button--is-hidden')

          }
       })
     }


}

export default NavBtn;
