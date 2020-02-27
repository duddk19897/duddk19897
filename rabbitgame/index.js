(function(){
  
    const stage= document.querySelector('.stage');
  
    function clickHandler(e){
      
    stage.removeChild(e.target);
    
    }

stage.addEventListener('click',clickHandler)
})();