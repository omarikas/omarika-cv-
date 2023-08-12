


window.addEventListener("scroll", function() {
    var onappear=document.querySelectorAll('i')
    console.log(onappear.length)
   onappear.forEach(function(elem) {
    
      var vwTop = window.pageYOffset;
      var vwBottom = (window.pageYOffset + window.innerHeight);
      var elemTop = elem.offsetTop;
      var elemHeight = elem.offsetHeight;
      
      if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
       elem.classList.add("visible");
      } else {
        elem.classList.remove("visible");
      }
    });
    var on=document.querySelectorAll('#job')
    on.forEach(function(elem) {
    
        var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = elem.offsetTop;
        var elemHeight = elem.offsetHeight;
        
        if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
         elem.classList.add("visible");
        } else {
          elem.classList.remove("visible");
        }
      });
  }, false);