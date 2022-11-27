window.onload = function() {
    var commentEl = document.getElementById('comment');
    var submitButton = document.getElementById('submit');
   
  
   
    
    submitButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var commentOutputEl = document.getElementById('commentOutput');
      commentOutputEl.textContent = commentEl.value;
      
      
    });
    
    commentEl.addEventListener('input', function() {
      /* console.log(this.value); */ 
      var currentComment = this.value;
      var length = currentComment.length;
     
    
      
      var commentSizeEl = document.getElementById('commentSize');
      commentSizeEl.textContent = length + '/140';
     
      if (length > 140) {
        commentSizeEl.style.color = 'red';
        this.style.borderColor = 'red';
      } else {
        commentSizeEl.style.color = 'black';
        this.style.borderColor = 'black';
      }
      
       
      
      
     
     
      
    })
    
  }