window.onload = function(){
   
    
    var submit = document.querySelector('input[type=submit]'),
        log = document.querySelector('input[name=login]'),
        pass = document.querySelector('input[name=password]'),
        errorLog = document.querySelector('.errorLog'),
        errorPass = document.querySelector('.errorPass');
        
            
    
    submit.onclick = function(event){
        
        var a = log.value,
            b = parseInt(pass.value);
        
       if((b*1 === b)){
          errorPass.style.display = 'none'
       }else{
            event.preventDefault();
            errorPass.style.display = 'inline-block';
       }
       
    
        if(isNaN(a)){
            errorLog.style.display = 'none';
        }else{
            event.preventDefault();
            errorLog.style.display = 'inline-block';
        }
        
    }
    
    
    
    
}