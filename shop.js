 var styleshop = document.getElementsByName('styleshop');
    for (var i = 0, length = styleshop.length; i < length; i++) {
      styleshop[i].addEventListener('click',function(){
	
 el('mausanpham').src       = this.getAttribute('mausanphama');

      });
    }